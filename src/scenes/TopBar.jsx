import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import { InputBase } from '@mui/material';
import {
    LightModeOutlined,
    DarkModeOutlined,
    SettingsOutlined,
    NotificationsOutlined,
    PersonOutline,
    Search,
} from '@mui/icons-material';
function TopBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
