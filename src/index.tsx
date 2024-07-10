import "./index.css";
import Main from "./modules/Main";
import Header from "./modules/Header";
import {useEffect, useState} from "react";
import {SettingsInterface} from "./modules/Interfaces.ts";
import {toast, Toaster} from "sonner";

function setPageTitle(hostname: string | null) {
    hostname == null || hostname == ""
        ? (document.title = "Services Dashboard")
        : (document.title = hostname + " | Services Dashboard");
}

export default function Index() {
    const [settings, setSettings] = useState<SettingsInterface>({
        hostname: null,
        logo: null
    });

    useEffect(() => {
        fetch('/config/settings.json')
            .then(res => res.json())
            .then(data => setSettings(data))
            .catch(err => {
                toast.error("Error fetching settings.json", {
                    duration: Infinity,
                    action: {
                        label: "Read the docs",
                        onClick: () => location.href = "https://katb.in/ayufihesufu"
                    }
                });
                console.log(err);
            });
    }, []);

    setPageTitle(settings.hostname);

    return (
        <>
            <Toaster richColors position={"top-right"} toastOptions={{
                style: {
                    borderRadius: "20px"
                },
                actionButtonStyle: {
                    borderRadius: "20px"
                }
            }}/>
            <Header settings={settings}/>
            <Main/>
        </>
    );
}
