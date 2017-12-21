export function addComment(newText) {
    return {
        type: "ADD_COMMENT",
        payload: newText
    };
}

export function editComment(id, newText) {
    return {
        type: "EDT_COMMENT",
        payload: { id, newText }
    };
}

export const deleteComment = (id) => ({
    //  return {
    type: "DEL_COMMENT",
    payload: id
    // };
})