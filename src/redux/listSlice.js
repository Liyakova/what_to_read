import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'list',
    initialState: {
        listItems: []
    },
    reducers: {
        addItemToList: (state, action) => {
            const timeId = new Date().getTime();
            state.listItems.push({
                id: timeId,
                bookId: action.payload.book,
            })
        },
        removeItemFromList: (state, action) => {
            state.listItems = state.listItems.filter(
                listItem => listItem.id !== action.payload.listItemId
            )
        }

    },
})

export const getListCategory = state => state.list.listItems;
export const { addItemToList, removeItemFromList } = slice.actions;
export default slice.reducer;