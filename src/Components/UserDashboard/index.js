import React from "react";
import {
  Box,
  Divider,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemAvatar,
  Button,
  Avatar,
  Stack,
  Paper,
  ListItemButton
} from "@mui/material";
import {
  BrowserRouter,
  withRouter,
  useHistory,
  useLocation,
} from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import StarRateIcon from "@mui/icons-material/StarRate";
import { deepOrange, green, pink } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CampaignIcon from "@mui/icons-material/Campaign";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import geniopay from '../../jpeg/geniopay.png';
import MenuBar from './MenuBar';



import { styled } from "@mui/material/styles";

const StyledList = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: "white",
    fontWeight: "bolder",
    borderRadius: 5,

    "&, & .MuiListItemIcon-root": {
      color: "#017189",
    },
  },
  // hover states
  "& .MuiListItemButton-root:hover": {
    backgroundColor:"#2b899d",
    fontWeight: "bolder",
    borderRadius: 5,
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
});

const lists = [
  { id: 1, key: "/", label: "Dashboard", icon: GridViewIcon },
  {
    id: 2,
    key: "/wallet",
    label: "Wallet",
    icon: AccountBalanceWalletIcon,
  },
  {
    id: 3,
    key: "/cards",
    label: "Cards",
    icon: CreditCardIcon,
  },
  {
    id: 4,
    key: "/fxcentre",
    label: "FXCentre",
    icon: LocalAtmIcon,
  },
  {
    id: 5,
    key: "/beneficiaries",
    label: "Beneficiaries",
    icon: PeopleAltIcon,
  },
  {
    id: 6,
    key: "/perks",
    label: "Perks",
    icon: LocalOfferIcon,
  },
];

const drawerWidth = 300;

function UserDashboard({ children }) {

  const history = useHistory();
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <MenuBar />

      <BrowserRouter>
        <Drawer
          PaperProps={{ sx: { bgcolor: (theme) => theme.palette.globalAccent } }}
          sx={{
            width: drawerWidth,
            color: (theme) => theme.palette.globalAccentTxt,
            display: "flex",
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>

            <img src={geniopay} alt="" color="inherit" width="200" height="45" />
          </Toolbar>

          {/* Payin/Payout */}

          <Box
            margin={2}
            padding={2}
            sx={{
              bgcolor: "#2b899d",
              width: "90%",
              mx: "auto",
              borderRadius: 1,
              color: "white",
            }}
          >
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
              <ListItem>

                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#fff" }} variant="rounded">
                    <AssignmentIcon sx={{ color: green[500] }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Wallet Balance"
                  secondary={<Typography>$15,001.00</Typography>}
                />

                <VisibilityOutlinedIcon sx={{ fontSize: 10 }} />


              </ListItem>
              <Divider component="li" sx={{ bgcolor: "white" }} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#fff" }} variant="rounded">
                    <StarRateIcon sx={{ color: deepOrange[500] }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Awarded Points"
                  secondary={<Typography>35</Typography>}
                />
              </ListItem>

              <Divider component="li" sx={{ bgcolor: "white" }} />

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                marginTop={1}
              >
                <Button variant="contained" sx={{ bgcolor: pink[300] }}>
                  Pay-In
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "white", color: "primary.main" }}
                >
                  Pay-Out
                </Button>
              </Stack>
            </List>
          </Box>

          <StyledList
            sx={{
              color: "white",
              mt: 4,
              mb: 8,
              pl: 2,
              pr: 2
            }}
          >
            {lists.map(({ label, icon: Icon, idx, key }) => (
              <ListItemButton
                key={idx}
                color="#fff"
                onClick={() => history.push(key)}
                selected={location.pathname === key}

              >
                <ListItemIcon
                  sx={{
                    color: "white",
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </StyledList>

          {/* Refer and earn */}
          <Box component={Paper} margin={2}>
            <Box sx={{ m: 2 }}>
              <Stack
                direction="row"
                //justifyContent='center'
                //alignItems='center'
                spacing={2}
                sx={{ m: 2, p: 1 }}
              >
                <CampaignIcon />

                <Box>
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "14",
                      display: "block",
                    }}
                  >
                    Refer and win
                  </Typography>
                  <Typography variant="caption">
                    Use the below link to invite friends
                  </Typography>
                </Box>
              </Stack>
              <Button variant="contained" fullWidth>
                Invite friends
              </Button>
            </Box>
          </Box>
          <Toolbar />
          <Toolbar />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          {children}
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default withRouter(UserDashboard);
