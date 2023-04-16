import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { mockTransactions } from '../data/student';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { BsPersonVcard } from 'react-icons/bs'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import Header from '../components/Header';
import StatBox from '../components/StatBox';
import Evaluate from '../components/Evaluate';
import { useSelector } from 'react-redux';
import { selectStudent } from '../redux/selector';

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Manage students" subtitle="" />
            </Box>

            {/* GRID & CHARTS */}
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="9"
                        subtitle="Total students"
                        icon={<PersonOutlineIcon sx={{ color: colors.greenAccent[600], fontSize: '26px', mr: 1 }} />}
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="5"
                        subtitle="Total teachers"
                        icon={<BsPersonVcard style={{ color: colors.greenAccent[600], fontSize: '26px', marginRight: '4px' }} />}
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="24"
                        subtitle="Lectures"
                        icon={<AutoStoriesIcon sx={{ color: colors.greenAccent[600], fontSize: '26px', mr: 1 }} />}
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="6"
                        subtitle="Finish tuition"
                        icon={<PersonOutlineIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
                    />
                </Box>

                {/* ROW 2 */}
                <Evaluate />
            </Box>
        </Box>
    );
};

export default Dashboard;
