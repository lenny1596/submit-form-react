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
    about: "",
    subject: {
      english: true,
      math: false,
      physics: false,
      chemistry: true,
    },
  });

  const handleSubjectChange = (sub) => {
    setFormData({
      ...formData,
      subject: {
        ...formData.subject,
        [sub]: !formData.subject[sub],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div className="App">
      <h1>Student Form</h1>
      <fieldset>
        <form action="#" method="get">
          {/* first name */}
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            placeholder="First Name"
            required
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          {/* last name */}
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            required
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          {/* email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {/* contact */}
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={formData.contact}
            placeholder="Contact"
            required
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
          {/* gender */}
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            required
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="" disabled>
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="preferNotToSay">Prefer Not To Say</option>
          </select>
          {/* subject */}
          <label htmlFor="subject">Your Best Subjects:</label>
          <div>
            <input
              type="checkbox"
              name="subject"
              id="english"
              checked={formData.subject.english === true}
              onChange={() => handleSubjectChange("english")}
            />
            English
            <input
              type="checkbox"
              name="subject"
              id="math"
              checked={formData.subject.math === true}
              onChange={() => handleSubjectChange("math")}
            />
            Math
            <input
              type="checkbox"
              name="subject"
              id="physics"
              checked={formData.subject.physics === true}
              onChange={() => handleSubjectChange("physics")}
            />
            Physics
            <input
              type="checkbox"
              name="subject"
              id="chemistry"
              checked={formData.subject.chemistry === true}
              onChange={() => handleSubjectChange("chemistry")}
            />
            Chemistry
          </div>
          {/* resume */}
          <label htmlFor="resume">Upload Your Resume:</label>
          <input
            type="file"
            name="resume"
            id="resume"
            accept="application/pdf"
            onChange={(e) =>
              setFormData({ ...formData, resume: e.target.files[0] })
            }
            required
          />
          {/* about */}
          <label htmlFor="about">Tell us About Yourself:</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            placeholder="Say Something Here"
            required
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
          ></textarea>
          <button type="submit" value="submit" onClick={handleSubmit}>
            Submit Form
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default App;
