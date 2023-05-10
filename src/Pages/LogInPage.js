import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setError(null);
      navigate('/');
    } else {
      setError('Sorry your Username or Password are not correct!');
    }
  }

  return (
    <div class="UserLogin">
    <form onSubmit={handleSubmit}>
      <label class="label-login">
        Username
        <input class="input-login" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label class="label-login">
        Password
        <input class="input-login" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button class="btn-login" type="submit">Login</button>
      {error && <p class="error-message-text">{error}</p>}
    </form>
    </div>
  );
  
}