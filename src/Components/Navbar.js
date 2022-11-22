import React from "react";
import { AppBar } from "@mui/material";

function Navbar() {
  return (
    <>
      <AppBar
        sx={{
          height: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "24px",
          padding: "0% 3%",
          fontFamily: "Space Mono, monospace",
          background: "#0f0c29",
        }}
      >
        <a
          style={{ textDecoration: "none", color: "white", fontSize: "1rem" }}
          href="#"
        >
          LatchQL
        </a>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://github.com/oslabs-beta/LatchQL/blob/main/NPM-MODULE/README.md"
          >
            Github
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.npmjs.com/package/latchql"
          >
            NPM
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://medium.com/@mcphail.alex/latchql-c88ce527ec50"
          >
            Medium
          </a>
        </div>
      </AppBar>
    </>
  );
}

export default Navbar;
