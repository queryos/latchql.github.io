import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import linkedin from "../assets/linkedin_1.png"
import github from "../assets/github.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import alex from "../assets/headshots/Alex-sized.jpg";
import ray from "../assets/headshots/ray.png";
import celine from "../assets/headshots/celine.png";
import jj from "../assets/headshots/johnjered.jpeg";
import hannah from "../assets/headshots/hannah.png";
import featureIcon from "../assets/feature.png"

function Home() {
  const accordion = [{"Cost Limit": "Analyze the queries and applies cost analysis algorithm to prevent resource overload by blocking excessively expensive requests."}, {"Depth Limit" : "Limiting the complexity of GraphQL queries by their depth protects the server against malicious query attacks that can put the resolvers in a never-ending request loop."}, {"Rate Limit" : "Mitigate attacks from brute force attacks, DoS and DDoS attacks, and web scraping attacks all while reducing strain on the server."},{"Authorization" : "Contain identity and permission that tells the server whether the client is authorized for the requested resource using JWT authentication."},{"Playground GUI" : "Connect to a running instance and test configured permissions."},{"Fragments" : "Effectively implement reusable unit of logic that can be shared between multiple queries and mutations"},]
  const authors = [{"Raymond Kim": ray, "linkedin":"https://www.linkedin.com/in/raymondhkim/", "github":"https://github.com/reykeem"}, {"Alex McPhail": alex, "linkedin": "https://www.linkedin.com/in/mcphail-alex", "github": "https://github.com/mcphail-alex"}, {"Celine Leung":celine, "linkedin":"https://www.linkedin.com/in/celineleung412/", "github":"https://github.com/ccelineleung"},{"Hannah Bernstein":hannah, "linkedin":"https://www.linkedin.com/in/bernstein-hannah", "github":"https://github.com/hbernie"},{"Johnjered Tolentino":jj, "linkedin":"https://www.linkedin.com/in/johnjered-tolentino/", "github":"https://github.com/Johnjeredivant"}];
  

  return (
    <div style = {{backgroundColor: "#F0EDFF"}}>
      <div
        style={{
          paddingTop: "50px",
          backgroundColor: "#F0EDFF",
          // backgroundImage:
          //   "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          // height: "100%",
        }}
      >
      <div style={{backgroundImage:"linear-gradient(to right, #0f0c29, #302b63, #24243e)", boxShadow: "10px 20px 84px 0px rgba(51,33,120,1)"}}>
        <div style={{ display: "flex", padding: "120px 0px", justifyContent: "center"  }}>
          <Typography sx={{ fontSize: "2rem", width: "50%", padding: "50px" }}>
            Add additional layers of security to your GraphQL endpoint with
            customizable configuration for role-based authorization.
          </Typography>

          <img src={logo} width="50%" alt="logo" />

        </div>
        </div>
        
        <div style={{ backgroundColor: "#E0CBFF", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20% 5% 0%", borderRadius: "20px", padding: "80px"}}>
          <div style={{textAlign: "center"}}>
            <Typography sx={{fontSize: "3rem", color: "#8E42FF",fontWeight: "bold"}}>
              LatchQL Features
            </Typography>
            <img src={featureIcon} alt="features-icon" width="200px" style={{filter: "invert(30%) sepia(80%) saturate(2210%) hue-rotate(247deg) brightness(96%) contrast(113%)"}} />
          </div>
          <div style={{backgroundColor: "#B482FF", padding: "50px", borderRadius: "20px"}}>
          {accordion.map(obj => (
            <Accordion sx={{width: "400px", backgroundColor: "#E0CBFF"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                  <Typography sx={{color: "#8E42FF", fontWeight: "bold"}}>{Object.keys(obj)[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{color: "#8E42FF"}}>
                    {Object.values(obj)[0]}
                  </Typography>
                </AccordionDetails>
              </Accordion>
          ))}
          </div>
        </div>
    </div>
    {/* <div style={{height: "500px"}}></div> */}
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "350px", backgroundColor: "#F0EDFF"}}>
      <div>
        <Typography sx={{fontSize: "3rem", color: "#8E42FF", fontWeight: "bold", marginBottom: "50px"}}>
          Meet the Team
        </Typography>
      </div>
      <div style={{display: "flex", width: "85%"}}>
        {authors.map(person => (
          <div style={{margin: "0px 15px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)", height:"380px", width: "100%", borderRadius: "25px"}}>
            <img src={Object.values(person)[0]} alt="authorpic" style={{height: "50%",borderRadius: "20px"}} /> 

            <h3 style={{}}>{Object.keys(person)[0]}</h3>
            Software Engineer
            <br/>
            <div style={{display:"flex", marginTop:"20px", justifyContent: "space-between"}}>
              <a href={Object.values(person)[1]}>
              <img id='linkedIn' src={linkedin} alt="linkedin" style={{height: "40px", margin:"0px 5px"}}/>
              </a>


              <a href={Object.values(person)[2]}>
              <img src={github} alt="github" style={{height: "40px", margin:"0px 5px"}}/>
              </a>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    <div style={{height: "500px", backgroundColor: "#F0EDFF"}}></div>
    </div>
  );
}

export default Home;
