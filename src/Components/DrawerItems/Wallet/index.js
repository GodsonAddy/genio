import React from "react";
import UserDashboard from "../../UserDashboard";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  InputAdornment,
  Stack,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StyledOutlinedInput} from "../../UserDashboard/util";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { ActiveTabs } from "./util";
import SouthWestIcon from '@mui/icons-material/SouthWest';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { lists } from "./util";
import ActivityTab from "./ActivityTab";



export default function Wallet() {
  return (
    <UserDashboard>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
    >
        <Grid item>
          <Typography sx={{ fontWeight: "bolder" }}>Your Wallet (s)</Typography>
        </Grid>
        <Grid item>
          <Button startIcon={<AddIcon />} variant="contained">
            {" "}
            Create New Wallet
          </Button>
        </Grid>
    </Grid>

      <Grid container display="flex" flexDirection="row" spacing={2}>
        {/* Box 1 */}
        <Grid item xs={5}>
          <Box component={Paper} spacing={2} padding={2} marginTop={2} variant="outlined">
            <Grid container display="flex" flexDirection="column">
              <Grid item>
                <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <StyledOutlinedInput
                      placeholder="Search"
                      startAdornment={
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{ fontWeight: "bolder" }}
                    >
                      {" "}
                      All
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <ActiveTabs />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={7}>

            <Box
                component={Paper}
                variant="outlined"
                padding={2}
                marginTop={2}
                spacing={2}
            >
                <Stack
                    direction="column"
                    spacing={2}
                >
                    <Box
                        component={Paper}
                        variant="outlined"
                        padding={2}
                        marginTop={0}
                        spacing={2}
                    >
                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Box>
                                <Typography sx={{color: "green"}}>
                                    <Badge
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        variant="dot"
                                        color="success"
                                        
                                    /> Active
                                    
                                </Typography>
                                <Typography sx={{fontWeight:'bolder'}}>EURO Wallet</Typography>
                                <Typography sx={{fontWeight:'bolder', color: "primary.main"}}>EUR</Typography>
                            </Box>
                            <Typography variant="h3" sx={{fontWeight:'bolder'}}>€2,000,000.50</Typography>
                        </Stack>
                    </Box>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Box>
                            <Typography>Ledger Balance</Typography>
                        </Box>
                        <Box>
                            <Typography>€2,000,000.50</Typography>
                        </Box>
                        <Box>
                            <Typography>Total Incoming</Typography>
                        </Box>
                        <Box>
                            <Typography>€2,000,000.50</Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
    
                        <Box>
                            <Typography>Blocked Balance</Typography>
                        </Box>
                        <Box>
                        <Typography> €0.00</Typography>
                        </Box>

                        <Box>
                            <Typography> Total Outgoing</Typography>
                        </Box>

                        <Box>
                            <Typography> €5,000,000.50</Typography>
                        </Box>
                        
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Button size="large" startIcon={<RocketLaunchIcon />} variant="outlined">Payment</Button>
                        <Button size="large" startIcon={<SouthWestIcon/>} variant="outlined">Pay In</Button>
                        <Button size="large" startIcon={<SwapHorizIcon />} variant="outlined">Exchange</Button>
                    </Stack>

                    <Stack
                        direction="column"
                        spacing={2}
                        marginTop={2}
                    >
                        <Box>
                            <Button sx={{fontWeight: "bolder"}} endIcon={<KeyboardArrowDownIcon color="primary.main" />}>
                                Manage Options
                            </Button>

                            <List>
                                {lists.map(({ label, icon: Icon, id, key }) => (
                                    <ListItem
                                        button
                                        key={id}
                                        
                                    >
                                        <ListItemIcon
                                            
                                        >
                                            <Icon color="primary"/>
                                        </ListItemIcon>
                                        <ListItemText primary={label} color="primary.main" />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                    </Stack>

                    <Box>
                        <ActivityTab />
                    </Box>
                </Stack>
            </Box>
        </Grid>
      </Grid>
    </UserDashboard>
  );
}
