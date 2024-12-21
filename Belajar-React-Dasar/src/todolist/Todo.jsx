export default function Todo({ text, isCompleted, isDeleted = true }) {
    if (isDeleted) {
        return null
    } else {
        return (
            <li>
                {isCompleted ? text : < del > {text} </del>}
                {/* untuk nampilin emoji ketik windows + . */}
                {isCompleted && ' ✅ '}
            </li >
        )
    }
}