export default function TernaryOperator({ text, isCompleted }) {
    return (
        <li>
            {isCompleted ? <del>{text}</del> : <b>{text}</b>}
        </li>
    )
}