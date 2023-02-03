import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './Post';


const post = {
  title: "My Blog",
  author: "AJ Massock",
  body: "This is my first blog post",
  comments: ["cool", "awesome"],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App post={post}/>
    {/* <Post title={post.title} author={post.author} body={post.body} comments={post.comments} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
