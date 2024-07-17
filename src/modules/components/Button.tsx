import {AppInterface} from "../Interfaces.ts";

/**
 * Create an <img> HTML element that conditionally picks a generic icon when
 * the user doesn't provide a service-specific icon
 */
function ButtonImg({logo}: { logo: string | undefined }) {
    if (logo === "" || logo === null) {
        return <img className="button-logo"
                    src="/generic-logos/generic-button.png"
                    alt="button logo"/>;
    } else {
        return <img className="button-logo" src={logo} alt="button logo"/>;
    }
}

/**
 * Detect if the given 'app' object has null or empty 'name' or 'url' properties
 */
function detectConfigErrors(app: AppInterface) {
    return (app.name === null || app.name === "" || app.url === null || app.url === "")
}

function buttonConstructor(app: AppInterface) {
    return (
        <a
            className="button"
            href={app.url}
            target="_blank"
            rel="noreferrer"
        >
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
            rel="noreferrer"
        >
            <span
                className="error-button-title">Configuration error detected!</span>
            <span className="error-button-description">
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
