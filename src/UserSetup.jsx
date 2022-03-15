import React, { useState, useContext } from 'react';

import UserOptionCard from './UserOptionCard';
import { UserContext } from './App';

import selfLogo from './assets/images/self-logo.png';
import teamLogo from './assets/images/team-logo.png';

export default function UserSetup() {
    const [select, setSelect] = useState(true);

    const { onSubmit } = useContext(UserContext);

    function onSelect() {
        setSelect(select => !select);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {children} = event.target.childNodes[0];

        const selfPlan = children['option-self'].classList.value.includes('selected');
        
        onSubmit({selfPlan});
    };

    const self = {
        id: 'option-self',
        // imgSrc: './assets/images/self-logo.png',
        imgSrc: selfLogo,
        user: 'For myself',
        description: 'Write better. Think more clearly. Stay organized.',
        select,
        onSelect
        
    };

    const team = {
        id: 'option-team',
        // imgSrc: './assets/images/team-logo.png',
        imgSrc: teamLogo,
        user: 'With my team',
        description: 'Wikis, docs, tasks & projects, all in one place.',
        select: !select,
        onSelect
    };

    return (
        <div id="user-setup">
            <h3>How are you planning to use Eden?</h3>
            <h5>We'll streamline your setup experience accordingly.</h5>
            <form onSubmit={handleSubmit}>
                <div className="cards">
                    <UserOptionCard {...self} />
                    <UserOptionCard {...team} />
                </div>
                <button type="submit">Create Workspace</button>
            </form>
        </div>
    );
}