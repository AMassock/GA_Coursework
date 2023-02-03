import './Message.css';

export default function Message(tweeter) {
    // console.log(data);
    let { author, content, likes, retweets, date } = tweeter;
    // console.log(author);
    // let messData = props;
    // console.log(messData);
    return(
        // console.log('message:',{tweeter}),
        <div className='container'>
            <p>{content}</p>
            <p>⚫️ {author}</p>
            <div className='data'>
                <p>Likes: {likes}</p>
                <p>Retweets: {retweets}</p>
                <p>Date: {date}</p>
            </div>
      </div>
    );
}