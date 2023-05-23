import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const Chatbot = () => {
  //   const theme = {
  //     background: "#f5f8fb",
  //     fontFamily: "Helvetica Neue",
  //     headerBgColor: "blue",
  //     headerFontColor: "#fff",
  //     headerFontSize: "15px",
  //     botBubbleColor: "blue",
  //     botFontColor: "#fff",
  //     userBubbleColor: "#fff",
  //     userFontColor: "#4a4a4a",
  //   };
  //   const steps = [
  //     {
  //       id: "1",
  //       message: "Hola,¿En que puedo ayudarte?",
  //     },
  //   ];

  return (
    <ChatBot
      floating={true}
      steps={[
        {
          id: "1",
          message: "What number I am thinking?",
          trigger: "2",
        },
        {
          id: "2",
          options: [
            { value: 1, label: "Number 1", trigger: "4" },
            { value: 2, label: "Number 2", trigger: "3" },
            { value: 3, label: "Number 3", trigger: "3" },
          ],
        },
        {
          id: "3",
          message: "Wrong answer, try again.",
          trigger: "2",
          end: true,
        },
        {
          id: "4",
          message: "Awesome! You are a telepath!",
          end: true,
        },
      ]}
    />
  );
};

export default Chatbot;
