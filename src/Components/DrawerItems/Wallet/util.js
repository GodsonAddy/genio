import * as React from 'react';
import {Tabs, Typography, Tab, Box, Grid, Avatar} from '@mui/material';
import PropTypes from 'prop-types';
import euro from '../../../jpeg/euro.png';
import usa from '../../../jpeg/flag.jpg';
import uk from '../../../jpeg/uk.jpg';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
export function ActiveTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
    
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab label="Active (3)" {...a11yProps(0)}/>
        <Tab label="Inactive (2)" {...a11yProps(1)}/>
        <Tab label="Closed (0)" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        {/* Euro */}
        <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            border="1px grey"
        >
            <Grid item>
                <Grid
                    container
                    display="flex"
                    flexDirection="row"
                    spacing={2}
                >
                    <Grid item>
                        <Avatar src={euro} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography
                            sx={{fontWeight: 'bolder'}}
                        >
                            EUR Wallet
                        </Typography>
                        <Typography>EUR</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item>
                <Typography sx={{fontWeight: 'bolder'}}>€2,000,000.50</Typography>
                <Typography>Default</Typography>
            </Grid>
        </Grid>

        {/* USA */}
        <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            marginTop={2}
        >
            <Grid item>
                <Grid
                    container
                    display="flex"
                    flexDirection="row"
                    spacing={2}
                >
                    <Grid item>
                        <Avatar src={usa} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography
                            sx={{fontWeight: 'bolder'}}
                        >
                            Personal account
                        </Typography>
                        <Typography>USD</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item>
                <Typography sx={{fontWeight: 'bolder'}}>$10,250.00</Typography>
                
            </Grid>
        </Grid>


        {/* UK */}
        <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            marginTop={2}
        >
            <Grid item>
                <Grid
                    container
                    display="flex"
                    flexDirection="row"
                    spacing={2}
                >
                    <Grid item>
                        <Avatar src={uk} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography
                            sx={{fontWeight: 'bolder'}}
                        >
                            School savings
                        </Typography>
                        <Typography>GBP</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item>
                <Typography sx={{fontWeight: 'bolder'}}>£500.00</Typography>
                
            </Grid>
        </Grid>


      </TabPanel>

      <TabPanel value={value} index={1}>
        Inactive (2)
      </TabPanel>
      <TabPanel value={value} index={2}>
        Closed (0)
      </TabPanel>
    </Box>
  );
}

export const lists = [
    { id: 1, key: "dashboard", label: "Dashboard", icon: StarBorderIcon },
    {
      id: 2,
      key: "wallet",
      label: "Wallet",
      icon: CreditCardIcon,
    },
    { id: 3, key: "dashboard", label: "Dashboard", icon: ListAltIcon },
    {
      id: 4,
      key: "wallet",
      label: "Wallet",
      icon: RocketLaunchIcon,
    },
    { id: 5, key: "dashboard", label: "Dashboard", icon: MonetizationOnOutlinedIcon },
    
]


