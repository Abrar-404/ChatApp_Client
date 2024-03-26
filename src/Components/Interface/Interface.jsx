import socketIO from 'socketIO';

const ENDPOINT = 'http://localhost:5000/';

const socket = socketIO(ENDPOINT, {transports: ['websocket']});

const Interface = () => {
  return (
    <div>
      
    </div>
  );
};

export default Interface;