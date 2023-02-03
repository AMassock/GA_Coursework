import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App(props) {
  return (
    <Post post={props.post}/>
  );
}

export default App;
