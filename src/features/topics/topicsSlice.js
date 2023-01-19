import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
        }
    },
    reducer: {
        addTopics: (state, action) => {
            state.topics = {...state.topics, [action.payload.id]: {...payload, quizIds: []}};
        },
    }
});

export const selectTopics = (state) => state.topics

export default topicsSlice.reducer;