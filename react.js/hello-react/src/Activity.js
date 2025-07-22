export function Activity() {
  //export default means only this function will get exported by default or else if we have another array or json object in this component then we no need default and in importing page we can import multiple things within curly braces.
  //exporting withoutout default keyword then we should import as import { Activity } from "./Activity"
  return (
    <div>
      <ul type="circle">
        <li>wakeup</li>
        <li>bath</li>
        <li>pray</li>
        <li>breakfast</li>
      </ul>
    </div>
  );
}
