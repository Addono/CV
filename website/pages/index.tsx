import React from 'react';
import Head from "next/head";

import {Button, Card, CardActions, CardContent, Container, Typography} from "@material-ui/core";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const pdfLocation = "//cv.aknapen.nl/cv.pdf";

const Home = () => {
    return <object data={pdfLocation} type="application/pdf" style={{float: 'left', width: '100%', height: '100vh'}}>
        <Container style={{marginTop: '1em'}}>
            <Card>
                <CardContent>
                    <Typography variant={"h4"} component={"h4"}>
                        CV Adriaan Knapen
                    </Typography>
                    <Typography variant="body2" component={"p"}>
                        Probably you're on a mobile device, so you will have to tell me how you want to display my CV.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Container>
                    <Button size="large" href={pdfLocation}>As PDF <PictureAsPdfIcon/></Button>
                    <Button size={"large"} href={"https://linkedin.com/in/adriaan-knapen"}>On LinkedIn <LinkedInIcon/></Button>
                    </Container>
                </CardActions>
            </Card>
        </Container>
    </object>;
};

export default () => (
    <div>
        <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            <meta charSet="utf-8"/>
            <title>
                CV - Adriaan Knapen
            </title>
        </Head>
        <style jsx global>{`
      body { 
        margin: 0;
      }
    `}</style>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Home/>
    </div>
)