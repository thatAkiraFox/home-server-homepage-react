import settings from "../../settings.json";

export default function Header() {
  let hostname, logo;
  if (settings.hostname === null || settings.hostname === "")
    hostname = "Home Server";

  if (settings.logo === null || settings.logo === "")
    // find placeholder logo

    return (
      <div className="header">
        <img src={logo} />
        <div className="header-text">
          <h2 className="header-hostname">{hostname}</h2>
          <h1 className="header-label">Services Dashboard</h1>
        </div>
      </div>
    );
}
