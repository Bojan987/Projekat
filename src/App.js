import React, {  useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import './App.css';

import {  Home } from './components/Home';

import { Profile } from './components/Profile';
import { Table } from './JuggernautHunt/Table';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { HeroHunt } from './HeroHunt/HeroHunt';


function App() {

  const [newUser, setNewUser] = useState({ username: "", password: "",score:0 });
  // eslint-disable-next-line 
  const [isLogged,setIsLogged]= useState(localStorage.getItem('LoggedUser'))

  return (
    <div className='App'>
      
     <Router >
       <Switch>
         <Route exact path='/'>
            <Login setIsLogged={setIsLogged} />
            
         </Route>
         <Route  exact path='/user'>
           {isLogged !==null ? <Home/>: <Redirect to='/'/> }
           {/* <Home/> */}
         </Route>
         <Route path="/user/:username">
            <Profile/>
         </Route>
         <Route  path='/JuggernautHunt'>
            
            {isLogged !==null ? <Table nrows={5} ncols={5} chanceJuggOnStart ={0.25} />: <Redirect to='/'/> }
         </Route>
         <Route  path='/Register'>
         <Register newUser={newUser} setNewUser={setNewUser}/>
         </Route>
         <Route path='/HeroHunt'>
           
           {isLogged !==null ? <HeroHunt />: <Redirect to='/'/> }
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
