import { Autocomplete, Box, IconButton, InputBase, TextField, Typography } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

import React from 'react'
import LineChart from './LineChart'
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import { Search } from '@mui/icons-material';
import { selectNameStudent, selectStudent } from '../redux/selector';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 } from 'uuid';
import { DataGrid } from '@mui/x-data-grid';

function Evaluate() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const listStudent = useSelector(selectStudent)

    const [curStudent, setCurStudent] = useState(listStudent[0])
    const [dataChart, setDataChart] = useState([])
    const nameStudent = useSelector(selectNameStudent)

    const handleFilter = (e) => {
        if (typeof (e.target.innerText) === 'string') {

            const student = listStudent.find(item => item.name === e.target.innerHTML)
            const newDateChart = curStudent?.subjects.map(subject => {
                return {
                    id: subject.name,
                    color: subject.color,
                    data: subject.marks.map(item => { return { x: item.title, y: item.point } })
                }
            })
            setDataChart(newDateChart?.length > 0 ? newDateChart : [])
            setCurStudent(student)
        }
    }


    return (
        <React.Fragment>
            <Box gridColumn="span 8" height='350px' gridRow="span 2" backgroundColor={colors.primary[400]}>
                <Box mt="10px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
                            Evaluation
                        </Typography>

                    </Box>
                    <Box>
                        <Box display="flex" width='200px' backgroundColor={colors.primary[400]} borderRadius="4px">
                            <Autocomplete
                                // disablePortal
                                id="combo-box-demo"
                                options={nameStudent}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} color='secondary' label="Name" />}
                                onChange={handleFilter}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box height="310px" m="0 0 0 0">
                    <LineChart isDashboard={true} dataChart={dataChart} />
                </Box>
            </Box>
            {dataChart.length > 0 && (
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="12px 15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600" display='flex'>
                            Student : <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="400" ml={2}>

                                {curStudent.name}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="12px 15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600" display='flex'>
                            Age : <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="400" ml={2}>

                                {curStudent.age}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="12px 15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600" display='flex'>
                            Gender : <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="400" ml={2}>

                                {curStudent.gender}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="12px 15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600" display='flex'>
                            Address : <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="400" ml={2}>

                                {curStudent.address}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="12px 15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600" display='flex'>
                            Email : <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="400" ml={2}>

                                {curStudent.email}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="12px 15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600" display='flex' >
                            Response : <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="400" ml={2} maxWidth='64%'>

                                {curStudent.response}
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            )}
        </React.Fragment>
    )
}

export default Evaluate