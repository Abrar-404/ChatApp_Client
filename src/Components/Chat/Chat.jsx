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

        <div>
          <div class="input-container">
            <input class="input" name="text" type="text" />
            <label class="label" for="input">
              Enter Here
            </label>
            <div class="topline"></div>
            <div class="underline"></div>
          </div>
        </div>
      </div>
    </chatpage>
  );
};

export default Chat;
