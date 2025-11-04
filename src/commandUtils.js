export const commandCreator = (parsedStructure, history, searchQuery = "") => {
  const nonProjectCommands = [];
  const projectCommands = [];

  Object.keys(parsedStructure).forEach(key => {
    const entry = parsedStructure[key];

    if (typeof entry === "object" && entry.path) {
      const hashtags = Array.isArray(entry.hashtags) ? entry.hashtags : [];
      const hashtagStrings = hashtags.map(h => "#" + h.replace(/\s+/g, ""));
      const yearStr = entry.year ? String(entry.year) : "";
      const searchTerms = [key, ...hashtags, ...hashtagStrings, yearStr].join(" ");
      projectCommands.push({
        name: key,
        path: entry.path,
        searchTerms,
        command() {
          if (history.location.pathname !== entry.path) {
            history.replace(entry.path);
          }
        }
      });
    } else if (typeof entry === "object" && entry.body) {
      const defaultPath = `/${key}`;
      nonProjectCommands.push({
        name: key,
        path: defaultPath,
        searchTerms: key,
        command() {
          if (history.location.pathname !== defaultPath) {
            history.replace(defaultPath);
          }
        }
      });
    } else if (typeof entry === "string" && entry) {
      projectCommands.push({
        name: entry,
        path: entry,
        searchTerms: entry,
        command() {
          if (history.location.pathname !== entry) {
            history.replace(entry);
          }
        }
      });
    }
  });

  // Add /projects page as a separate entry
  nonProjectCommands.push({
    name: "projects",
    path: "/projects",
    searchTerms: "projects all works",
    command() {
      if (history.location.pathname !== "/projects") {
        history.replace("/projects");
      }
    }
  });



  // If searchQuery is empty, non-projects first
  if (!searchQuery.trim()) {
    // Sort by year descending (recent first)
    projectCommands.sort((a, b) => b.year - a.year);

    // Weighted shuffle: recent projects have higher chance to stay near top
    for (let i = 0; i < projectCommands.length - 1; i++) {
      // Weight: more recent = less likely to move far
      const weight = Math.max(1, 2 - i); // tweak 5 for bias strength
      const j = i + Math.floor(Math.random() * weight);
      if (j < projectCommands.length) {
        [projectCommands[i], projectCommands[j]] = [projectCommands[j], projectCommands[i]];
      }
    }
    return [...nonProjectCommands, ...projectCommands];
  }
  // Otherwise, normal order
  return [...projectCommands, ...nonProjectCommands];
};




export const getCommandsSource = (content, unProcessedCommands, searchQuery) => {
  const query = searchQuery.trim();

  // Merge all top-level content sections except 'projects'
  const nonProjectSections = Object.keys(content)
    .filter(key => key !== "projects")
    .reduce((acc, key) => {
      acc[key] = content[key];
      return acc;
    }, {});

  // If nothing is searched (unProcessedCommands is blank or empty), show non-project content
  if ((!unProcessedCommands || Object.keys(unProcessedCommands).length === 0) && query === "") {
    return nonProjectSections;
  }

  // Merge projects and non-project sections
  const mergedContent = { ...content.projects, ...nonProjectSections };
  return mergedContent;
};