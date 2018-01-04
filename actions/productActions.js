export const filterTextChange = (filterText) => {
    return {
        type: "UPDATE_FILTERTEXT",
        payload: filterText
    }
};
export const updateInStockFlag = (flag) => {
    return {
        type: "UPDATE_INSTOCK_FLAG",
        payload: flag
    }
};