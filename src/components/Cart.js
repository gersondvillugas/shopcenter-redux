import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import one from '../images/one.jpg'
import two from '../images/one.jpg'
import tree from '../images/one.jpg'
import four from '../images/one.jpg'
import {productQuantity} from '../actions/productQuantity'
function Cart({basketProps,productQuantity}) {
    console.log(basketProps)
    let productsInCart =[]
    Object.keys(basketProps.products).forEach(function(item){
        console.log(item)
        console.log(basketProps.products[item].inCart)
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart)
    })
    // const productImages=[one,two ,tree ,four ]
    const productImages = (product) =>{
      if(product.tagName ==="greyTshirt"){
          return one;
      }else if(product.tagName==="greyHoodie"){
          return two;
      }
      else if(product.tagName==="blackTshirt"){
        return tree;
      }
      else if(product.tagName==="blackHoddie"){
        return four;
      }
    }

    productsInCart =productsInCart.map((product,index)=>{
         return (
             <Fragment key={index}>
                 <div className="product" >
                   <ion-icon name="close-circle"> </ion-icon> 
                   <img src={productImages(product)}/>
                   <span className="sm-hide">{product.numbers}</span>
                 </div>
                 <div className="price sm-hide">
                     ${product.price},00
                 </div>
                 <div className="quantity">
                     <ion-icon onClick={()=>productQuantity('decrease',product.tagName)} className="decrease" name="arrow-back-circle-outline"> </ion-icon> 
                         <span>{product.numbers}</span>
                     <ion-icon onClick={()=>productQuantity('increase',product.tagName)}    className="increase" name="arrow-forward-circle-outline"> </ion-icon> 

                 </div>
                 <div className="total">  ${product.numbers*product.price},00   </div>





             </Fragment>
         )
    })
    return (
        <div className="container-products">
              <div className="product-header">
                  <h5 className="product-title">PRODUCT</h5>
                  <h5 className="price sm-hide">PRODUCT</h5>
                  <h5 className="quantity">QUANTITY</h5>
                  <h5 className="total">TOTAL</h5>
              </div>
              <div className="products">
                    {productsInCart}
              </div>
              <div className="basketTotalContainer">
                      <h5 className="basketTotalTitle">Basket Total</h5>
                      <h5 className="basketTotal">${basketProps.cartCost},00</h5>

              </div>
        </div>
    )
}
const mapStateToProps=state =>({
     basketProps:state.basketState
});
export default connect(mapStateToProps,{productQuantity})(Cart);





