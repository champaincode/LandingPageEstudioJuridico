import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import * as emailjs from "@emailjs/browser";

const Chatbot = () => {
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#0048CD",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#0048CD",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const sendEmail = (userInput) => {
    const templateParams = {
      to_email: "ladogordito@gmail.com",
      message: `Un usuario ha ingresado la siguiente información: ${userInput}`,
    };

    emailjs
      .send(
        "service_yr3a3pn",
        "template_x1es5su",
        templateParams,
        "icjGRAOiXcntnfGnv"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating={true}
        botDelay={3000}
        steps={[
          {
            id: "1",
            message:
              "Hola 👋🏼 Muchas gracias por contactarnos! Somos un equipo de abogados con mas de 15 años de experiencia. Estamos para ayudarte en tus gestiones!",
            trigger: "2",
          },
          {
            id: "2",
            message: "Cual es tu nombre?",
            trigger: "3",
          },
          {
            id: "3",
            user: true,
            trigger: "4",
          },
          {
            id: "4",
            message:
              "Genial! {previousValue} Te pido, por favor, tu número de WhatsApp y tu email",
            trigger: "5",
          },
          {
            id: "5",
            user: true,
            trigger: "6",
          },
          {
            id: "6",
            message: "Gracias por proporcionar esa información.",
            trigger: "7",
          },
          {
            id: "7",
            component: <div>{sendEmail("{previousValue}")}</div>,
            asMessage: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default Chatbot;
