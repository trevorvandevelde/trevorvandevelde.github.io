import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/dist/themes/chrome-theme";
import "react-command-palette/dist/themes/chrome.css";
import { commandCreator, getCommandsSource } from "./commandUtils";
import content from "./content";
import {
  getLeftColStyle,
  getCommandPaletteStyle,
  normalizePath,
  SharedCommandPalette,
  SharedHeader
} from "./sharedLayout";


class Home extends React.Component {

  state = {
    searchQuery: ""
  };

  handleSearchChange = (query) => {
    this.setState({ searchQuery: query });
  };

  

  render() {
    const { isMobile, unProcessedCommands } = this.props;

    const commandsSource = getCommandsSource(content, unProcessedCommands, this.state.searchQuery);
    const commands = commandCreator(commandsSource, this.props.history, this.state.searchQuery);

    const currentPath = normalizePath(window.location.pathname);
    const filteredCommands = commands.filter(
      cmd => normalizePath(cmd.path) !== currentPath
    );

    const leftColStyle = getLeftColStyle(isMobile);
    const commandPaletteStyle = getCommandPaletteStyle(isMobile);



    return (
      <Container fluid>
        <Row style={{
          paddingLeft: isMobile ? "0" : "100px",
          paddingRight: isMobile ? "0" : "100px"
        }}>

           <Col style={ leftColStyle}>
            <div style={commandPaletteStyle}>
                <SharedHeader />
                <SharedCommandPalette commands={filteredCommands} isMobile={isMobile} />
              </div>
          </Col>
        
          <Col>
        
          </Col>
           </Row>
      </Container>
    );
  }
}

export default withRouter(Home);
