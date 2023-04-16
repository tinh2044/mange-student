import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../theme';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const Tuition = ({ noHeader }) => {
    const theme = useTheme();
    const data = useSelector((state) => state.student);
    const colors = tokens(theme.palette.mode);
    const columns = [
        // One Field one Column In Row

        { field: 'index', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'paid',
            headerName: 'Tuition',
            flex: 1,
            // Style For Cost
            renderCell: (params) => <Typography color={colors.greenAccent[500]}>{params.row.paid} $</Typography>,
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
        {
            field: 'isFinished',
            headerName: 'Status',
            flex: 1,
        },
    ];

    const rows = data.map((item) => {
        return {
            id: item.id,
            name: item.name,
            phone: item.phone,
            ...item.tuition,
            isFinished: item.tuition.isFinished ? "Finished" : "Unfinished"

        }
    })
    console.log(rows)
    return (
        <Box>
            {/* No Header At DashBoard */}
            {!noHeader && <Header title="Tuition" subtitle="List of Invoice Balances" />}
            <Box
                m="12px 0 0 0"
                height="75vh"
                // OverWrite Css of Data Grid

                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    '& .MuiDataGrid-columnSeparators': {
                        display: 'none !important',
                    },
                }}
            >
                <DataGrid checkboxSelection rows={rows} columns={columns} />
            </Box>
        </Box>
    );
};

export default Tuition;
