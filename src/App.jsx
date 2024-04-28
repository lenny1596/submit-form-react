import { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    resume: "",
    url: "",
    selectedOption: "",
    about: "",
    subject: {
      english: true,
      math: false,
      physics: false,
      chemistry: true,
    },
  });

  return (
    <div className="App">
    </div>
  );
};

export default App;
