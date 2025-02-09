export default function App() {
  return (
    <div>
      <Children person={{ name: "bik", age: 18 }} />
    </div>
  );
}
function Children({ person, count = 100 }) {
  return (
    <div>
      {person.name},{person.age},{count}
    </div>
  );
}
