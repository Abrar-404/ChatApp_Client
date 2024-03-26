import { RiseLoader } from "react-spinners";

// import socketIO from 'socket.io-client';


// const ENDPOINT = 'http://localhost:5000/';

// const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

const Join = () => {
  // socket.on('connect', () => {});

  return (
    <div>
      <div>
        <div className="flex justify-center mx-auto my-auto mt-48">
          <RiseLoader color="#36d7b7" />
        </div>
      </div>
    </div>
  );
};

export default Join;
