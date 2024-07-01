import settings from "../../settings.json";

function setHostname() {
  return settings.hostname === null || settings.hostname === ""
    ? null
    : settings.hostname;
}

function setLogo() {
  return settings.logo === null || settings.logo === ""
    ? "/generic-logo.png"
    : settings.logo;
}

export default function Header() {
  const hostname = setHostname();
  const logo = setLogo();

  return (
    <div className="header">
      <img src={logo} className="header-logo" />
      <div className="header-text">
        <span className="header-hostname">{hostname}</span>
        <span className="header-label">Services Dashboard</span>
      </div>
    </div>
  );
}
