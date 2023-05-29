import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

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
            message:
              "En qué área específica te podes ayudar? \n1. Escrituras de propiedad\n2. Usurpación de inmuebles\n3. Título de propiedad\n4.Registro de inmueble \n5.Otro 1)",
            trigger: "7",
          },
          {
            id: "7",
            options: [
              { value: 1, label: "Escrituras de propiedad", trigger: "8" },
              { value: 2, label: "Usurpación de inmuebles", trigger: "9" },
              { value: 3, label: "Título de propiedad", trigger: "10" },
              { value: 4, label: "Registro de inmueble", trigger: "11" },
              { value: 5, label: "Otro", trigger: "12" },
            ],
          },
          {
            id: "8",
            message:
              `Entiendo. En caso de escrituras de propiedad, podemos ofrecerte las siguientes soluciones:\n` +
              `1. Asesoramiento legal sobre los pasos a seguir\n` +
              `2. Presentación de denuncias y acciones legales\n` +
              `3. Mediación con las partes involucradas\n` +
              `4. Recuperación de la posesión del inmueble\n` +
              `5. Otro`,
            trigger: "13",
          },
          {
            id: "9",
            message:
              `Entiendo. En caso de usurpación de inmuebles, podemos ofrecerte las siguientes soluciones:\n` +
              `1. Asesoramiento legal sobre los pasos a seguir\n` +
              `2. Presentación de denuncias y acciones legales\n` +
              `3. Mediación con las partes involucradas\n` +
              `4. Recuperación de la posesión del inmueble\n` +
              `5. Otro`,
            trigger: "13",
          },
          {
            id: "10",
            message:
              `Entiendo. En caso de título de propiedad, podemos ofrecerte las siguientes soluciones:\n` +
              `1. Asesoramiento legal sobre los pasos a seguir\n` +
              `2. Presentación de denuncias y acciones legales\n` +
              `3. Mediación con las partes involucradas\n` +
              `4. Recuperación de la posesión del inmueble\n` +
              `5. Otro`,
            trigger: "13",
          },
          {
            id: "11",
            message:
              `Entiendo. En caso de registro de inmueble, podemos ofrecerte las siguientes soluciones:\n` +
              `1. Asesoramiento legal sobre los pasos a seguir\n` +
              `2. Presentación de denuncias y acciones legales\n` +
              `3. Mediación con las partes involucradas\n` +
              `4. Recuperación de la posesión del inmueble\n` +
              `5. Otro`,
            trigger: "13",
          },
          {
            id: "12",
            message:
              `Otro: 1) 1.\n` +
              `1. Certificado de dominio \n` +
              `2. Partidos de defunción \n` +
              `3. Partidos de divorcio \n` +
              `4. Documentación para extranjeros \n` +
              `5. Otro`,
            trigger: "13",
          },
          {
            id: "13",
            message:
              "🔴Genial! En las próximas 24 hs, nuestro equipo de profesionales se contactará con vos! Te dejo este calendly para que marques tu disponibilidad para que podremos contactarte! Muchas gracias! Muchas gracias por confiar, estaremos en lo que necesites! 🔴",
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default Chatbot;
