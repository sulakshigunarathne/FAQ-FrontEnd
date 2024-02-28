import React from "react";
import { Typography, Link, Container } from "@mui/material";

const Footer = () => 
{
    return (
    <footer className="bg-gray-400 text-white py-4 sticky bottom-0 ">
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {"Eyepax Copyright © "}
          <Link color="inherit" href="https://eyepax.com/">
            Our Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
    );
}

export default Footer;