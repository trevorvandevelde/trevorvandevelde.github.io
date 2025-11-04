import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/dist/themes/chrome-theme";
import "react-command-palette/dist/themes/chrome.css";
import content from "./content";
import { commandCreator } from "./commandUtils";
import { getCommandsSource } from "./commandUtils";

import {
  getLeftColStyle,
  getCommandPaletteStyle,
  footerStyle,
  lastUpdatedStyle,
  SharedCommandPalette,
  SharedHeader,
  normalizePath
} from "./sharedLayout";

//page with all the details

export default class MainPage extends React.Component {
  state = {
    searchQuery: ""
  };

  handleSearchChange = (query) => {
    this.setState({ searchQuery: query });
  };


  

  render() {


    const {
      isMobile,
      unProcessedCommands,
      prev,
      title,
      body,
      lastUpdated
    } = this.props;

    // Use unProcessedCommands if provided, otherwise fallback to content.projects
    const commandsSource = getCommandsSource(content, this.props.unProcessedCommands, this.state.searchQuery);
    const commands = commandCreator(commandsSource, this.props.history, this.state.searchQuery);
    
    // Filter out the command for the current page
    const normalizePath = path => path.split(/[?#]/)[0].replace(/\/+$/, "");
    const currentPath = normalizePath(window.location.pathname);
    const filteredCommands = commands.filter(
    cmd => normalizePath(cmd.path) !== currentPath
    );

    const leftColStyle = getLeftColStyle(isMobile);
    const commandPaletteStyle = getCommandPaletteStyle(isMobile);


    return (
      <div>
        <Container fluid>
           <Row style={{
          paddingLeft: isMobile ? "0" : "100px",
          paddingRight: isMobile ? "0" : "100px"
        }}>
            {/* Left Column */}
             <Col style={leftColStyle}>
                <div style={commandPaletteStyle}>
                <SharedHeader />
                <SharedCommandPalette commands={filteredCommands} isMobile={isMobile} />
                </div>
            </Col>

            {/* Right Column */}
            <Col style={{
            marginTop: "40px",
            marginLeft: isMobile ? "0" : "100px",
            backgroundColor: "#FFFFFF",
            width: isMobile ? "100vw" : undefined,
            minWidth: isMobile ? "100vw" : undefined
          }}>
              <b>
                <Link to={prev}>&lt;&lt; {prev}</Link>
              </b>
              <h2 style={{ marginTop: "38px" }}>{title}</h2>
              <div style={{ marginTop: "20px" }}>
                {body}
                <br />
                <p style={lastUpdatedStyle}>Last updated: {lastUpdated}</p>
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
