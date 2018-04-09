import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
    return (
        <li className="contact">
            <h1 className="contact-name">{props.name}</h1>
            <img className="contact-photo" src={props.photo} alt="contact" />
            <h2 className="contact-address">{props.address}</h2>
        </li>
    );
}