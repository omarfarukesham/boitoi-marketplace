import { RootState } from "@/store/store";
import { ITask } from "@/taskInterface";
import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "@reduxjs/toolkit/query";



const initialState: { tasks: ITask[] } = {
    tasks: [
        {
            id: '1234',
            title: 'Frontend UI development',
            description: "Develop the frontend UI for the application",
            isCompleted: false,
            status: 'In Progress',
            dueDate: '2021-12-31',
            priority: 'High',
        },
        {
            id: '1235',
            title: 'Backend API development',
            description: "Develop the backend API for the application",
            isCompleted: false,
            status: 'In Progress',
            dueDate: '2021-12-31',
            priority: 'High',
        },
        {
            id: '123544',
            title: 'Backend API development',
            description: "Develop the backend API for the application",
            isCompleted: false,
            status: 'In Progress',
            dueDate: '2021-12-31',
            priority: 'High',
        },
        {
            id: '12355',
            title: 'Backend API development',
            description: "Develop the backend API for the application",
            isCompleted: false,
            status: 'In Progress',
            dueDate: '2021-12-31',
            priority: 'High',
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{}

})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export default taskSlice.reducer;