import '../Styles/chatpage.css';
import '../Styles/btn2.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
let user;

const sendUser = () => {
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = '';
};

const ChatLanding = () => {
  const [name, setName] = useState('');
  console.log(name);

  return (
    <chatpage>
      <div className="mt-20">
        <div className="flex justify-center mx-auto">
          <img
            className="w-[30%] h-[30%]"
            src="https://i.ibb.co/qyFX2r6/output-onlinegiftools.gif"
            alt=""
          />
        </div>

        <div className="border-8 border-white rounded-full py-10 w-1/2 flex justify-center mx-auto border-t-0 border-b-0 hover:border-[#ff00bf]">
          <h1 className="text-center text-white text-4xl font-bold font-rubik-doodle">
            Your Nickname
          </h1>
        </div>

        <div className="flex justify-center mx-auto mt-2">
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            className="bg-[#1D232A] border-[#ff00bf] border-2 rounded-2xl py-3 px-10"
            placeholder="Enter Your Nickname"
            id="joinInput"
          />
        </div>

        <div className="flex justify-center mt-4">
          <Link to="/chatPage">
            <button className="bhitu-btn2" onClick={e => !name ? e.preventDefault() : null}>
              Submit
            </button>
          </Link>
        </div>
      </div>
    </chatpage>
  );
};

export default ChatLanding;
export { user };
