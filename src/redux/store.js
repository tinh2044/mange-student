import { configureStore } from '@reduxjs/toolkit';
import formAddSlice from '../scenes/FromAdd/FormAddSlice';

const store = configureStore({
    reducer: {
        student: formAddSlice.reducer
    },
});
export default store;
