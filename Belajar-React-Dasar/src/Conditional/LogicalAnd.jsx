export default function LogicalAnd({ text, isCompleted, isDelete=false }) {
    if (isDelete) {
        return null;
    }
    return (
        <li>
            {text} {isCompleted && <span role="img" aria-label="completed">✅</span>}
        </li>
    )
}