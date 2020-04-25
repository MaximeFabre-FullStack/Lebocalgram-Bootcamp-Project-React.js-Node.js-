import React, { Component } from "react";
import Post from "./Post/Post";
import "../.././style_global.css";
import "./style.css";
import PopUp from "../../PopUpAlert/PopUp";
//import ReactPlayer from "react-player";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostContent: " ",
      newPostAuthor: " ",
      video: " ",
      posts: [],
      show_post_container: "display_on",
    };
  }

  handle_input = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //defini la valeur des input dans le state
  };

  handle_change = (e) => {
    this.setState({ video: e.target.value });
  };

  popup_off = () => {
    this.setState({
      show_post_container: "display_on",
    });
  };

  create_post = (e) => {
    e.preventDefault();

    /* Créer le body à envoyer */
    const body = {
      newPostAuthor: this.state.newPostAuthor,
      video: this.state.video,
      newPostContent: this.state.newPostContent,
    };

    /* Configurer la requête */
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* Envoi de la requête */
    fetch("http://localhost:8080/posts/new-post", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

    const newPost = {
      content: this.state.newPostContent,
      author: this.state.newPostAuthor,
      video: this.state.video,
    };

    let posts = this.state.posts;
    if (newPost.content.length > 1 && newPost.author.length > 1) {
      // si l'un des deux champs pas rempli pas d'envoi
      posts.push(newPost);
    } else {
      this.setState({
        show_post_container: "display_off",
      });
      alert("Veuillez remplir aux moins les champs auteur/message");
      // fait disparaitre les input du Post container pour afficher la pop up
    }
    this.setState({ posts: posts, newPostAuthor: "", newPostContent: "" });
  };

  display_posts = () => {
    let posts = [];

    this.state.posts.forEach((element, index) => {
      // index est la uniquement pour donner une key a Post sinon ca marche pas
      posts.push(
        <Post
          key={index}
          content={element.content}
          author={element.author}
          video={element.video}
        /> // props qui envoie les valeurs dans Post.js
      );
    });

    return posts;
  };

  render() {
    return (
      <div className="post_editor">
        <div className={this.state.show_post_container}>
          <label className="label_1">
            Auteur :
            <input
              className="post_1"
              value={this.state.newPostAuthor}
              onChange={this.handle_input}
              onClick={this.popup_off}
              name="newPostAuthor"
              placeholder="Votre nom d'auteur"
            />
          </label>
          <br />
          <label className="label_1">
            Video Url :
            <input
              onChange={this.handle_change}
              onClick={this.popup_off}
              value={this.state.video}
              className="post_1"
              name="video"
              type="text"
              placeholder="Ajoutez l'url de votre video ici!"
            />
          </label>
          <br />
          <label className="label_1">
            Post :
            <br />
            <textarea
              className="post_3"
              value={this.state.newPostContent}
              onClick={this.popup_off}
              onChange={this.handle_input}
              name="newPostContent"
            ></textarea>
          </label>
          <br />
          <button className="button6" onClick={this.create_post}>
            Ajouter un post
          </button>
        </div>
        <div className="container">{this.display_posts()}</div>
      </div>
    );
  }
}

export default PostContainer;
