import "./index.css";
import Main from "./modules/Main";
import Header from "./modules/Header";
import {useEffect, useState} from "react";

function setPageTitle(hostname: string | null) {
    hostname == null || hostname == ""
        ? (document.title = "Services Dashboard")
        : (document.title = hostname + " | Services Dashboard");
}

export default function Index() {
    const [hostname, setHostname] = useState("");
    const [logo, setLogo] = useState("");

    useEffect(() => {
        fetch('/config/settings.json')
            .then(res => res.json())
            .then(data => {
                setHostname(data.hostname);
                setLogo(data.logo);
            })
            .catch(err => console.log(`error while fetching settings.json: ${err}`));
    }, []);

    setPageTitle(hostname);

    return (
        <>
            <Header hostname={hostname} logo={logo}/>
            <Main/>
        </>
    );
}
