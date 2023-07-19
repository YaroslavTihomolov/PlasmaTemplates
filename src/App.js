import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    )
}

export default App;