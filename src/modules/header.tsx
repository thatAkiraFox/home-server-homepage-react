import settings from "../../settings.json";

export default function Header() {
  let hostname, logo;
  if (settings.hostname === null || settings.hostname === "")
    hostname = "server";
  if (settings.logo === null || settings.logo === "") logo = "";

  return (
    <div className="header">
      <h1>
        {hostname}
        <br />
        Services Dashboard
      </h1>
    </div>
  );
}
