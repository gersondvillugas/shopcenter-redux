import { ADD_PRODUCT_BASKET ,GET_NUMBERS_BASKET} from "../actions/types";
import { act } from "react-dom/test-utils";

const initialState ={
    basketNumbers:0,
    cartCost:0,
    products:{
        greyTshirt:{
            name:'Grey Tshirt',
            price:12.00,
            numbers:0,
            inCart :false
        },
        greyHoddie:{
            name:'Grey Hoodie',
            price:12.00,
            numbers:0,
            inCart :false
        },
        blackTshirt:{
            name:'black Tshirt',
            price:14.00,
            numbers:0,
            inCart :false
        },
          blackHoddie:{
            name:'Black Hoddie',
            price:12.00,
            numbers:0,
            inCart :false
        }

    }

}
export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let addQuantity={...state.products[action.payload]}
            addQuantity.numbers+=1
            addQuantity.inCart=true
            console.log(addQuantity)
            return {
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost + state.products[action.payload].price,
                products :{
                    ...state.products,
                    [action.payload] :addQuantity 
                }
            }
            case GET_NUMBERS_BASKET:
                return {
                    ...state
                }
        default:
            return state;
        
    }
}