export const decqt = (quantity)=>{
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