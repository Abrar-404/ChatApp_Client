import { useEffect } from 'react';
import { malik } from './ChatLanding';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import '../Styles/chatpagestyle.css';
import closeIcon from '../../assets/closeIcon.png';
import sendLogo from '../../assets/send.png'

import socketIO from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000/';

const ChatPage = () => {
  const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

  useEffect(() => {
    socket.on('connect', () => {
      alert('connected');
    });

    socket.emit('joined', { malik });

    socket.on('welcome', (data)=>{
      console.log(data.malik, data.message)
    })


    socket.on('userJoined', (data) => {
      console.log(data.malik, data.message);
    })

  }, []);

  return (
    <chatpagecomp>
      <div className="chatPage">
        <div className="chatContainer">
          <div className="header">
            <h2>Jitter</h2>
            <a href="/">
              {' '}
              <img src={closeIcon} alt="Close" />
            </a>
          </div>
          {/* <ReactScrollToBottom className="chatBox">
            {messages.map((item, i) => (
              <Message
                user={item.id === id ? '' : item.malik}
                message={item.message}
                classs={item.id === id ? 'right' : 'left'}
              />
            ))}
          </ReactScrollToBottom> */}
          <div className="inputBox">
            <input
              onKeyPress={event => (event.key === 'Enter' ? send() : null)}
              type="text"
              id="chatInput"
            />
            {/* <button onClick={send} className="sendBtn">
              <img src={sendLogo} alt="Send" />
            </button> */}
          </div>
        </div>
      </div>
    </chatpagecomp>
  );
};

export default ChatPage;
