import { useEffect } from 'react';
import { malik } from './ChatLanding';

import socketIO from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000/';

const ChatPage = () => {
  const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

  useEffect(() => {
    socket.on('connect', () => {
      alert('connected');
    });
  }, []);

  return (
    <div>
      <div>
        <h1 className=" text-3xl">{malik}</h1>
      </div>
    </div>
  );
};

export default ChatPage;
