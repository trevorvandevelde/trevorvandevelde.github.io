import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/themes/chrome-theme";
import "react-command-palette/themes/chrome.css";

export default class MainPage extends React.Component {
  commandCreator = parsedStructure => {
    const { history } = this.props;
    const returnCommands = [];
    const keys = Object.keys(parsedStructure);
    for (const key of keys) {
      returnCommands.push({
        name: parsedStructure[key],
        command() {
          // console.log(history);
          history.replace(parsedStructure[key]);
        }
      });
    }
    return returnCommands;
  };
  render() { // &lt == <<<
    const { isMobile, unProcessedCommands } = this.props;
    const commands = this.commandCreator(unProcessedCommands);

    return (
      
      
      <div> 
        <Container fluid> {/*This is the container for the page*/}


          <Row
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
          }}>  {/*One Row with 2 Columns*/}

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
            style={{ width: "100vh" }}
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

            <Col style={{ marginTop: "40px" }}> {/* This is the right side of the page */}
              <b>
                <Link to={this.props.prev}>&lt;&lt; {this.props.prev}</Link>  
              </b>
              <h2 style={{ marginTop: "38px" }}>{this.props.title}</h2>
              <div style={{ marginTop: "20px" }}>
                {this.props.body} <br />{" "}
                <p style={{ fontSize: "0.8em" }}>
                  Last updated: {this.props.lastUpdated}
                </p>
                <br />
              </div>
            </Col>
            


          </Row>


        </Container>

        <Container>
          
        </Container>

        {/* {!this.props.isMobile ? (
          <div>
            <div style={{ display: "none" }}>
              <CommandPalette
                commands={this.commandCreator(this.props.unProcessedCommands)}
                display="modal"
                hotKeys="command+p"
                alwaysRenderCommands={true}
                closeOnSelect={true}
                theme={chrome}
                placeholder="Go anywhere. ESC to close."
                autofocus={true}
                maxDisplayed={7}
                options={{
                  key: "name", // default is "name"
                  keys: ["name"], // default is "name"

                  // other options may be freely configured
                  threshold: -Infinity,
                  limit: 10,
                  allowTypo: true,
                  scoreFn: null
                }}
                style={{
                  width: "50px"
                }}
              />
            </div>
            <div style={{ display: "none" }}>
              <CommandPalette
                commands={this.commandCreator(this.props.unProcessedCommands)}
                display="modal"
                hotKeys="ctrl+p"
                //alwaysRenderCommands={true}
                closeOnSelect={true}
                theme={chrome}
                placeholder="Search"
                autofocus={true}
                maxDisplayed={9}
                options={{
                  key: "name", // default is "name"
                  keys: ["name"], // default is "name"

                  // other options may be freely configured
                  threshold: -Infinity,
                  limit: 10,
                  allowTypo: true,
                  scoreFn: null
                }}
                style={{
                  width: "50px"
                }}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )} */}

      </div>
      
    );
  }
}
