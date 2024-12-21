export default function Todo({ text, isCompleted, isDeleted = false }) {
    if (isDeleted) {
        return null
    } else {
        return (
            <li>
                {isCompleted ? <del> {text} </del> : text}
                {/* untuk nampilin emoji ketik windows + . */}
                {isCompleted && ' ✅ '}
            </li>
        )
    }
}