import services from "../../services.json";

function Button({ name }) {
  return <button>{name}</button>;
}

function GroupContainer({ children, name }) {
  return (
    <>
      <div className="container">
        <label>{name}</label>
        {children}
      </div>
    </>
  );
}

export default function Body() {
  return services.map((service) => (
    <GroupContainer
      name={service.name}
      key={service.name}
      children={service.apps.map((app) => (
        <Button name={app.name} key={app.name} />
      ))}
    />
  ));
}
