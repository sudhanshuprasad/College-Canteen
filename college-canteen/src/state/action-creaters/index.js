export const decqt = (quantity, foodId)=>{
    console.log("update the fucking cart you idiot. cart no."+foodId);
    return (dispatch)=>{
        dispatch({
            type: "decrease",
            payload: quantity,
        })
    }
}

export const incqt = (quantity)=>{
    return (dispatch)=>{
        dispatch({
            type: "increase",
            payload: quantity,
        })
    }
}