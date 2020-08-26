import {INCREASE_QUANTITY,DECREASE_QUANTITY} from './types'
import { act } from 'react-dom/test-utils'
export const productQuantity =(action,name) =>{
    return(dispatch)=>{
        console.log('inside product quantity')
        console.log("the action is ",action)
        console.log("the product name is :",name)
        dispatch({
                type :action === "increase" ? INCREASE_QUANTITY: DECREASE_QUANTITY,
                payload:name

        })
    }
}