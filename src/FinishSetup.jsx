import React, {useContext} from 'react';

import { UserContext } from './App';

export default function FinishSetup() {
    const {appState} = useContext(UserContext);
    const {displayName} = appState;

    return (
        <div id="finish-setup">
            <div className="checkMark">&#10004;</div>
            <h3>Congratulations, {displayName}!</h3>
            <h5>You have completed onboarding, you can start using the Eden!</h5>
            <button>Launch Eden</button>
        </div>
    );
}