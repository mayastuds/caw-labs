export function DisplayTab() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <ul>
      {tab.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
