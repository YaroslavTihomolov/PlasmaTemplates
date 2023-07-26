import React, {FC, memo, useEffect, useReducer, useRef, ReactNode} from 'react';
import {BrowserRouter, useHistory} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {createAssistant} from '@salutejs/client';
import {reducer} from './store';
import Header from "./components/Header";

const initializeAssistant = (getState: any) => {
    return createAssistant({getState});
};

export const App: FC = memo(() => {
    useEffect(() => {
        // При монтировании компонента, прокрутить страницу вверх
        window.scrollTo(0, 0);
    }, []);

    const assistantRef = useRef<ReturnType<typeof createAssistant>>();
    useEffect(() => {
        assistantRef.current = initializeAssistant(() => {
        });
        assistantRef.current.on('data', ({action}: any) => {
            if (action) {
                reducer(action);
            }
        });
    });


    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
});

export default App;
