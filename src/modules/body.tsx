import { ReactNode } from "react";
import services from "../../services.json";

/**
 * @throws Error on empty strings for 'logo' or 'url'
 */
function Button({
  name,
  url,
  logo,
}: {
  name: string;
  url: string;
  logo: string;
}) {
  if (url === "" || logo === "") {
    throw new Error(
      "Make sure that URL and LOGO are NOT NULL OR EMPTY STRINGS"
    );
  }
  return (
    <div className="button">
      <img src={logo} />
      <a href={url}>{name}</a>
    </div>
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
  return services.map((service) => (
    <GroupContainer
      name={service.name}
      key={service.name}
      children={service.apps.map((app) => (
        <Button name={app.name} key={app.name} url={app.url} logo={app.logo} />
      ))}
    />
  ));
}
