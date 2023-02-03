// Header

export default function Header(props) {
    return (
        <div >
            <h1>React Counters</h1>
            <button onClick={props.decrease}>-</button>
            <button onClick={props.increase}>+</button>
        </div>
    )
}