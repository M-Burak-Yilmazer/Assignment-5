import { useState } from "react";
import "./form.css";

const Form = () => {
  const [passwordV, setPasswordV] = useState(true);
  const [visible, setVisible] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    password: "",
  });
  const [cardData, setCardData] = useState({
    cardEmail: "",
    cardUsername: "",
    cardFirstName: "",
    cardLastName: "",
    cardImageUrl: "",
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
    e.target.previousElementSibling.type = passwordV ? "text" : "password";
    e.target.textContent = passwordV ? "Hide" : "Show";
  };
  const handleMove = (e) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (
      email.includes("@") &&
      username &&
      firstName &&
      lastName &&
      imageUrl.startsWith("https://") &&
      passwordPattern.test(password)
    ) {
    } else {
      e.target.classList.add("submitBtn");
      e.target.UseSubmitBehavior = "false";
      handleBtnClick(e);
    }
  };
  function handleBtnClick(e) {
    e.preventDefault();

    // e.target.disabled = "true";
  }
  // const handleMove = (e) => {
  //   e.target.classList.add("submitBtn");
  // };
  const handleLeave = (e) => {
    e.target.classList.remove("submitBtn");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);

    setCardData({
      cardEmail: email,
      cardUsername: username,
      cardFirstName: firstName,
      cardLastName: lastName,
      cardImageUrl: imageUrl,
    });
    // Optionally, you can reset the form data here after the card is displayed
    // to keep the card data
    setData({
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      imageUrl: "",
      password: "",
    });
  };

  return (
    <div className="container p-4 text-danger ">
    <h1 className="text-center display-3">Forms</h1>
      <form
        className="mt-5 mx-auto d-fle flex-column col-12 col-sm-8 col-md-6"
        onSubmit={handleSubmit}
      >
        <div className="input-group mb-3 row">
          <span
            class="input-group-text col-4 bg-danger text-white"
            id="basic-addon1"
          >
            Email address
          </span>
          {/* <label htmlFor="email" className="form-label">
            Email address :

          </label> */}

          <input
            onInput={handleForm}
            type="email"
            className="form-control col-9"
            id="email"
            placeholder="Enter your email"
            // required
            name="email"
            value={email}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="input-group mb-3 row">
          <span
            class="input-group-text col-4 bg-danger text-white"
            id="basic-addon1"
          >
            Username
          </span>
          <input
            placeholder="Enter your username"
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
        <div className="input-group mb-3 row">
          <span
            class="input-group-text col-4 bg-danger text-white"
            id="basic-addon1"
          >
            First Name
          </span>
          <input
            onChange={handleForm}
            type="text"
            className="form-control "
            id="firstName"
            name="firstName"
            placeholder="Enter your first-name"
            value={firstName}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="input-group mb-3 row">
          <span
            class="input-group-text col-4 bg-danger text-white"
            id="basic-addon1"
          >
            Last Name
          </span>
          <input
            onChange={handleForm}
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="Enter your last-name"
            // required
            aria-describedby="emailHelp"
          />
        </div>
        <div className="input-group mb-3 row">
          <span
            class="input-group-text col-4 bg-danger text-white"
            id="basic-addon1"
          >
            Image
          </span>
          <input
            onChange={handleForm}
            id="imageUrl"
            className="form-control"
            type="url"
            value={imageUrl}
            name="imageUrl"
            placeholder="Enter your image-url"
            // required
          />
        </div>
        <div className="mb-3 input-group row">
          <span class="input-group-text col-4 bg-success text-white" id="basic-addon1">
            Password
          </span>
          <input
            onChange={handleForm}
            title="must be one digit, uppercase and lowercase"
            placeholder="Enter your password"
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
            className="input-group-text bg-success text-white col-2"
          >
            Show
          </span>
        </div>
        <div className="w-50 text-center  mx-auto ">
          <button
            onClick={handleMove}
            onMouseEnter={handleMove}
            onMouseOut={handleLeave}
            type="submit"
            className={`btn w-75 btn-primary mt-3 ${showCard ? "submitBtn" : ""}`}
          >
            Submit
          </button>
        </div>
      </form>
      {showCard && (
        <div className="">
          <div className="mx-auto card mt-3" style={{ width: "18rem" }}>
            {/* Display cardData in the card */}
            <img
              src={cardData.cardImageUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{cardData.cardUsername}</h5>
              <p className="card-text">
                {cardData.cardFirstName} {cardData.cardLastName}
              </p>
              <a href="#" className="btn btn-primary">
                {cardData.cardEmail}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Form;
