import services from "../../services.json";
import Button from "./components/Button";
import GroupContainer from "./components/GroupContainer";

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
export default function Main() {
  return (
    <main>
      {services.map((group) => (
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
      ))}
    </main>
  );
}
