import React from 'react'
import { ModalBlock } from '../components/ModalBlock';
import { makeStyles, Typography } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import FaceIcon from '@material-ui/icons/Face';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        position: 'relative',
        overflow: 'hidden',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%'

    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden'
    },
    loginSideFaceIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginTop: 20,
        marginBottom: 60,
    },
    buttonRound: {
        borderRadius: 999,
    },
    loginSideField: {
        marginBottom: 15,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },

}));

export const SignIn: React.FC = (): React.ReactElement => {

    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    }

    return (
        <div className={classes.wrapper}>

            <section className={classes.blueSide}>
                {/* ?????????????? ???????????????? ?????????? #?????????? ???????? */}
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6" >
                            <SearchIcon className={classes.blueSideListInfoIcon} />?????????????? ?? ??????, ?????? ?????? ??????????????????
                        </Typography></li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleIcon className={classes.blueSideListInfoIcon} />??????????????, ?? ?????? ?????????????? ?? ????????
                        </Typography></li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessageIcon className={classes.blueSideListInfoIcon} />???????????????????????????? ?? ??????????????
                        </Typography></li>
                </ul>
                {/* ?????????????? ???????????????? ?????????? #?????????? ???????? */}
            </section>

            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    {/* ?????????????? ???????????????? ?????????? #???????????? ???????? */}
                    <FaceIcon
                        color="primary" className={classes.loginSideFaceIcon} />
                    <Typography
                        variant="h4" className={classes.loginSideTitle}>??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????
                    </Typography>
                    <Typography>
                        <b>?????????????????????????????? ?? FACECHAT ?????????? ????????????!</b>
                    </Typography>
                    <Button
                        onClick={handleClickOpenSignUp}
                        style={{ marginTop: 20, marginBottom: 20 }}
                        variant="contained"
                        color="primary"
                        className={classes.buttonRound}
                        fullWidth>??????????????????????
                    </Button>
                    <Button
                        onClick={handleClickOpenSignIn}
                        variant="outlined"
                        color="primary"
                        className={classes.buttonRound}
                        fullWidth>????????
                    </Button>
                    {/* ?????????????? ???????????????? ?????????? #???????????? ???????? */}

                    {/* ?????????????? ?????????????????????? */}
                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="???????????????? ?????????????? ????????????">
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="??????"
                            type="name"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            margin="dense"
                            id="password"
                            label="????????????"
                            type="password"
                            fullWidth
                            variant="outlined"
                        />
                        <Button style={{ borderRadius: 999 }} onClick={handleCloseModal} variant="contained" className={classes.loginSideField} color="primary" fullWidth>
                            ??????????
                        </Button>
                    </ModalBlock>
                    {/* ?????????????? ?????????????????????? */}

                    {/* ?????????????? ?????? ?????????? */}
                    <ModalBlock
                        visible={visibleModal === 'signIn'}
                        onClose={handleCloseModal} classes={classes}
                        title="???????? ?? ??????????????">
                        <TextField
                            className={classes.loginSideField}
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"

                        />
                        <TextField
                            className={classes.loginSideField}
                            autoFocus
                            margin="dense"
                            id="password"
                            label="????????????"
                            type="password"
                            fullWidth
                            variant="outlined"

                        />
                        <Button style={{ borderRadius: 999 }} onClick={handleCloseModal} variant="contained" className={classes.loginSideField} color="primary" fullWidth>
                            ??????????
                        </Button>
                    </ModalBlock>
                    {/* ?????????????? ?????? ?????????? */}
                </div>
            </section>
        </div>
    )
}

