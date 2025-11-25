export function DisplayTabProps(props) {
  const items = props.items;

  return (
    <div>
      {items.map((item, i) => (
        <p key={i}>Element {i + 1} is: {item}</p>
      ))}
    </div>
  );
}
