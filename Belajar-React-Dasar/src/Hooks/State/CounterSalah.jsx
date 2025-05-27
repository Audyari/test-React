export default function CounterSalah() {
    
    let count = 0;
   
    return (
        <div>
            <h1>Counter Salah</h1>
            <button onClick={
                () => {
                    count++;
                    console.log(count);
                }
            }>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}
