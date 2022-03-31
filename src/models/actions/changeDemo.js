export const UPDATE_NODE = "UPDATE_NODE";

// 自己写dispatch, 类似dva
// export const updateNote = (globalParams) => ({
//     type: UPDATE_NODE,
//     globalParams,
// });

// action dispatch
export const actionCreators = {
    updateNote: globalParams => (dispatch) => {
        dispatch({ type: UPDATE_NODE, globalParams })
    },
};
