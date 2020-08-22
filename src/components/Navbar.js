import React from 'react';
import {connect} from 'react-redux'
import {getNumbers} from '../actions/getAtcion'
import {Link} from 'react-router-dom'
function Navbar(props) {
  console.log(props)
  return (
      <header >
        <div className="overlay"> </div>
         <nav>
              <h2> shop</h2>
               <ul>
                 <li> <Link to="/">home</Link></li>
                 <li> <Link to="/about">About</Link></li>
                 <li className="cart"> <Link to="/cart">
                 <ion-icon name="basket-outline"></ion-icon>
  cart  <span> {props.basketProps.basketNumbers}</span> </Link></li>

               </ul>
         </nav>       
      </header>
  );
}
const mapStateToProps =state =>({
  basketProps:state.basketState
})

export default  connect(mapStateToProps,{getNumbers}) (Navbar)