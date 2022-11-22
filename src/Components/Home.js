import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Home() {
  const accordion = [{"Cost Limit": "Analyze the queries and applies cost analysis algorithm to prevent resource overload by blocking excessively expensive requests."}, {"Depth Limit" : "Limiting the complexity of GraphQL queries by their depth protects the server against malicious query attacks that can put the resolvers in a never-ending request loop."}, {"Rate Limit" : "Mitigate attacks from brute force attacks, DoS and DDoS attacks, and web scraping attacks all while reducing strain on the server."},{"Authorization" : "Contain identity and permission that tells the server whether the client is authorized for the requested resource using JWT authentication."},{"Playground GUI" : "Connect to a running instance and test configured permissions."},{"Fragments" : "Effectively implement reusable unit of logic that can be shared between multiple queries and mutations"},]
  const authors = ["Ray Kim", "Alex McPhail", "Celine Leung", "Hannah Bernstein", "Johnjered Tolentino"];

  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", marginTop: "100px", justifyContent: "center"  }}>
          <Typography sx={{ fontSize: "2rem", width: "50%", padding: "50px" }}>
            Add additional layers of security to your GraphQL endpoint with
            customizable configuration for role-based authorization.
          </Typography>

          <img src={logo} width="50%" alt="logo" />

        </div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20% 5% 0%", border: "4px solid #5D3FD3", borderRadius: "20px", padding: "40px", backgroundColor: "transparent"}}>
          <div>
            <Typography sx={{fontSize: "3rem", color:"white"}}>
              Features
            </Typography>
          </div>
          <div>
          {accordion.map(obj => (
            <Accordion sx={{width: "400px", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", color: "white"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                  <Typography>{Object.keys(obj)[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {Object.values(obj)[0]}
                  </Typography>
                </AccordionDetails>
              </Accordion>
          ))}
          </div>
        </div>
    </div>
    {/* <div style={{height: "500px"}}></div>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div>
        <Typography sx={{fontSize: "3rem"}}>
          Meet the Team
        </Typography>
      </div>
      <div style={{display: "flex", width: "80%"}}>
        {authors.map(person => (
          <div style={{margin: "0px 20px",display: "flex", justifyContent: "center", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", height:"380px", width: "100%"}}>{person}</div>
        ))}
      </div>
    </div> */}
    <div style={{height: "500px"}}></div>
    </>
  );
}

export default Home;
