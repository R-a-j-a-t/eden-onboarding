import React, { useState, createContext } from 'react';

import Content from './Content';
import ProductTitle from './ProductTitle';
import ProgressBar from './ProgressBar';

import edenLogo from './assets/images/eden-logo.png';

export const UserContext = createContext();

export default function App() {
    // Use a state variable to track the progress
    const [stage, setStage] = useState(0);
    const [appState, setAppState] = useState({});


    let productProps = {
        // imgSrc: './assets/images/eden-logo.png',
        imgSrc: edenLogo,
        name: 'Eden'
    };

    let progressProps = {
        stagesCount: 4,
        currentStage: stage
    };


    function handleSetAppState(newState) {
        setAppState({...appState, ...newState});
        setStage(stage + 1);
    }
    
    return (
        <>
            <ProductTitle {...productProps} />
            <ProgressBar {...progressProps} />
            <UserContext.Provider value={{appState, onSubmit: handleSetAppState}} >
                {Content({stageValue: stage})}
            </UserContext.Provider>
        </>
    );
}