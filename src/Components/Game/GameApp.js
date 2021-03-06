import React from 'react';
import {Grid, Paper} from "@mui/material";
import GameGrid from "./GameGrid";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "styled-components";
import GameInfo from "./GameInfo";

const theme = createTheme({});

const GameApp = () => {

    return (
        <ThemeProvider theme={theme}>
            <div className="bg-blue-300 h-screen">
                <Grid container spacing={2} padding={3} className='h-full' wrap='wrap'>
                    <Grid item xs={12} md={4} height={{xs: '', md: '100%'}}>
                        <Grid container minWidth='300' display="flex" direction="column"
                              justifyContent='center' sx={{height: {xs: 'fit', md: '100%'}}}>
                            <Paper sx={{
                                height: 5 / 6,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <GameInfo/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container minWidth='300' className='h-full' display="flex" direction="column"
                              justifyContent='center'>
                            <Paper sx={{height: 5 / 6}}>
                                <GameGrid/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
};

export default GameApp;