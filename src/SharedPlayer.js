import React from "react";
import ReactPlayer from "react-player";

export default function SharedPlayer({ url, style = {}, ...props }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1440px",
        textAlign: "left",
        marginTop: 0, // Remove top margin
        marginBottom: 0, // Remove bottom margin
        padding: 0,
        ...style
      }}
    >
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        height="32vw"
        style={{ margin: 0, padding: 0 }} // Remove player margin/padding
        {...props}
      />
    </div>
  );
}