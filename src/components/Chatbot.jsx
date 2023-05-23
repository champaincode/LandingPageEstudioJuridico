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
      botDelay={3000}
      steps={[
        {
          id: "1",
          message: "Hola, ¿cual es tu nombre?",
          trigger: "2",
        },
        {
          id: "2",
          user: true,
          trigger: "3",
        },
        {
          id: "3",
          message: "Hola {previousValue}, ¿En que puedo ayudarte?!",
          trigger: "4",
        },
        {
          id: "4",
          options: [
            {
              value: 1,
              label: "¿En que dirección esta el estudio?",
              trigger: "5",
            },
            {
              value: 2,
              label: "¿Cuando puedo reservar una cita?",
              trigger: "6",
            },
            { value: 3, label: "¿El precio es en ARS o en USD?", trigger: "7" },
          ],
        },
        {
          id: "5",
          message: "El estudio queda en Sarmiento al 520",
          trigger: "1",
        },
        {
          id: "6",
          message: "Puedes reservar una cita, en nuestro calendly",
          trigger: "2",
        },
        {
          id: "7",
          message: "El precio de la consulta es en pesos argentinos",
          trigger: "3",
        },
      ]}
    />
  );
};

export default Chatbot;
