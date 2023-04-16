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
            newMember.gender = parseInt(newMember.gender);
            newMember.response = "No response"
            newMember.subjects = state[0].subjects.map(subject => {
                return {
                    ...subject,
                    marks: subject.marks.map(mark => { return { ...mark, point: 0 } })
                }
            })
            state.push(newMember);
        },
    },
});

export const { actions } = formAddSlice;
export default formAddSlice;
