import Button from "./Button";

function ButtonsContainer({
  appList,
}: {
  appList: {
    name: string;
    description: string;
    url: string;
    logo: string;
  }[];
}) {
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
  name: string;
  appList: {
    name: string;
    description: string;
    url: string;
    logo: string;
  }[];
}) {
  return (
    <div className="group-container">
      <h2>{name}</h2>
      <ButtonsContainer appList={appList} key={name} />
    </div>
  );
}
