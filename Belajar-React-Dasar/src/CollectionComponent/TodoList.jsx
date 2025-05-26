

export default function TodoList() {

  const data = [
    {
      id: 1,
      text: "Learn HTML",
      isCompleted: true
    },
    {
      id: 2,
      text: "Learn CSS",
      isCompleted: true
    },
    {
      id: 3,
      text: "Learn JavaScript",
      isCompleted: true
    },
    {
      id: 4,
      text: "Learn ReactJS",
      isCompleted: false
    },
    {
      id: 5,
      text: "Learn ReactJS Delete",
      isDelete: true
    },
    {
      id: 6,
      text: "Learn ReactJS Not Delete",
      isDelete: false
    }
  ]

  const todo = data.map((item) => (
    <li key={item.id}>{item.text}</li>
  ))

  return (
    <ul>
      {todo}
    </ul>
  );
}