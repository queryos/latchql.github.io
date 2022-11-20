import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <div style={{ display: "flex", marginTop: "100px", justifyContent: "center"  }}>
          <Typography sx={{ fontSize: "2rem", width: "50%", padding: "50px" }}>
            Add additional layers of security to your GraphQL endpoint with
            customizable configuration for role-based authoritzation
          </Typography>

          <img src={logo} width="50%" alt="logo" />

        </div>
        {/* <div style={{display: "flex", justifyContent: "space-between", margin: "200px 200px"}}>
          <div>
            <Accordion sx={{width: "20%", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", color: "white"}}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                <Typography>Cost Limiting</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography>
                  Analyze the queries and applies cost analysis algorithm to prevent
                  resource overload by blocking excessively expensive requests.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        <div>
        <Accordion sx={{width: "25%", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", color: "white"}}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Typography>Depth Limiting</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
              Limiting the complexity of GraphQL queries by their depth protects
              the server against malicious query attacks that can put the
              resolvers in a never-ending request loop.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
        <div>
        <Accordion sx={{width: "25%", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", color: "white"}}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Typography>Rate Limiting</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
              Mitigate attacks from brute force attacks, DoS and DDoS attacks,
              and web scraping attacks all while reducing strain on the server.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
        
        <div>
        <div style={{display: "flex", justifyContent: "space-between", margin: "50px 200px"}}>
          <Accordion sx={{width: "20%", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", color: "white"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>Authorization</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Contain identity and permission that tells the server whether the 
                client is authorized for the requested resource using JWT authentication.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion sx={{width: "25%", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", color: "white"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>Playground GUI</Typography>
          </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Connect to a running instance and test configured permissions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        
        <div>
          <Accordion sx={{width: "25%", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", color: "white"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
              <Typography>Fragments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Effectively implement reusable unit of logic that can be shared between multiple queries and mutations
              </Typography>
            </AccordionDetails>
        </Accordion>
      </div>

        </div>
      </div>
    </> */}
    </div>
    </>
  );
}

export default Home;
