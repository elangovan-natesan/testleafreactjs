export default function Greeting(props) {
  //function component
  // user-defined component
  //Here props(properties) is an object. Instead of props we can use object destructuring ex. { name, role, nameList, employees }
  return (
    <div>
      <h1>
        Welcome to react props {props.name} - {props.role}
      </h1>

      {props.nameList.map((name, index) => {
        return <p key={index}>{name}</p>;
        // passing key={index} since each child in a list should have a unique "key" prop.
      })}
      {props.employees.map((data, index) => {
        return (
          <p key={data.id}>{`${index}-${data.id}-${data.name}-${data.age}`}</p>
        );
      })}
    </div>
  );
}
