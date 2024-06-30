import services from "../../services.json";
import GroupContainer from "./components/GroupContainer";

export default function Main() {
  return (
    <main>
      {services.map((group) => (
        <GroupContainer name={group.name} appList={group.apps} />
      ))}
    </main>
  );
}
