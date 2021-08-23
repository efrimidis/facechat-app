import React from 'react';

import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 30,
    },
    buttonRound: {
        borderRadius: 999,
        padding: theme.spacing(2),
        marginTop: theme.spacing(4)
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg': {
                    fill: theme.palette.primary.main,
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            left: -10,
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 0,
            transition: 'background-color 0.1s easi-in-out',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 14,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 25,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        borderRadius: 0,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 30,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    },
    tweetAvatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -25,
        justifyContent: 'space-between',
        width: 280,

    },
    tweetUserName: {
        color: grey[500],
    },

}));



export const Home = () => {

    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        {[...new Array(5).fill(
                            <Tweet
                                text="Следует отметить, что консультация с широким активом играет важную роль в формировании форм воздействия."
                                classes={classes}
                                user={{
                                    fullname: 'remysharp',
                                    username: 'remysharp',
                                    avatarUrl: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60/>',
                                }}
                            />
                        )]}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Найти в Facechat" type="search" variant="outlined" fullWidth />
                </Grid>
            </Grid>
        </Container>

    )
}
