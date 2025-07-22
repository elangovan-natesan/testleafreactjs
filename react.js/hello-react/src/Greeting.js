export default function Greeting(props) {
  //Here props is an object. Instead of props we can use object destructuring ex. { name, role, nameList, employees }
  return (
    <div>
      <h1>
        Welcome to react props {props.name} - {props.role}
      </h1>

      {props.nameList.map((name) => {
        return <p>{name}</p>;
      })}
      {props.employees.map((data) => {
        return <p>{`${data.id}-${data.name}-${data.age}`}</p>;
      })}
    </div>
  );
}
