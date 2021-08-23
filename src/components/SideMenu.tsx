import React from 'react'
import { Button, IconButton, Typography } from '@material-ui/core'
import { useHomeStyles } from '../pages/Home'

import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import Notification from '@material-ui/icons/NotificationsNoneOutlined';
import MailIcon from '@material-ui/icons/MailOutline';
import BooksmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PermIdentity';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton className={classes.logo} aria-label="delete" >
                        <FaceIcon className={classes.logoIcon} color="primary" />
                    </IconButton>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <HomeIcon className={classes.sideMenuListItemIcon} color="primary" />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Главная
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Поиск
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <Notification className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Уведомления
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Сообщения
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BooksmarkIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Закладки
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Список
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Профиль
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MoreIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Еще
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button className={classes.buttonRound} variant="contained" fullWidth color="primary">Твитнуть</Button>
            </li>
        </ul>
    )
}
