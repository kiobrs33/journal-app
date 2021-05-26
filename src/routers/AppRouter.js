import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import {firebase} from '../firebase/firebaseConfig';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if(user?.uid){
                    dispatch(login(user.uid, user.displayName));
                    setIsLoggedIn(true);

                    //Notes of User
                    dispatch(startLoadingNotes(user.uid));
                }else{
                    setIsLoggedIn(false);
                }
                setCheking(false);
            })
    }, [dispatch, setCheking]);

    if(cheking){
        return (<h1>En espera</h1>)
    }

    return (
        <Router>
            <Switch>
                <PublicRouter
                    path='/auth'
                    component={AuthRouter}
                    isAuthenticated={isLoggedIn}
                />
                <PrivateRouter
                    exact
                    path="/"
                    component={JournalScreen}
                    isAuthenticated={isLoggedIn}
                />
            </Switch>
        </Router>
    )
}
