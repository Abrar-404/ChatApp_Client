import socketIO from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000/';

const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

const Interface = () => {
  socket.on('connect', () => {});

  return (
    <div>
      <h1>HAha</h1>
    </div>
  );
};

export default Interface;
