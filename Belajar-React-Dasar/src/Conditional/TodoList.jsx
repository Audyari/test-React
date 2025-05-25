import Todo from "./Todo.jsx";
import TernaryOperator from "./TernaryOperator.jsx";
import LogicalAnd from "./LogicalAnd.jsx";

export default function TodoList() {
  return (
    <ul>
      <Todo isCompleted={true} text="Learn HTML" />
      <Todo isCompleted={true} text="Learn CSS" />
      <Todo isCompleted={true} text="Learn JavaScript" />
      <Todo isCompleted={false} text="Learn ReactJS" />
      <Todo isDelete={true} text="Learn ReactJS Delete" />
      <Todo isDelete={false} text="Learn ReactJS Not Delete" />
      <TernaryOperator text="Learn ReactJS Ternary" isCompleted={true} />
      <LogicalAnd text="Learn ReactJS Logical And" isCompleted={true} />
    </ul>
  );
}