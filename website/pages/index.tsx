import React from "react";
import Head from "next/head";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const pdfUrl = "https://cv.aknapen.nl/cv.pdf";
const linkedinUrl = "https://linkedin.com/in/adriaan-knapen";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(mobile);
  }, []);

  return isMobile ? (
    <ResumeFormatSelector />
  ) : (
    <object
      data={pdfUrl}
      type="application/pdf"
      style={{
        float: "left",
        width: "100%",
        height: "100vw",
      }}
    >
      <ResumeFormatSelector />
    </object>
  );
};

const ResumeFormatSelector: React.FC = () => (
  <Container style={{ marginTop: "2em", textAlign: "center" }}>
    <Card>
      <CardContent>
        <Typography variant="body1" component={"p"} style={{ marginTop: "1em" }}>
          It looks like you're using a mobile device. For the best viewing experience, you can download my CV as a PDF or view my LinkedIn page. Choose an option below:
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Container>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", marginBottom: "10px" }}>
            <Button variant="contained" color="primary" size={"large"} startIcon={<PictureAsPdfIcon />} style={{ margin: ".5em"}}>
              Download PDF
            </Button>
          </a>
          <a href={linkedinUrl} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" size={"large"} startIcon={<LinkedInIcon />} style={{ margin: ".5em"}}>
              View on LinkedIn
            </Button>
          </a>
        </Container>
      </CardActions>
    </Card>
  </Container>
);

export default () => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta charSet="utf-8" />
      <title>Resume - Adriaan Knapen</title>
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
      }
    `}</style>
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <div style={{ 
      backgroundColor: '#3f51b5', 
      color: 'white', 
      padding: '1em .5em', 
      textAlign: 'center' 
    }}>
      <Typography variant="h3" component="h1" style={{ margin: 0 }}>
        Resume <b>Adriaan&nbsp;Knapen</b>
      </Typography>
      <Typography variant="h6" component="p" style={{ marginTop: '0.5em' }}>
        Welcome to my professional CV
      </Typography>
    </div>
    <Home />
  </>
);
