import React, { useState } from 'react';
import one from '../images/one.jpg'
import two from '../images/two.jpg'

import tree from '../images/tree.jpg'

import four from '../images/for.jpg'
import {connect} from 'react-redux'
import {addBasket} from '../actions/addAction'

const Home = (props) =>{
   // console.log(props)
    // const [basketNumbers,setBasketNumbers]=useState(0)
   
    return(
            <div className="container">
               <div className="image">
                  <img src={one}  alt="one"/>
                   <h3>Grey tshirt</h3>
                   <h3>$15.0</h3>
                    <a onClick={()=>props.addBasket('greyTshirt')}  href="#" className="addtocart cart1"> Add to cart</a>
               </div>
               <div className="image">
                  <img src={one}  alt=""/>
                   <h3>black tshirt</h3>
                   <h3>$15.0</h3>
                    <a  onClick={()=>props.addBasket('greyHoddie')}  href="#" className="addtocart cart2"> Add to cart</a>
               </div>
               <div className="image">
                  <img src={one}  alt=""/>
                   <h3>orange tshirt</h3>
                   <h3>$15.0</h3>
                    <a  onClick={()=>props.addBasket('blackTshirt')}  href="#" className="addtocart cart3"> Add to cart</a>
               </div>
               <div className="image">
                  <img src={one}  alt=""/>
                   <h3>Grey tshirt</h3>
                   <h3>$15.0</h3>
                    <a  onClick={()=>props.addBasket('blackHoddie')}   href="#" className="addtocart cart4"> Add to cart</a>
               </div>
    {/* <h1>current numbers in cart {basketNumbers}</h1> */}
            </div>
        );
}
export default  connect(null,{addBasket}) (Home)