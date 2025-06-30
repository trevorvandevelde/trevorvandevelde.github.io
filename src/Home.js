import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import CommandPalette from "react-command-palette";

// import the theme from those provided ...
import chrome from "react-command-palette/dist/themes/chrome-theme";

// then import the CSS
import "react-command-palette/dist/themes/chrome.css";

//first page with when u enter, not the main page. 

import front_pic1 from "./pictures/hackingGrains/hackingGrains3.jpg"; 
import front_pic2 from "./pictures/lazySusan/lazySusan1.JPG";
import front_pic3 from "./pictures/lightbox/lightbox1.JPG";
import front_pic4 from "./pictures/hackingGrains/hackingGrains7.jpg";
import front_pic5 from "./pictures/hackingGrains/hackingGrains6.jpg";
import front_pic6 from "./pictures/hackingGrains/hackingGrains2.jpg";
import snare_pic from "./pictures/snarePic.JPG";
import dimSum_pic from "./pictures/dimSumScan.JPG";
import singingBowl_pic from "./pictures/singingBowl.jpg";


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
            <em>
            TREVOR VAN DE VELDE: COMPOSER & SOUND ARTIST 
            </em>
            
          </div>
          <CommandPalette
            commands={commands}
            display="inline"
            hotKeys="command+p"
            alwaysRenderCommands={true}
            closeOnSelect={false}
            theme={chrome}
            placeholder={isMobile ? "u can type things to search" : "u can type things to search"}
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
              backgroundColor: "#505050"
            }}
          >
          </div>
        </div>
      </div>
      </Col>

      {!isMobile && (
      <Col>
        <center>
            <img src={front_pic1} //alt=""
              style={{
              width: "450px",
              marginTop: "20px",
              }}
            />
        </center>
        <center>
            <img src={snare_pic} //alt=""
              style={{
              width: "450px",
              marginTop: "20px",
              }}
            />
        </center>

        <center>
            <img src={front_pic4} //alt=""
              style={{
              width: "450px",
              marginTop: "20px",
              }}
            />
        </center>

        <center>
            <img src={front_pic6} //alt=""
              style={{
              width: "450px",
              marginTop: "20px",
              }}
            />
        </center>
      
      </Col>
      )}

{!isMobile && (
      <Col>
      <center>
            <img src={dimSum_pic} //alt=""
              style={{
              width: "450px",
              marginTop: "20px",
              }}
            />
        </center>
     
        <center>
            <img src={front_pic5} //alt=""
              style={{
              width: "450px",
              marginTop: "20px",
              }}
            />
        </center>
        
      </Col>
)}
    


  
      </Row>
</Container>
    );
  }
}

export default withRouter(Home);
