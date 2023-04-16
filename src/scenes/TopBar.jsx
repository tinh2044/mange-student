import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import {
    LightModeOutlined,
    DarkModeOutlined,
    SettingsOutlined,
    NotificationsOutlined,
    PersonOutline,
} from '@mui/icons-material';
function TopBar() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between">

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutline />
                </IconButton>
            </Box>
        </Box>
    );
}

export default TopBar;
