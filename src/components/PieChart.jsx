import { ResponsivePie } from '@nivo/pie';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectStudent } from '../redux/selector';
// import { mockPieData as data } from '../data/student';

function PieChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const listStudent = useSelector(selectStudent)

    const rank = {
        "Great": {
            point: 0,
            color: colors.blueAccent[500]
        },
        "Medium": {
            point: 0,
            color: colors.redAccent[500]
        },
        "Left": {
            point: 0,
            color: colors.greenAccent[500]

        },
    }

    listStudent.forEach((student) => {
        let total = student.subjects.reduce((value, subject, index, arr) => {

            return value + subject.marks.reduce((value, mark, index, arr) => {
                return value + mark.point / arr.length
            }, 0)
        }, 0) / student.subjects.length

        if (total >= 7) {
            rank.Great.point += 1
        } else if (total >= 6) {
            rank.Medium.point += 1
        } else {
            rank.Left.point += 1
        }
    })



    const dataChart = Object.keys(rank).map(key => {
        return {
            id: key,
            label: key,
            value: rank[key].point,
            color: rank[key].color
        }
    })
    console.log(dataChart)
    return (
        <ResponsivePie
            data={dataChart}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            valueFormat=" >-"
            sortByValue={true}
            innerRadius={0.4}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [['darker', '0']],
            }}
            arcLinkLabelsSkipAngle={7}
            arcLinkLabelsTextOffset={8}
            arcLinkLabelsTextColor={colors.primary[100]}
            arcLinkLabelsDiagonalLength={11}
            arcLinkLabelsStraightLength={13}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={colors.primary[300]}
            arcLabelsRadiusOffset={0.45}
            arcLabelsTextColor={colors.grey[900]}
            isInteractive={false}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 48,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                            },
                        },
                    ],
                },
            ]}
        />
    );
}

export default PieChart;
