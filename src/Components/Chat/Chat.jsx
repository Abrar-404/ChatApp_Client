import '../Styles/chatpage.css';

const Chat = () => {
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
        <div>
          <h1 className="text-center text-white text-4xl font-bold font-rubik-doodle">
            Your Nickname
          </h1>
        </div>

        <div className="flex justify-center mx-auto mt-2">
          <input
            type="text"
            className="bg-[#1D232A] border-[#ff00bf] border-2 rounded-2xl py-2 px-2"
            placeholder="Enter Your Nickname"
          />
        </div>
      </div>
    </chatpage>
  );
};

export default Chat;
