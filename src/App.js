import React, { useState } from 'react';

const XLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate the inputs
        if (!username || !password) {
            setMessage('Both fields are required.');
            return;
        }

        // Check credentials
        if (username === 'user' && password === 'password') {
            setMessage(`Welcome, ${username}!`);
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default XLogin;
