import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TicketPage from "./components/TicketPage";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Hero from "./components/Hero";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [ticket, setGenerateTicket] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageDrop = (file) => {
    setSelectedImage(file);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const generateTicket = (e) => {
    e.preventDefault();
    if (!name || !email || !username) {
      setError(true);
      return;
    } else {
      setError(false);
      setGenerateTicket(true);
      console.log(name, email, username, selectedImage);
    }
  };
  return (
    <section className="relative text-center background text-white min-h-screen flex flex-col items-center justify-start ">
      <Hero
        name={name}
        ticket={ticket}
        email={email}
      />

      {!ticket ? (
        <Form
          name={name}
          handleNameChange={handleNameChange}
          email={email}
          handleEmailChange={handleEmailChange}
          username={username}
          handleUsernameChange={handleUsernameChange}
          error={error}
          generateTicket={generateTicket}
          onImageDrop={handleImageDrop}
          selectedImage={selectedImage}
        />
      ) : (
        <TicketPage
          name={name}
          email={email}
          selectedImage={selectedImage}
          username={username}
        />
      )}
    </section>
  );
}

export default App;
