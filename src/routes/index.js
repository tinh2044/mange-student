import { v4 } from 'uuid';
import {
    Calendar,
    Contacts,
    Dashboard,
    FormAdd,
    Invoices,
    LineChart,
    PieChart,
    Team,
} from '../scenes';
const routes = {
    dashboard: '/',
    student: '/student',
    contact: '/contact',
    tuition: '/tuition',
    form: '/add-student',
    calendar: '/calendar',
    pieChart: '/pie-chart',
    lineChart: '/line-chart',
};

const publicRoutes = [
    {
        id: v4(),
        path: routes.dashboard,
        component: <Dashboard />,
    },
    {
        id: v4(),
        path: routes.student,
        component: <Team />,
    },
    {
        id: v4(),
        path: routes.contact,
        component: <Contacts />,
    },
    {
        id: v4(),
        path: routes.tuition,
        component: <Invoices />,
    },
    {
        id: v4(),
        path: routes.form,
        component: <FormAdd />,
    },
    {
        id: v4(),
        path: routes.calendar,
        component: <Calendar />,
    },

    {
        id: v4(),
        path: routes.pieChart,
        component: <PieChart />,
    },
    {
        id: v4(),
        path: routes.lineChart,
        component: <LineChart />,
    },
];

export default publicRoutes;
