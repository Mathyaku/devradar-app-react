import React from 'react';

import './style.css';

function DevItem( { dev } ) {
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong> {dev.name} </strong>
                    <span> {dev.techs.join(', ')} </span>
                </div>
            </header>
            
            <p> {dev.bio} </p>
            <a href={`http://github.com/${dev.github_username}`} > Access github profile</a>
        </li>
    )
}

export default DevItem;