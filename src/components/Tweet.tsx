import React from 'react'

import { useHomeStyles } from '../pages/Home'
import classNames from 'classnames';
import { Grid, Paper, Typography, Avatar } from '@material-ui/core';

import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import IconButton from '@material-ui/core/IconButton';




interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };

}

export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {


    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt="Remy Sharp"
                        src={user.avatarUrl} />

                </Grid>
                <Grid item xs={10}>
                    <Typography>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetUserName}>@{user.username}</span>
                        <span className={classes.tweetUserName}> &middot;</span>
                        <span className={classes.tweetUserName}> 1 ч.</span>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton color="default">
                                <ChatBubbleIcon style={{ fontSize: 20 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton color="default">
                                <RepeatIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color="default">
                                <LikeIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color="default">
                                <ShareIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}
