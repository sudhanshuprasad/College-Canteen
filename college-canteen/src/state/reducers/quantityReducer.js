const reducer = (state = 0, action) => {
    if (action.type === "decrease") {
        return state - action.payload;
    }
    else if (action.type === "increase") {
        return state + action.payload;
    }else{
        return state;
    }
}

export default reducer;