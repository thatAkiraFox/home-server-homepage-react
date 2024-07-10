import {SettingsInterface} from "./Interfaces.ts";

export default function Header({settings}: { settings: SettingsInterface }) {
    const useGenericLogo = () => {
        return settings.logo === null || settings.logo === ''
            ? '/generic-logos/generic-header.png'
            : settings.logo
    }

    return (
        <div className="header">
            <img alt="Button logo" src={useGenericLogo()}
                 className="header-logo"/>
            <div className="header-text">
                <span className="header-hostname">{settings.hostname}</span>
                <span className="header-label">Services Dashboard</span>
            </div>
        </div>
    );
}
