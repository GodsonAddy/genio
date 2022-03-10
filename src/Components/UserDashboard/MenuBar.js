import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
    OutlinedInput,
    AppBar,
    InputAdornment,
    Avatar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Menu,
    MenuItem
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from "@mui/icons-material/Search";
import ParkIcon from "@mui/icons-material/Park";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HideOnScroll } from "./util";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));



const StyledInputBase = styled(OutlinedInput)(({ theme }) => ({
    color: '#000',
    width: 250,
    fontSize: '0.875rem',
    fontWeight: 'bolder',
    lineHeight: '1.5',
    borderRadius: 16,
    height: 40,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const drawerWidth = 300;


export default function MenuBar({ props }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large">
                    <ParkIcon color="success" />
                </IconButton>

                <p>0 planted</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar
                    sx={{
                        width: `calc(100% - ${drawerWidth}px)`,
                        ml: `${drawerWidth}px`,
                        bgcolor: "transparent",
                    }}
                    elevation={0}
                >
                    <Toolbar>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                            color="#000"
                            fontWeight="bolder"
                        >
                            Welcome, Huss Smith
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />

                        <Search>
                            <StyledInputBase
                                placeholder="Search"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    direction: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mx: 2,
                                }}
                            >
                                <ParkIcon color="success" />
                                <Typography color="#000">0 planted</Typography>
                            </Box>
                            <IconButton aria-label="notification">
                                <NotificationsNoneOutlinedIcon sx={{ bgcolor: "white" }} />
                            </IconButton>

                            <Box
                                sx={{
                                    display: "flex",
                                    direction: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mx: 2,
                                }}
                            >
                                <Avatar>HS</Avatar>

                                <Box sx={{ mx: 1 }}>
                                    <Typography color="green">Verified</Typography>
                                    <Typography sx={{ fontWeight: "bolder" }} color="#000">
                                        Huss Smith
                                    </Typography>
                                </Box>

                                <IconButton
                                    size="small"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}

                                >
                                    <KeyboardArrowDownIcon color="#000" />
                                </IconButton>
                            </Box>

                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="primary"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {renderMobileMenu}
            {renderMenu}

        </React.Fragment>
    );
}
