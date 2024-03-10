import { useState, useEffect } from 'react';
import { sessionService } from '../../services/session/session';

export const Login = () => {
  const [requestToken, setRequestToken] = useState<string>('');

  useEffect(() => {
    const getRequestToken = async () => {
      try {
        const token = await sessionService.getRequestToken();
        setRequestToken(token);
      } catch (error) {
        console.error('Error obtaining request token:', error);
      }
    };
    getRequestToken();
  }, []);

  const handleLogin = () => {
    window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/movies`;
  };

  if (!requestToken) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with TMDb</button>
    </div>
  );
};
