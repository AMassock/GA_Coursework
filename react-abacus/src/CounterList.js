// List of Counters

export default function CounterList(props) {
    let counters = [];
    for(let i = 0; i < props.counters; i++) {
        counters.push(
            <p>Counter [i]</p>
        )
    }
    return(
        <div>
            {counters}
        </div>
    )
}