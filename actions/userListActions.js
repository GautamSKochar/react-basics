export const selectUser = (user) => {
    console.log("You clicked "+user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};