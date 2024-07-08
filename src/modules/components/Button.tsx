import {AppInterface} from "../Interfaces.ts";

/**
 * Create an <img> HTML element that conditionally picks a generic icon when
 * the user doesn't provide a service-specific icon
 */
function ButtonImg({logo}: { logo: string | null }) {
    if (logo === "" || logo === null) {
        return <img className="button-logo"
                    src="/generic-logos/generic-button.png"/>;
    } else {
        return <img className="button-logo" src={logo}/>;
    }
}

/**
 * Detect if the given 'app' object has null or empty properties (except logo)
 */
function detectConfigErrors(app: AppInterface) {
    for (const property in app) {
        if (property != "logo" && (app[property] === null || app[property] === ""))
            return true;
    }
    return false;
}

function buttonConstructor(app: AppInterface) {
    return (
        <a className="button" href={"//" + app.url} target="_blank">
            <ButtonImg logo={app.logo}/>
            <div className="button-text">
                <span className="button-name">{app.name}</span>
                <span className="button-description">{app.description}</span>
            </div>
        </a>
    );
}

function errorButtonConstructor() {
    return (
        <a
            className="button error-button"
            href="https://katb.in/ayufihesufu"
            target="_blank"
        >
            <span className="error-title">Configuration error detected!</span>
            <span className="error-description">
        Check your configuration or click here to read the documentation
      </span>
        </a>
    );
}

/**
 * If any configuration error is detected then create an error button, otherwise
 * create a normal button
 */
export default function Button({app}: { app: AppInterface }) {
    return detectConfigErrors(app)
        ? errorButtonConstructor()
        : buttonConstructor(app);
}
