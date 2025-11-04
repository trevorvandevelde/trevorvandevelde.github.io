
import React from "react";
import CommandPalette from "react-command-palette";
import chrome from "react-command-palette/dist/themes/chrome-theme";
import "react-command-palette/dist/themes/chrome.css";
import { Link } from "react-router-dom";




export const getLeftColStyle = (isMobile) => ({

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  height: "auto",
  overflow: "hidden",
  
  width: isMobile ? "100vw" : "auto",
  minWidth: isMobile ? "100vw" : "0",
  maxWidth: isMobile ? "100vw" : "500px",
  margineLeft: isMobile ? "0" : "0px",
  
});

export const getCommandPaletteStyle = (isMobile) => ({

  display: "flex",   
  flexDirection: "column",
  alignItems: "flex-start",         // center horizontally
  justifyContent: "center",
  position: isMobile ? "relative" : "fixed",
  top: isMobile ? "0" : "30%",
  width: isMobile ? "100vw" : "50%",
  transform: "translate(-0%, -0px)",
  marginLeft: isMobile ? "0" : "0",
  overflow: "hidden"
});

export const footerStyle = {
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "flex-end",
  width: "100%",
  position: "absolute",
  bottom: "0px",
  padding: "10px"
};

export const lastUpdatedStyle = {
  fontSize: "0.8em",
  color: "#505050",
  backgroundColor: "#FFFFFF"
};

export const normalizePath = path => path.split(/[?#]/)[0].replace(/\/+$/, "");

export function SharedCommandPalette({ commands, isMobile }) {
  return (

    <CommandPalette
      commands={commands}
      display="inline"
      hotKeys="command+p"
      renderCommand={cmd => <div>{cmd.path}</div>}
      closeOnSelect={false}
      theme={chrome}
      placeholder="u can type things to search"
      autofocus
      maxDisplayed={8}
      options={{
        key: "name",
        keys: ["name", "searchTerms", "year"],
        threshold: -Infinity,
        limit: 5,
        allowTypo: true,
        scoreFn: null
      }}
      style={{ width: isMobile ? "100vh" : "50vh", 
        fontSize: isMobile ? 16 : undefined
      }}
      spinner={false}
    />
  );
}

export function SharedHeader() {
  return (
    <div style={{ textAlign: "left", marginTop: "20px",marginBottom: "5px", fontSize: "1em", fontWeight: 300, marginBottom: "10px", width: "100" }}>
      <Link to="/" style={{ color: "inherit" }}>
        :::Trevor Van de Velde :::::::
      </Link>
    </div>
  );
}