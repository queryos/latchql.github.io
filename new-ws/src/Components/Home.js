import { Typography } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";

function Home() {
  return (
    <>
      <div
        style={{
          paddingTop: "50px",
          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          height: "1000px",
        }}
      >
        <div style={{ display: "flex", marginTop: "100px" }}>
          <Typography sx={{ fontSize: "2rem", width: "50%", padding: "50px" }}>
            Add additional layers of security to your GraphQL endpoint with
            customizable configuration for role-based authoritzation
          </Typography>

          <img src={logo} width="50%" />
          <div className="costLimit">
            <Typography>
              Analyze the queries and applies cost analysis algorithm to prevent
              resource overload by blocking excessively expensive requests.
            </Typography>
          </div>
          <div className="depthLimit">
            <Typography>
              Limiting the complexity of GraphQL queries by their depth protects
              the server against malicious query attacks that can put the
              resolvers in a never-ending request loop.
            </Typography>
          </div>
          <div className="rateLimit">
            <Typography>
              Mitigate attacks from brute force attacks, DoS and DDoS attacks,
              and web scraping attacks all while reducing strain on the server.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
