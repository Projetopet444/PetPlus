import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewPets from './pages/NewPets';
import PhotoPet from './pages/PhotoPet';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
           <Route path="/" exact component={Logon} />
           <Route path="/register" component={Register} />

           <Route path="/profile" component={Profile} />
           <Route path="/pets/new" component={NewPets} />
           <Route path="/pets/photo" component={PhotoPet} />
        </Switch>
        </BrowserRouter>
    );
}