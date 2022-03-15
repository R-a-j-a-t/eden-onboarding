import React from 'react';

export default function UserOptionCard({id, imgSrc, user, description, select, onSelect}) {
    let classValue = 'user-option-card';
    if (select) {
        classValue += ' selected';
    }
    return (
        <div className={classValue} onClick={onSelect} id={id} >
            <img src={imgSrc} alt="user select logo" />
            <div className="for-user">{user}</div>
            <div className="for-description">{description}</div>
        </div>
    );
}