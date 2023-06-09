import { tokens } from '../theme';

export const student = [
    {

        id: 1,
        name: 'Jon Snow',
        email: 'jonsnow@gmail.com',
        address: '0912 Won Street, Alabama, New York',
        age: 17,
        phone: '034 121 5454',
        gender: "Male",
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 9.8,
                    },
                    { title: 'Firts Semester', point: 5.2, }, {
                        title: 'Midterm two',
                        point: 8,
                    }, {
                        title: 'Second Semester',
                        point: 5.3
                    }
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 8,
                    }, {
                        title: 'Firts Semester',
                        point: 4.6,
                    }, {
                        title: 'Midterm two',
                        point: 7.8
                    }, {
                        title: 'Second Semester',
                        point: 7.1
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 4.4,
                    }, {
                        title: 'Firts Semester',
                        point: 5.3,
                    }, {
                        title: 'Midterm two',
                        point: 7.1
                    }, {
                        title: 'Second Semester',
                        point: 4.1
                    },
                ]
            },
            {
                name: 'Physics',
                color: tokens('dark').greenAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 7,
                    }, {
                        title: 'Firts Semester',
                        point: 6.1,
                    }, {
                        title: 'Midterm two',
                        point: 3.2
                    }, {
                        title: 'Second Semester',
                        point: 3.8
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 10,
                    }, {
                        title: 'Firts Semester',
                        point: 10,
                    }, {
                        title: 'Midterm two',
                        point: 3.9,
                    }, {
                        title: 'Second Semester',
                        point: 8.6
                    },
                ]
            },
        ],
        tuition: {
            isFinished: true,
            paid: 700,
            date: '03/03/2023'

        },
        response: 'actively participate in activities (class monitor)',
    },
    {

        id: 2,
        name: 'Cersei Lannister',
        email: 'cerseilannister@gmail.com',
        address: '1234 Main Street, New York',
        age: 17,
        phone: '034 314 2288',
        gender: "Female",
        response: 'often late to school (homeroom teacher)',
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.6,
                    }, {
                        title: 'Firts Semester',
                        point: 4.2,
                    }, {
                        title: 'Midterm two',
                        point: 3.5
                    }, {
                        title: 'Second Semester',
                        point: 5.7
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.4,
                    }, {
                        title: 'Firts Semester',
                        point: 4,
                    }, {
                        title: 'Midterm two',
                        point: 2,
                    }, {
                        title: 'Second Semester',
                        point: 4.9
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 4,
                    }, {
                        title: 'Firts Semester',
                        point: 6.5,
                    }, {
                        title: 'Midterm two',
                        point: 6,
                    }, {
                        title: 'Second Semester',
                        point: 8
                    },
                ]
            },
            {
                name: 'Physics',
                color: tokens('dark').greenAccent[300],


                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.6,
                    }, {
                        title: 'Firts Semester',
                        point: 4.5,
                    }, {
                        title: 'Midterm two',
                        point: 3.4,
                    }, {
                        title: 'Second Semester',
                        point: 3.1
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 6.3,
                    }, {
                        title: 'Firts Semester',
                        point: 4.3,
                    }, {
                        title: 'Midterm two',
                        point: 5.4,
                    }, {
                        title: 'Second Semester',
                        point: 4
                    },
                ]
            },
        ],
        tuition: {
            isFinished: true,
            paid: 640,
            date: '06/03/2023'

        },
    },
    {

        id: 3,
        name: 'Jaime Lannister',
        email: 'jaimelannister@gmail.com',
        age: 18,
        phone: '034 982 6739',
        gender: "Female",
        response: 'No response',
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 7.3,
                    }, {
                        title: 'Firts Semester',
                        point: 4.9,
                    }, {
                        title: 'Midterm two',
                        point: 7.9
                    }, {
                        title: 'Second Semester',
                        point: 10
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.2,
                    }, {
                        title: 'Firts Semester',
                        point: 8.1,
                    }, {
                        title: 'Midterm two',
                        point: 9.6
                    }, {
                        title: 'Second Semester',
                        point: 10
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 6.1,
                    }, {
                        title: 'Firts Semester',
                        point: 4.6,
                    }, {
                        title: 'Midterm two',
                        point: 4.4
                    }, {
                        title: 'Second Semester',
                        point: 6
                    },
                ]
            },
            {
                name: 'Physics',
                color: tokens('dark').greenAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.4,
                    }, {
                        title: 'Firts Semester',
                        point: 10,
                    }, {
                        title: 'Midterm two',
                        point: 3.4,
                    }, {
                        title: 'Second Semester',
                        point: 7.4
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.7,
                    }, {
                        title: 'Firts Semester',
                        point: 3.8,
                    }, {
                        title: 'Midterm two',
                        point: 5.3
                    }, {
                        title: 'Second Semester',
                        point: 9.7
                    },
                ]
            },
        ],
        tuition: {
            isFinished: true,
            paid: 690,
            date: '04/03/2023'

        },
        address: '1676 Angus Road, New York',
    },
    {

        id: 4,
        name: 'Anya Stark',
        email: 'anyastark@gmail.com',
        address: '3333 Want Blvd, Estanza, New York',
        age: 17,
        phone: '034 425 6742',
        gender: "Male",
        response: 'study hard (Durga Hel)',
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.3,
                    }, {
                        title: 'Firts Semester',
                        point: 9.3,
                    }, {
                        title: 'Midterm two',
                        point: 9.5
                    }, {
                        title: 'Second Semester',
                        point: 8.6
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],


                marks: [
                    {
                        title: 'Midterm one',
                        point: 10,
                    }, {
                        title: 'Firts Semester',
                        point: 8.6,
                    }, {
                        title: 'Midterm two',
                        point: 9.8
                    }, {
                        title: 'Second Semester',
                        point: 7.2
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],


                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.5,
                    }, {
                        title: 'Firts Semester',
                        point: 3.3,
                    }, {
                        title: 'Midterm two',
                        point: 7.8
                    }, {
                        title: 'Second Semester',
                        point: 9
                    },
                ]
            },
            {
                name: 'Physics',
                color: tokens('dark').greenAccent[300],


                marks: [
                    {
                        title: 'Midterm one',
                        point: 4.5,
                    }, {
                        title: 'Firts Semester',
                        point: 9.7,
                    }, {
                        title: 'Midterm two',
                        point: 7.5
                    }, {
                        title: 'Second Semester',
                        point: 7.8
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.7,
                    }, {
                        title: 'Firts Semester',
                        point: 9.4,
                    }, {
                        title: 'Midterm two',
                        point: 9.7
                    }, {
                        title: 'Second Semester',
                        point: 5.7
                    },
                ]
            },
        ],
        tuition: {
            isFinished: true,
            paid: 650,
            date: '08/03/2023'

        }
    },
    {

        id: 5,
        name: 'Daenerys Targaryen',
        email: 'daenerystargaryen@gmail.com',
        age: 17,
        phone: '034 445 1189',
        gender: "Male",
        response: 'No response',
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.2,
                    }, {
                        title: 'Firts Semester',
                        point: 3.9,
                    }, {
                        title: 'Midterm two',
                        point: 10,
                    }, {
                        title: 'Second Semester',
                        point: 9
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 7.4,
                    }, {
                        title: 'Firts Semester',
                        point: 10,
                    }, {
                        title: 'Midterm two',
                        point: 3.4,
                    }, {
                        title: 'Second Semester',
                        point: 8.8
                    },
                ]
            },
            {
                name: 'Geography',

                color: tokens('dark').redAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.5,
                    }, {
                        title: 'Firts Semester',
                        point: 3.3,
                    }, {
                        title: 'Midterm two',
                        point: 7.8
                    }, {
                        title: 'Second Semester',
                        point: 9
                    },
                ]
            },
            {
                name: 'Physics',

                color: tokens('dark').greenAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 5.2,
                    }, {
                        title: 'Firts Semester',
                        point: 5.6,
                    }, {
                        title: 'Midterm two',
                        point: 5.7
                    }, {
                        title: 'Second Semester',
                        point: 4.3
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 10,
                    }, {
                        title: 'Firts Semester',
                        point: 5.8,
                    }, {
                        title: 'Midterm two',
                        point: 9.6
                    }, {
                        title: 'Second Semester',
                        point: 4.8
                    },
                ]
            },
        ],
        tuition: {
            isFinished: true,
            paid: 700,
            date: '07/03/2023'

        },
        address: '93 Ridgemont Dr Hopewell Junction, New York',
    },
    {

        id: 6,
        name: 'Ever Melisandre',
        email: 'evermelisandre@gmail.com',
        age: 17,
        phone: '034 545 6483',
        gender: "Female",
        response: "late for school (Jennie Jordan)",
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 4.8,
                    }, {
                        title: 'Firts Semester',
                        point: 10,
                    }, {
                        title: 'Midterm two',
                        point: 9.4,
                    }, {
                        title: 'Second Semester',
                        point: 7.9
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 9.3,
                    }, {
                        title: 'Firts Semester',
                        point: 8.4,
                    }, {
                        title: 'Midterm two',
                        point: 5.7
                    }, {
                        title: 'Second Semester',
                        point: 9.3
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 8.7,
                    }, {
                        title: 'Firts Semester',
                        point: 8.2,
                    }, {
                        title: 'Midterm two',
                        point: 3.1
                    }, {
                        title: 'Second Semester',
                        point: 4.5
                    },
                ]
            },
            {
                name: 'Physics',
                color: tokens('dark').greenAccent[300],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.5,
                    }, {
                        title: 'Firts Semester',
                        point: 9,
                    }, {
                        title: 'Midterm two',
                        point: 9.2,
                    }, {
                        title: 'Second Semester',
                        point: 9.6
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.6,
                    }, {
                        title: 'Firts Semester',
                        point: 6.2,
                    }, {
                        title: 'Midterm two',
                        point: 7.4
                    }, {
                        title: 'Second Semester',
                        point: 8.9
                    },
                ]
            },
        ],
        tuition: {
            isFinished: true,
            paid: 600,
            date: '10/03/2023'

        },
        address: '15 S Henry St Pearl River, New York',
    },
    {

        id: 7,
        name: 'Ferrara Clifford',
        email: 'ferraraclifford@gmail.com',
        age: 17,
        phone: '034 124 0123',
        gender: "Male",
        response: 'Not being serious during class time (John Doe)',
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 10,
                    }, {
                        title: 'Firts Semester',
                        point: 7.8,
                    }, {
                        title: 'Midterm two',
                        point: 9.1
                    }, {
                        title: 'Second Semester',
                        point: 5.9
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 8.2,
                    }, {
                        title: 'Firts Semester',
                        point: 9.4,
                    }, {
                        title: 'Midterm two',
                        point: 10,
                    }, {
                        title: 'Second Semester',
                        point: 3.4
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 10,
                    }, {
                        title: 'Firts Semester',
                        point: 10,
                    }, {
                        title: 'Midterm two',
                        point: 6.6,
                    }, {
                        title: 'Second Semester',
                        point: 3.5
                    },
                ]
            },
            {
                name: 'Physics',
                color: tokens('dark').greenAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 6.3,
                    }, {
                        title: 'Firts Semester',
                        point: 10,
                    }, {
                        title: 'Midterm two',
                        point: 7.3,
                    }, {
                        title: 'Second Semester',
                        point: 8.8
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 8,
                    }, {
                        title: 'Firts Semester',
                        point: 5.3,
                    }, {
                        title: 'Midterm two',
                        point: 9.3,
                    }, {
                        title: 'Second Semester',
                        point: 3.9
                    },
                ]
            },
        ],
        address: '36 W 138th St New York, New York',
        tuition: {
            isFinished: false,
            paid: 650,
            date: ""

        },
    },
    {

        id: 8,
        name: 'Rossini Frances',
        email: 'rossinifrances@gmail.com',
        age: 17,
        phone: '034 444 5555',
        gender: "Female",
        response: 'play game at the lecture (Neli Sabriye)',
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.4,
                    }, {
                        title: 'Firts Semester',
                        point: 7.6,
                    }, {
                        title: 'Midterm two',
                        point: 9.5
                    }, {
                        title: 'Second Semester',
                        point: 7.4
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 6.1,
                    }, {
                        title: 'Firts Semester',
                        point: 7.9,
                    }, {
                        title: 'Midterm two',
                        point: 10,
                    }, {
                        title: 'Second Semester',
                        point: 7.8
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 8.8,
                    }, {
                        title: 'Firts Semester',
                        point: 9.1,
                    }, {
                        title: 'Midterm two',
                        point: 3.4
                    }, {
                        title: 'Second Semester',
                        point: 6.7
                    }
                ]
            },
            {
                name: 'Physics',

                color: tokens('dark').greenAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 7.2,
                    }, {
                        title: 'Firts Semester',
                        point: 4.4,
                    }, {
                        title: 'Midterm two',
                        point: 6.1
                    }, {
                        title: 'Second Semester',
                        point: 5.4
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 8.1,
                    }, {
                        title: 'Firts Semester',
                        point: 7.5,
                    }, {
                        title: 'Midterm two',
                        point: 10,
                    }, {
                        title: 'Second Semester',
                        point: 10
                    },
                ]
            },
        ],
        tuition: {
            isFinished: false,
            paid: 700,
            date: ""

        },
        address: '4856 44th St Woodside, New York',
    },
    {

        id: 9,
        name: 'Harvey Roxie',
        email: 'harveyroxie@gmail.com',
        age: 18,
        phone: '034 555 6239',
        gender: "Female",
        response: "No response",
        subjects: [
            {
                name: 'History',
                color: tokens('dark').blueAccent[500],
                marks: [
                    {
                        title: 'Midterm one',
                        point: 9.7,
                    }, {
                        title: 'Firts Semester',
                        point: 8.6,
                    }, {
                        title: 'Midterm two',
                        point: 10,
                    }, {
                        title: 'Second Semester',
                        point: 7.1
                    },
                ]
            },
            {
                name: 'Math',
                color: tokens('dark').greenAccent[800],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 7.6,
                    }, {
                        title: 'Firts Semester',
                        point: 6.1,
                    }, {
                        title: 'Midterm two',
                        point: 4.1
                    }, {
                        title: 'Second Semester',
                        point: 5.3
                    },
                ]
            },
            {
                name: 'Geography',
                color: tokens('dark').redAccent[500],


                marks: [
                    {
                        title: 'Midterm one',
                        point: 8.8,
                    }, {
                        title: 'Firts Semester',
                        point: 9.1,
                    }, {
                        title: 'Midterm two',
                        point: 3.4
                    }, {
                        title: 'Second Semester',
                        point: 6.7
                    }
                ]
            },
            {
                name: 'Physics',
                color: tokens('dark').greenAccent[300],


                marks: [
                    {
                        title: 'Midterm one',
                        point: 8.8,
                    }, {
                        title: 'Firts Semester',
                        point: 3.1,
                    }, {
                        title: 'Midterm two',
                        point: 3.9
                    }, {
                        title: 'Second Semester',
                        point: 4.8
                    },
                ]
            },
            {
                name: 'Chemistry',
                color: tokens('dark').redAccent[300],

                marks: [
                    {
                        title: 'Midterm one',
                        point: 3.8,
                    }, {
                        title: 'Firts Semester',
                        point: 9.8,
                    }, {
                        title: 'Midterm two',
                        point: 4.6
                    }, {
                        title: 'Second Semester',
                        point: 5.5
                    },
                ]
            },
        ],
        tuition: {
            isFinished: false,
            paid: 700,
            date: ""

        },
        address: 'N Castle Dr Armonk, New York',
    },
];






