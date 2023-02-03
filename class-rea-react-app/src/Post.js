function Post(props) {
    console.log(props);

    return(
        <div>
            <h1>{props.post.title}</h1>
            <h2>{props.post.author}</h2>
            <p>{props.post.body}</p>
            <ul>
                <li>{props.post.comments[0]}</li>
                <li>{props.post.comments[1]}</li>
            </ul>
        </div>
    );
}

export default Post;