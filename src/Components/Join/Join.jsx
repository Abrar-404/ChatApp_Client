import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import '../Styles/Buttons.css';

// import socketIO from 'socket.io-client';

// const ENDPOINT = 'http://localhost:5000/';

// const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

const Join = () => {
  // socket.on('connect', () => {});

  return (
    <div>
      <div className=" mt-48">
        {/* Logo */}
        <div className="flex justify-center mx-auto my-auto">
          <HashLoader color="#36d7b7" size={90} />
        </div>

        {/* Header */}
        <div className="flex justify-center mt-20">
          <h1 className="font-rubik-doodle text-8xl text-[#36d7b7]">Jitter</h1>
        </div>

        {/* Button */}
        <div className="flex justify-center mx-auto items-center gap-10 mt-10">
          <Link to="/chatlanding">
            <button className="bhitu-btn">Login</button>
          </Link>

          {/* <Link to="/register">
            <button className="bhitu-btn">Register</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Join;
