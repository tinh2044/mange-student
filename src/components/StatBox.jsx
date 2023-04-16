import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                        {subtitle}
                    </Typography>
                </Box>

            </Box>
            <Box display="flex" justifyContent="space-between" alignItems='center' mt="2px">
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }} display="flex" justifyContent="space-between" alignItems='center'>
                    {icon} : {` ${title}`}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;
