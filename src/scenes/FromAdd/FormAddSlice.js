import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { student } from '../../data/student';

const formAddSlice = createSlice({
    name: 'student',
    initialState: student,
    reducers: {
        addMember: (state, action) => {
            const newMember = action.payload;
            const phone = action.payload.phone;
            newMember.id = v4();
            newMember.index = state.length + 1;
            newMember.phone = `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;
            newMember.name = newMember.firstName + ' ' + newMember.lastName;
            newMember.age = parseInt(newMember.age);
            state.push(newMember);
        },
    },
});

export const { actions } = formAddSlice;
export default formAddSlice;
