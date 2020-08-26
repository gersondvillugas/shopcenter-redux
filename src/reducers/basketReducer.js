import { ADD_PRODUCT_BASKET ,GET_NUMBERS_BASKET,INCREASE_QUANTITY,
    DECREASE_QUANTITY} from "../actions/types";
import { act } from "react-dom/test-utils";

const initialState ={
    basketNumbers:0,
    cartCost:0,
    products:{
        greyTshirt:{
            name:'Grey Tshirt',
            tagName:"greyTshirt",
            price:12.00,
            numbers:0,
            inCart :false
        },
        greyHoddie:{
            name:'Grey Hoodie',
            tagName:"greyHoodie",

            price:12.00,
            numbers:0,
            inCart :false
        },
        blackTshirt:{
            name:'black Tshirt',
            tagName:"blackTshirt",

            price:14.00,
            numbers:0,
            inCart :false
        },
          blackHoddie:{
            name:'Black Hoddie',
            tagName:"blackHoddie",

            price:12.00,
            numbers:0,
            inCart :false
        }

    }

}
export default (state=initialState,action)=>{
    let productSelected=""
    switch(action.type){
        case ADD_PRODUCT_BASKET:
             productSelected={...state.products[action.payload]}
            productSelected.numbers+=1
            productSelected.inCart=true
            console.log(productSelected)
            return {
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost + state.products[action.payload].price,
                products :{
                    ...state.products,
                    [action.payload] :productSelected 
                }
            }
            case GET_NUMBERS_BASKET:
                return {
                    ...state
                }
            case INCREASE_QUANTITY:
                 productSelected={...state.products[action.payload]}
                 productSelected.numbers+=1;
                 return {
                            ...state,
                            cartCost:state.cartCost + state.products[action.payload].price,
                          products:{
                              ...state.products,
                              [action.payload]:productSelected
                          }
                    }
            case DECREASE_QUANTITY:
                productSelected={...state.products[action.payload]}
                let newCartCost=0;
                if (productSelected.numbers===0){
                    productSelected.numbers=0;
                    newCartCost=state.cartCost
                }else{
                    productSelected.numbers-=1;
                    newCartCost=state.cartCost - state.products[action.payload].price

                }
                return {
                           ...state,
                           cartCost:newCartCost,
                         products:{
                             ...state.products,
                             [action.payload]:productSelected
                         }
                   }
        default:
            return state; 
        
    }
}