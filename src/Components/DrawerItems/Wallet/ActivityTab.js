import * as React from 'react';
import { Tabs, Typography, Tab, Box, Stack, Button } from '@mui/material';
import PropTypes from 'prop-types';
import NorthEastIcon from '@mui/icons-material/NorthEast';




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



export default function ActivityTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="#000"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <Tab {...a11yProps(0)} label="Activity" />
                <Tab {...a11yProps(1)} label="Transactions" />
                <Tab {...a11yProps(2)} label="Invoices" />
            </Tabs>

            <TabPanel value={value} index={0}>
                Activity
            </TabPanel>
            <TabPanel value={value} index={1}>

                <Stack
                    direction="rows"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Box>
                        <Typography> 22 Jul, 2022</Typography>
                    </Box>
                    <Box>
                        <Button color="primary" sx={{ fontWeight: 'bolder' }}>View All</Button>
                    </Box>
                </Stack>

                <Stack
                    direction="rows"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Stack
                        direction="rows"
                        spacing={2}

                    >
                        <Box>
                            <NorthEastIcon color="success" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "bolder" }}>Play In - Voucher</Typography>
                            <Typography>EUR</Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <Typography sx={{ fontWeight: "bolder", color: "green" }}>€750.67</Typography>
                    </Box>
                </Stack>

            </TabPanel>
            <TabPanel value={value} index={2}>
                Invoices
            </TabPanel>
        </Box>
    );
}
