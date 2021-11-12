import React, {FunctionComponent} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ReactComponent as Page_not_found } from "./images/404_error.svg"

const PageNotFound : FunctionComponent = () => {

    return(
        <Container>
            <Grid container justifyContent={"center"}>
                <Page_not_found height={"350"}/>
            </Grid>
            <Grid container
                  spacing={2} justifyContent={"center"}>
                <Grid item>
                    <Typography variant={"h4"}>PAGE INTROUVABLE</Typography>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/" variant="contained">Return to the home page</Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default PageNotFound;