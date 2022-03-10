import React from "react";
import UserDashboard from "../../UserDashboard";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Stack,
  Avatar,
  Fab,
  Button
} from "@mui/material";
import flag from "../../../jpeg/flag.jpg";
import AddIcon from "@mui/icons-material/Add";
import { teal, orange, pink, purple, yellow, amber } from '@mui/material/colors';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LinkIcon from '@mui/icons-material/Link';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Chart from './Chart';
import TimelineIcon from '@mui/icons-material/Timeline';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import SouthWestIcon from '@mui/icons-material/SouthWest';



const lists = [
  {
    id: 1,
    title: "Add new Wallet",
    icon: AccountBalanceWalletOutlinedIcon,
    color: orange[500]
  },
  {
    id: 2,
    title: "Add new Card",
    icon: CreditCardIcon,
    color: teal[500]
  },
  {
    id: 3,
    title: "Balance Exchange",
    icon: LocalAtmIcon,
    color: yellow[500]
  },
  {
    id: 4,
    title: "Transfer to Account",
    icon: AccountBalanceWalletOutlinedIcon,
    color: '#64ffda'
  },
  {
    id: 5,
    title: "Generate Voucher",
    icon: AccountBalanceWalletOutlinedIcon,
    color: purple[500]
  },
  {
    id: 6,
    title: "Mobile Money",
    icon: PaidIcon,
    color: amber[500]
  },
  {
    id: 7,
    title: "Payment Link",
    icon: LinkIcon,
    color: pink[500]
  }
]

export default function Dashboard() {
  return (
    <UserDashboard>
      <Box
        componennt={Paper}
        sx={{
          marginTop: 3,
        }}
      >
        {/* Wallet */}
        <Grid container display="flex" direction="column">
          <Grid item>
            <Typography sx={{ fontWeight: "bolder" }}>Wallet</Typography>
          </Grid>

          <Grid item>
            <Grid container display="flex" direction="row" spacing={2}>
              <Grid item>
                <Box
                  component={Paper}
                  variant="outlined"
                  sx={{
                    bgcolor: pink[50],
                    padding: 2,
                    width: 300,
                  }}
                >
                  <Stack direction="row" spacing={12} marginBottom={5}>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                        }}
                      >
                        Personal account
                      </Typography>
                      <Typography>USD</Typography>
                    </Box>

                    <Avatar src={flag} alt="" />
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bolder",
                    }}
                  >
                    $10,250.00
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                display='flex'
                justifyContent="center"
                alignItems="center"

              >
                <Fab
                  aria-label="add"
                  color='primary'
                  sx={{

                  }}
                >
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Quick Links */}
        <Grid container display="flex" direction="column" marginTop={8}>

          <Grid item>
            <Typography sx={{ fontWeight: "bolder" }}>Quick Links</Typography>
            <Typography >Your frequently used actions for easy access.</Typography>
          </Grid>

          <Grid item>
            <Grid
              container
              display="flex"
              direction="row"
              marginTop={4}
              spacing={1}


            >
              {lists.map(({ title, icon: Icon, id, color }) => (
                <Grid item key={id} xs={6} sm={2} style={{ display: "flex" }}>
                  <Box
                    key={id}
                    variant="outlined"
                    component={Paper}
                    sx={{ width: 120 }}
                  >
                    <Grid
                      container
                      display="flex"
                      direction="column"
                      padding={2}
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item marginTop={2}>
                        <Avatar sx={{ bgcolor: color }}> <Icon /> </Avatar>
                      </Grid>
                      <Grid item marginTop={2}>
                        <Typography sx={{ fontWeight: 'bolder' }}> {title}</Typography>
                      </Grid>
                    </Grid>

                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>

        {/* Graph */}
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          marginTop={8}

        >
          <Grid item>
            <Grid
              container
              display="flex"
              direction="row"
              spacing={2}
            >
              <Grid item>
                <Typography sx={{ fontWeight: 'bolder' }}>Activity</Typography>
              </Grid>
              <Grid item >
                <Button
                  color="primary"
                  sx={{ fontWeight: 'bolder' }}
                  endIcon={<KeyboardArrowDownIcon color="primary" />}
                >
                  Month
                </Button>

              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography color="primary" sx={{ fontWeight: 'bolder' }}>View Transaction History</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          display="flex"
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="flex-end"
          marginTop={2}
        >
          <Grid item >
            <Grid
              container
              display="flex"
              direction="row"
              spacing={2}


            >
              <Grid item display="flex" justifyContent="center" alignItems="center">
                <TimelineIcon />
              </Grid>
              <Grid item >
                <Typography>Total Transactions</Typography>
                <Typography sx={{ fontWeight: 'bolder' }}>$88,600.00</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item >
            <Grid
              container
              display="flex"
              direction="row"
              spacing={2}

            >
              <Grid item display="flex" justifyContent="center" alignItems="center">
                <SouthWestIcon color='success' />
              </Grid>
              <Grid item>
                <Typography>Pay-In</Typography>
                <Typography sx={{ fontWeight: 'bolder' }}>$4,600.00</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item >
            <Grid
              container
              display="flex"
              direction="row"
              spacing={2}

            >
              <Grid item display="flex" justifyContent="center" alignItems="center">
                <NorthWestIcon color="error" />
              </Grid>
              <Grid item>
                <Typography>Pay-Out</Typography>
                <Typography sx={{ fontWeight: 'bolder' }}>$72,600.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Chart />
      </Box>
    </UserDashboard>
  );
}
