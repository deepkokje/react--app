import React, { Component } from 'react';
import Home from './homecomp';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menucomp';
import Header from './headercomp';
import Footer from './footercomp';
import DishDetail from './dishdetails';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }



  render() {

    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        
        <Header/>
       <Switch>

       <Route path='/home' component={HomePage} />
       <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />

       </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;