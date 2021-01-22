import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/themes/chrome-theme";
import "react-command-palette/themes/chrome.css";

class Home extends React.Component {
  commandCreator = (parsedStructure) => {
    const { history } = this.props;
    const returnCommands = [];
    const keys = Object.keys(parsedStructure);
    for (const key of keys) {
      returnCommands.push({
        name: parsedStructure[key],
        command() {
          // console.log(history);
          history.replace(parsedStructure[key]);
        },
      });
    }
    return returnCommands;
  };

  render() {
    const { isMobile, unProcessedCommands } = this.props;
    const commands = this.commandCreator(unProcessedCommands);
    
    return (

      <Container fluid>
        <Row
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
        }}>

      <Col>
    
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: "30%",
            //bottom: "100%",
            width: isMobile ? "70%" : "50%",
            //height: "100%",
            transform: "translate(-0%, -0px)",
            overflow: "hidden",
          }}
        >
          <div>
            <p>
              Trevor Van de Velde: Composer and Creative Technologist
            </p>
            
          </div>
          <CommandPalette
            commands={commands}
            display="inline"
            hotKeys="command+p"
            alwaysRenderCommands={true}
            closeOnSelect={false}
            theme={chrome}
            placeholder={isMobile ? "start typing." : "start typing."}
            autofocus={true}
            maxDisplayed={6}
            options={{
              key: "name",
              keys: ["name"],
              threshold: -Infinity,
              limit: 9,
              allowTypo: true,
              scoreFn: null,
            }}
            //style={{ width: "100vh" }}
            spinner={false}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-end",
            width: "100%",
            position: "absolute",
            bottom: "0px",
            padding: "10px",
          }}
        >
          <div
            style={{
              // position: "absolute",
              // bottom: "0%",
              // right: "20px",
              // marginLeft: "auto",
              // marginRight: 0,
              // float: "left",
              // align: "right",
              width: "70%",
              //right: "50px",
              fontSize: "0.9em",
              color: "#505050",
            }}
          >
          </div>
        </div>
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
