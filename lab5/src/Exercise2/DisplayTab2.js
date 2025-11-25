export function DisplayTab2() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <div>
      {tab.map((item, i) => (
        <p key={i}>Element {i + 1} is: {item}</p>
      ))}
    </div>
  );
}
