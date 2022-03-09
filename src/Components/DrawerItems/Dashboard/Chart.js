import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/material';
import './index.css';


// Generate Sales Data
function createData(Month, Total) {
    return { Month, Total };
}

const data = [
    createData('Jan', 4000),
    createData('Feb', 3300),
    createData('Mar', 3800),
    createData('Apr', 3500),
    createData('May', 2800),
    createData('Jun', 3500),
    createData('Jul', 3400),
];

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box variant='elevated' className='container' sx={{
                '&:hover': {

                    opacity: [0.9, 0.8, 0.7],
                }
            }} >

                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                    >
                        <XAxis
                            dataKey="Month"
                            stroke={theme.palette.text.secondary}
                            style={theme.typography.body2}
                        />
                        <YAxis
                            stroke={theme.palette.text.secondary}
                            style={theme.typography.body2}
                        >

                        </YAxis>
                        <Tooltip />
                        <Line
                            isAnimationActive={false}
                            type="monotone"
                            dataKey="Total"
                            stroke={theme.palette.primary.main}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </React.Fragment>
    );
}