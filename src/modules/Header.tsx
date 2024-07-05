import {SettingsInterface} from "./Interfaces.ts";

export default function Header({hostname, logo}: SettingsInterface) {
    const useGenericLogo = () => {
        return logo === null || logo === '' ? '/generic-header.png' : logo
    }

    return (
        <div className="header">
            <img alt="Button logo" src={useGenericLogo()}
                 className="header-logo"/>
            <div className="header-text">
                <span className="header-hostname">{hostname}</span>
                <span className="header-label">Services Dashboard</span>
            </div>
        </div>
    );
}
