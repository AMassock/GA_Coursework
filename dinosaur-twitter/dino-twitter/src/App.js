import logo from './logo.svg';
import './App.css';
import Feed from './Feed';

function App(props) {
  // let {author, content, likes, retweets, date} = tweets;
  // console.log(tweets);
  return (
    <div>
      <h1>DinoFeed</h1>
      <Feed {...props}/>
    </div>
  );
}

export default App;
