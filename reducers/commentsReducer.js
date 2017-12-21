import {LoadState, setLocalStorage} from '../localStorage';

const commentsReducer = (state = {
    comments:  []
}, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            state = {
                ...state,
                comments: [...state.comments, action.payload]
            }
            //setLocalStorage("comments", state.comments);
            break;
        case "EDT_COMMENT":
            state = {
                ...state,
                comments: state.comments.slice(0, action.payload.id)
                    .concat(action.payload.newText)
                    .concat(state.comments.slice(action.payload.id + 1))
            }
            //setLocalStorage("comments", state.comments);
            // comments[action.payload.id]: comments[action.payload.id] = action.payload.newText
            //     comments comments[action.payload.id] = action.payload.newText
            break;
        case "DEL_COMMENT":
            state = {
                ...state,
                // comments: state.comments.filter(cmt => {
                //     return cmt != action.payload
                // })
                comments: [...state.comments.slice(0, action.payload),
                ...state.comments.slice(action.payload + 1)]
                // comments.splice(action.payload,1)
            }
            //setLocalStorage("comments", state.comments);
            break;
    }
    return state;
}
export default commentsReducer;