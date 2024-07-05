import Button from "./Button";
import { AppInterface } from "./Interfaces";

function ButtonsContainer({ appList }: { appList: AppInterface[] }) {
  return (
    <div className="buttons-container">
      {appList.map((app) => (
        <Button app={app} key={app.name} />
      ))}
    </div>
  );
}

export default function GroupContainer({
  name,
  appList,
}: {
  name: string | null;
  appList: AppInterface[];
}) {
  return (
    <div className="group-container">
      <h2 className="group-container-name">{name}</h2>
      <ButtonsContainer appList={appList} key={name} />
    </div>
  );
}
