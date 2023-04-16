import { Box } from '@mui/material';
import Header from '../components/Header';
import LineChart from '../components/LineChart';
import { useSelector } from 'react-redux';
import { selectStudent } from '../redux/selector';
import { useEffect, useState } from 'react';

function Line() {

    const listStudent = useSelector(selectStudent)

    // const [dataChart, setDataChart] = useState([])
    const subjects = {};
    listStudent.forEach((student) => {
        student.subjects.forEach((subject) => {
            if (subject.name in subjects) {
                if (subjects[subject.name].point?.length > 0) {
                    const newPoint = subjects[subject.name].point.map((point, index) => {
                        return {
                            title: point.title,
                            point: point.point + subject.marks[index].point
                        }
                    })
                    subjects[subject.name].point = newPoint
                } else {
                    // console.log(subject.marks)
                    subjects[subject.name].point = subject.marks
                    subjects[subject.name].color = subject.color

                }
            } else { // nếu môn học chưa tồn tại trong đối tượng subjects
                subjects[subject.name] = {
                    point: [],
                    color: ''
                };

            }
        });
    });

    const dataChart = Object.keys(subjects).map(key => {
        return {
            id: key,
            color: subjects[key].color,
            data: subjects[key].point.map(point => { return { x: point.title, y: point.point / listStudent.length } })
        }
    })


    console.log(dataChart)
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="100vh">
                <LineChart dataChart={dataChart} />
            </Box>
        </Box>
    );
}

export default Line;
