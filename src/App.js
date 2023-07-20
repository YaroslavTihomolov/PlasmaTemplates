import React, {useEffect} from 'react';
import {BrowserRouter, useHistory} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
    const ScrollToTop = ({children}) => {
        const history = useHistory();

        useEffect(() => {
            return  history.listen(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            });
        }, [history]);

        return <>{children}</>;
    };

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <ScrollToTop>
                    <Header/>
                    <AppRouter/>
                </ScrollToTop>
            </div>
        </BrowserRouter>
    )
}

export default App;