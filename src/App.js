import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import "react-chatbot-kit/build/main.css";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "./components/chatbot/MessageParser";
import ActionProvider from "./components/chatbot/ActionProvider";
import config from "./components/chatbot/config";
import Botmodified from "./components/chatbot/Botmodified.png";
import StickyNotes from "./components/Notes/StickyNotes";
function App() {
  const [start, setStart] = useState(false);
  const [chatbtn, setButton] = useState(false);

  const btnHandler = () => {
    setButton(!chatbtn);
    console.log(chatbtn);
  };
  return (
    <>
      <div className="quiz">
        {start ? <Quiz /> : <Start props={setStart} />}
      </div>
      {/* <Quiz /> */}
      <div className="chat">
        <button className="chatBtn" onClick={btnHandler}>
          <img src={Botmodified} border="0" height="60" width="60" />
        </button>
      </div>
      {/* <img src={Botmodified} border="0" height="60" width="60" /> */}
      {chatbtn && (
        <div className="chatbot">
          <header>
            <h1>
              <p>
                <p>
                  <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                  />
                </p>
              </p>
            </h1>
          </header>
        </div>
      )}
    </>
  );
}

export default App;
