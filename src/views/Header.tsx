import {useEffect, useState} from "react";

export default function Header() {
    const [hostname, setHostname] = useState("");
    const [logo, setLogo] = useState("");

    useEffect(() => {
        fetch('/config/settings.json')
            .then(res => res.json())
            .then(data => {
                if (!(data.hostname === null || data.hostname === "")) setHostname(data.hostname)
                if (!(data.logo === null || data.logo === "")) setLogo(data.logo)
                else setLogo("/generic-header.png")
            })
            .catch(err => console.log(`error while fetching settings.json: ${err}`));
    }, []);

    return (
        <div className="header">
            <img alt="Button logo" src={logo} className="header-logo"/>
            <div className="header-text">
                <span className="header-hostname">{hostname}</span>
                <span className="header-label">Services Dashboard</span>
            </div>
        </div>
    );
}
