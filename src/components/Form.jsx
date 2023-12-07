import { useState } from "react";
import "./form.css";

const Form = () => {
  const [passwordV, setPasswordV] = useState(true);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    password: "",
  });
  const { email, username, firstName, lastName, imageUrl, password } = data;

  const handleForm = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    // console.log(e.target.previousElementSibling);
    setPasswordV(!passwordV);
    e.target.previousElementSibling.type = passwordV ? "password" : "text";
  };
  const handleMove = (e) => {
    if (
      email.includes("@") &&
      username &&
      firstName &&
      lastName &&
      imageUrl.startsWith("https://") &&
      password.length >= 8
    ) {
    } else {
      e.target.classList.add("submitBtn");
      e.preventDefault();
    }
  };

  // const handleMove = (e) => {
  //   e.target.classList.add("submitBtn");
  // };
  const handleLeave = (e) => {
    e.target.classList.remove("submitBtn");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(!visible);
    console.log(visible);
    // setData({
    //   email: "",
    //   username: "",
    //   firstName: "",
    //   lastName: "",
    //   imageUrl: "",
    //   password: "",
    // });
  };

  return (
    <div className="container w-50 mt-4 text-danger">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address :{/* <span>{email}</span> */}
          </label>
          <input
            onInput={handleForm}
            type="email"
            className="form-control"
            id="email"
            // required
            name="email"
            value={email}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username :{/* <span>{username}</span> */}
          </label>
          <input
            onChange={handleForm}
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            // required
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
            {/* <span> {firstName}</span> */}
          </label>
          <input
            onChange={handleForm}
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            onChange={handleForm}
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            // required
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image
          </label>
          <input
            onChange={handleForm}
            id="imageUrl"
            className="form-control"
            type="url"
            value={imageUrl}
            name="imageUrl"
            placeholder="Enter your image url"
            // required
          />
        </div>
        <div className="mb-3 input-group ">
          <label
            htmlFor="password"
            className="form-label w-100 d-block
          "
          >
            Password
          </label>

          <input
            onChange={handleForm}
            name="password"
            type="password"
            className="form-control input-group"
            id="password"
            value={password}
            // required
          />
          <span
            onClick={handleClick}
            role="button"
            className="input-group-text bg-success text-white"
          >
            Show/Hide
          </span>
        </div>
        <div className="w-50 text-center  mx-auto ">
          <button
            // onClick={handleSubmit}
            onMouseEnter={handleMove}
            onMouseOut={handleLeave}
            type="submit"
            className="btn  btn-primary mt-3"
          >
            Submit
          </button>
        </div>
      </form>
      {visible && (
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{username}</h5>
              <p className="card-text">
                {firstName} {lastName}
              </p>
              <a href="#" className="btn btn-primary">
                {email}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
