import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let tweets = [
	{
		author: 'John Doe',
		content: 'Dinasaurs are soooooo cool!',
		likes: 8,
		retweets: 4,
		date: 'May 5, 2020'
	},
	{
		author: 'Jane Doe',
		content: 'I love learning about Dinasaurs!',
		likes: 11,
		retweets: 6,
		date: 'May 6, 2020'
	},
	{
		author: 'Adam Smith',
		content: 'Can\'t get enough of Dinasaurs!',
		likes: 15,
		retweets: 9,
		date: 'May 7, 2020'
	},
	{
		author: 'Sarah Smith',
		content: 'Dinasaurs are so fascinating!',
		likes: 7,
		retweets: 3,
		date: 'May 8, 2020'
	},
	{
		author: 'Chris Doe',
		content: 'Dinasaurs are the best!',
		likes: 12,
		retweets: 5,
		date: 'May 9, 2020'
	},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tweets={tweets}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
