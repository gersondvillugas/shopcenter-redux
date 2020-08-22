import {GET_NUMBERS_BASKET} from './types'
export const getNumbers = () => {
    return (dispatch) =>{
        console.log("gettin to basket")
        dispatch({
            type:GET_NUMBERS_BASKET
        })
    }    
}