import Todo from "./todo"

export default function TodoList() {

    const data = [
        {
            id: 0,
            text: "Learn HTML",
            isCompleted: true,
            isDeleted: true
        },
        {
            id: 1,
            text: "Learn CSS",
            isCompleted: false,
            isDeleted: false
        },
        {
            id: 2,
            text: "Learn JavaScript",
            isCompleted: true,
            isDeleted: false
        },
        {
            id: 3,
            text: "Learn ReactJS",
            isCompleted: true,
            isDeleted: false
        },
        {
            id: 4,
            text: "Learn ReactJS Route",
            isCompleted: true,
            isDeleted: false
        }
    ]

    const todos = data.map(todo => (
        <Todo key={todo.id} {...todo} />
    ));


    return (
        <ul>
            {todos}
        </ul>
    )
}