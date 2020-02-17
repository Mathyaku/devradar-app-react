import React, { useState, useEffect } from 'react';

import './style.css';

const  DevForm = function ({onSubmit}) {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect( () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLongitude(longitude);
                setLatitude(latitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 3000
            }
        );
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}> 
            <div className="input-block">
                <label htmlFor="github_username"> Github user</label>
                <input 
                    name="github_username" 
                    id="github_username" 
                    required
                    value={github_username}
                    onChange={ (event) => setGithubUsername(event.target.value) }
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs"> Technologies</label>
                <input 
                    name="techs" 
                    id="techs" 
                    required
                    value={techs}
                    onChange={ (event) => setTechs(event.target.value) }
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude"> Latitude </label>
                    <input 
                        type="number" 
                        name="latitude" 
                        id="latitude" 
                        required value={latitude} 
                        onChange={ (event) => setLatitude(event.target.value) }
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude"> Longitude </label>
                    <input 
                        type="number" 
                        name="longitude" 
                        id="longitude" 
                        required 
                        value={longitude} 
                        onChange={ (event) => setLongitude(event.target.value) }
                    />
                </div>
            </div>

            <button type="submit"> Save </button>
        </form>
    )
}

export default DevForm;