import Message from "./Message";
// Comonent to render list of Messages from Message component
export default function Feed(props) {
    return(
    <div>
        {props.tweets.map((tweet, i) => {
            return <Message {...tweet} key={i} />
           })}
    </div>
    );
}