import React from 'react';

export default function ProductTitle({ imgSrc, name}) {
    return (
        <div id="product-title">
            <img src={imgSrc} alt={name + " logo"} className="main-logo" />
            <h3 className="main-title">{name}</h3>
        </div>
    );
}