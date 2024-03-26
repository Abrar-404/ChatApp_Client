import { useEffect, useState } from 'react';
import { malik } from './ChatLanding';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import '../Styles/chatpagestyle.css';
import closeIcon from '../../assets/closeIcon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import socketIO from 'socket.io-client';
import { Link } from 'react-router-dom';
import '../Styles/sendbtn.css';
import Message from '../Message/Message';

const ENDPOINT = 'http://localhost:5000/';

let socket;

const ChatPage = () => {
  const [id, setId] = useState('');
  const [massages, setMessages] = useState([]);

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit('message', { message, id });
    document.getElementById('chatInput').value = '';
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      // toast('🦄 Connected!', {
      //   position: 'top-center',
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'dark',
      //   transition: 'Bounce',
      // });
      // alert('Connected');
      setId(socket.id);
    });

    socket.emit('joined', { malik });

    socket.on('welcome', data => {
      console.log(data.malik, data.message);
    });

    socket.on('userJoined', data => {
      console.log(data.malik, data.message);
    });

    socket.on('leave', data => {
      console.log(data.malik, data.message);
    });

    return () => {
      socket.emit('disconnected');
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on('sendMessage', data => {
      console.log(data.malik, data.message, data.id);
    });
  }, []);

  return (
    <chatpagecomp>
      <ToastContainer />
      {/* <div className="chatPage">
        <div className="chatContainer">
          <div className="header">
            <h2>Jitter</h2>
            <a href="/">
              {' '}
              <img src={closeIcon} alt="Close" />
            </a>
          </div>
          <ReactScrollToBottom className="chatBox">
            {messages.map((item, i) => (
              <Message
                user={item.id === id ? '' : item.malik}
                message={item.message}
                classs={item.id === id ? 'right' : 'left'}
              />
            ))}
          </ReactScrollToBottom>
          <div className="inputBox">
            <input
              onKeyPress={event => (event.key === 'Enter' ? send() : null)}
              type="text"
              id="chatInput "
            />
            <button onClick={send} className="sendBtn">
              <img
                className="w-[30px] h-[30px] ml-10"
                src={sendLogo}
                alt="Send"
              />
            </button>
          </div>
        </div>
      </div> */}

      <div className="mt-20">
        <div className="flex justify-center items-center gap-20">
          <h1 className="font-rubik-doodle lg:text-4xl md:text-2xl text-xl text-white">
            Jitter
          </h1>
          <div>
            <Link to="/">
              <img src={closeIcon} alt="Close" />
            </Link>
          </div>
        </div>

        {/* <div>
          <ReactScrollToBottom className="chatBox">
            {messages.map((item, i) => (
              <Message
                user={item.id === id ? '' : item.malik}
                message={item.message}
                classs={item.id === id ? 'right' : 'left'}
              />
            ))}
          </ReactScrollToBottom>
        </div> */}

        <div className="flex justify-start mt-10">
          <div className="lg:w-1/2 md:w-[60%] w-[90%] text-start mx-auto">
            <ReactScrollToBottom className="chatBox h-[40%]">
              {massages?.map((item, i) => (
                <Message
                  user={item.id === id ? '' : item.malik}
                  message={item.message}
                  classs={item.id === id ? 'right' : 'left'}
                />
              ))}
            </ReactScrollToBottom>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mx-auto lg:w-1/2 md:w-1/2 w-[90%]">
          <input
            onKeyPress={event => (event.key === 'Enter' ? send() : null)}
            type="text"
            id="chatInput"
            className="bg-white lg:py-10 md:py-12 py-8 lg:px-10 px-10 rounded-3xl"
          />

          <div>
            <button onClick={send}>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </chatpagecomp>
  );
};

export default ChatPage;
