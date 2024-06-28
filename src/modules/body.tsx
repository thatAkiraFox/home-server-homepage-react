import { ReactNode } from "react";
import services from "../../services.json";

/**
 * @throws Error on empty strings for 'logo' or 'url'
 */
function Button({
  name,
  description,
  url,
  logo,
}: {
  name: string;
  description: string;
  url: string;
  logo: string;
}) {
  if (url === "" || url === null) {
    return (
      <a className="button" href={url} target="_blank">
        <img className="button-logo" src={logo} />
        <div className="button-name-description">
          {name}
          <label className="error">Button URL missing!</label>
        </div>
      </a>
    );
  }

  return (
    <a className="button" href={url} target="_blank">
      <img className="button-logo" src={logo} />
      <div className="button-name-description">
        {name}
        {description}
      </div>
    </a>
  );
}

function GroupContainer({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="container">
        <h1>{name}</h1>
        {children}
      </div>
    </>
  );
}

/**
 * This needs a bit of explaination.
 *
 * The 'Array.map' method allows to execute a function on each element of an
 * array, and our 'services.json' file is basically a huge array of app groups,
 * with each group containing a name and an array of apps.
 *
 * So, first we execute 'map' on the top-level array to iterate through the groups
 * and create the HTML containers for them and, while doing that, we execute
 * 'map' on the inner apps array to create the various buttons for each app.
 */
export default function Body() {
  return services.map((group) => (
    <GroupContainer
      name={group.name}
      key={group.name}
      children={group.apps.map((app) => (
        <Button
          name={app.name}
          key={app.name}
          description={app.description}
          url={app.url}
          logo={app.logo}
        />
      ))}
    />
  ));
}
