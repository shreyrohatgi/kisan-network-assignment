import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#fafafa",
        py: 6,
        position: "absolute",
        top: "100vh",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
