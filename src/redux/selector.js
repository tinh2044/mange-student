export const selectStudent = (state) => state.student
export const selectNameStudent = (state) => state.student.map(item => {
    return {
        label: item.name
    }
})
export const selectTuition = (state) => state.student.map(item => {
    return {
        id: item.id,
        name: item.name,
        paid: item.tuition.paid
    }
})