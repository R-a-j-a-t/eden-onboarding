import React, { useContext } from 'react';

import { UserContext } from './App';

export default function Welcome() {
    
    const {onSubmit} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        let {target} = event;
        
        let fullName = target['full-name'].value;
        let displayName = target['display-name'].value;

        onSubmit({fullName, displayName});
    }
    
    return (
        <div id="welcome">
            <h3>Welcome! First things first...</h3>
            <h5>You can always change them later.</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="full-name">Full Name</label><br />
                <input id="full-name" placeholder="Steve Jobs" required />
                <br />
                <label htmlFor="display-name">Display Name</label><br />
                <input id="display-name" placeholder="Steve" required />
                <button type="submit">Create Workspace</button>
            </form>
        </div>
    );
}