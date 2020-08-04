import React, {Component} from 'react';
import HomePage from './pages/HomePage/Homepage/HomePage.component'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component'
import {Switch, Route} from 'react-router-dom'
//import {CSSTransition} from 'react-css-transition' 

//import CheckoutPage from './component/pages/CheckoutPage/CheckoutPage.component'


  const App =() =>{
   return(

   <div>
<Switch>
<Route exact path='/' component={HomePage}/>
<Route path='/checkout' component={CheckoutPage} />
</Switch>


)

      </div>
      

    )
  }


export default App;

