export default function Todo({ text, isCompleted, isDelete=false }) {
  if (isDelete) {
    return null;
  }

  if (isCompleted) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  }

  return (
    <li>
      {text}
    </li>
  );
}