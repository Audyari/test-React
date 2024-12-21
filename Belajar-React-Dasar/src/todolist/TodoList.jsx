import Todo from "./todo"

export default function TodoList() {
    return (
        <ul>
            <Todo isCompleted={true} text="Lern HTML" isDeleted={true} />
            <Todo isCompleted={true} text="Lern CSS" />
            <Todo isCompleted={true} text="Lern JavaScript" />
            <Todo isCompleted={false} text="Lern ReactJS" />
        </ul>
    )
}