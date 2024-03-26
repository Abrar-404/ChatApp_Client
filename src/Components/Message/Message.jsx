const Message = ({ malik, message, classs }) => {
  if (malik) {
    return (
      <div>
        <div className="mt-5 w-[40%]">
          <h1
            className={`bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 py-5 px-5 rounded-3xl text-white ${classs}`}
          >
            {`${malik}: ${message}`}
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="mt-5 w-[40%]">
          <h1 className="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 py-5 px-5 rounded-3xl text-white">
            {`You: ${message}`}
          </h1>
        </div>
      </div>
    );
  }
};

export default Message;
