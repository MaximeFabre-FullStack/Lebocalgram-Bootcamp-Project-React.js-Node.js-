/**
 *  Component - App.js
 */

/* Imports */
import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "../style_global.css";

/* Component */
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      subscribeEmail: "",
      subscribePseudo: "",
      subscribePassword: "",
      subscribePasswordConfirm: "",
      success: false,
    };
  }

  handleInput = (e) => {
    // recupere les infos des inputs dans le state, puis console log
    this.setState({ [e.target.name]: e.target.value });
  };

  submitRegister = (e) => {
    e.preventDefault();

    /* Créer le body à envoyer */
    const body = {
      subscribeEmail: this.state.subscribeEmail,
      subscribePseudo: this.state.subscribePseudo,
      subscribePassword: this.state.subscribePassword,
    };

    /* Configurer la requête */

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* Envoi de la requête */
    fetch("http://localhost:8080/users/create-profile", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="pageContainer">
        <div className="logoContainer">
          <img className="logo" src="../../images/logo12.png" alt="logo" />
        </div>

        {/*-------------------   Login   -------------------*/}

        <div className="loginBlock">
          <label htmlFor="loginEmail">Email:</label>
          <input
            type="mail"
            name="loginEmail"
            value={this.state.loginEmail}
            placeholder="email"
            onChange={this.handleInput}
            className="input_s input_email"
          ></input>
          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            name="loginPassword"
            value={this.state.loginPassword}
            onChange={this.handleInput}
            className="input_s input_password"
            required
          ></input>
          <Link to="/">
            <svg
              className="login_logo"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/*-------------------   Subscribe   -------------------*/}

        <div className="loginBlock2">
          <p className="paragraphe">Pas encore inscrit ? c'est par ici !</p>
          <label htmlFor="subscribeEmail">Email:</label>
          <input
            type="mail"
            name="subscribeEmail"
            value={this.state.subscribeEmail}
            onChange={this.handleInput}
            className="input_s margin_auto margin_left_10"
          ></input>
          <br />
          <label htmlFor="subscribePseudo">Pseudo:</label>
          <input
            type="text"
            name="subscribePseudo"
            value={this.state.subscribePseudo}
            onChange={this.handleInput}
            className="input_s margin_auto margin_left_10"
          ></input>
          <br />
          <label htmlFor="ssubscribePassword">Password:</label>
          <input
            type="password"
            git
            name="subscribePassword"
            value={this.state.subscribePassword}
            onChange={this.handleInput}
            className="input_s margin_auto margin_left_10"
          ></input>
          <br />
          <label htmlFor="subscribePasswordConfirm">Confirm Password:</label>
          <input
            type="password"
            name="subscribePasswordConfirm"
            value={this.state.subscribePasswordConfirm}
            onChange={this.handleInput}
            className="input_s margin_auto margin_left_10"
          ></input>
          <br />

          <Link to="/">
            <svg
              className="login_logo margin"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              onClick={this.submitRegister}
            >
              <path
                fillRule="evenodd"
                d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <br />
        </div>
      </div>
    );
  }
}

export default LoginPage;
