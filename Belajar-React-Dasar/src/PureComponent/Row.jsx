let counter = 0;
console.log("counter: " + counter);
export default function Row({ text }) {
   
    counter++;
    console.log("counter: " + counter);
    return (
        <tr>
            <td>{counter}</td>
            <td>{text.name}</td>
        </tr>
    )
}