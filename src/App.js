import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/maincomp';
import {BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configStore'; 

const store = ConfigureStore();
  class App extends Component {
   
       render () { 

    return (  
      <Provider store ={store}  >
      <BrowserRouter> 
      <div className="App">
        
      <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );}}


  export default App;
