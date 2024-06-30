/**
 * Create an <img> HTML element that conditionally picks a generic icon when
 * the user doesn't provide a service-specific icon
 */
function ButtonImg({ logo }: { logo: string }) {
  if (logo === "" || logo === null) {
    return <img className="button-logo" src="/public/generic-button.png" />;
  } else {
    return <img className="button-logo" src={logo} />;
  }
}

/**
 * Conditionally show a warning instead of the description if the URL is empty
 */
function ButtonDescription({
  url,
  description,
}: {
  url: string;
  description: string;
}) {
  if (url == null || url == "") {
    return <span className="error">Button URL missing!</span>;
  } else {
    return <span className="button-description">{description}</span>;
  }
}

export default function Button({
  app,
}: {
  app: {
    name: string;
    description: string;
    url: string;
    logo: string;
  };
}) {
  return (
    <a className="button" href={"//" + app.url} target="_blank">
      <ButtonImg logo={app.logo} />
      <div className="button-name-description">
        <span className="button-name">{app.name}</span>
        <ButtonDescription url={app.url} description={app.description} />
      </div>
    </a>
  );
}
