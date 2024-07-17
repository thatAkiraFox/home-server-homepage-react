import {useEffect, useState} from "react";
import GroupContainer from "./components/GroupContainer";
import {GroupInterface} from "./Interfaces.ts";
import {toast} from "sonner";

export default function Main() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/config/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => {
                toast.error("Error fetching services.json", {
                    duration: Infinity,
                    action: {
                        label: "Read the docs",
                        onClick: () => location.href = "https://katb.in/ayufihesufu"
                    }
                });
                console.log(err);
            });
    }, []);

    return (
        <main>
            {services.map((group: GroupInterface) => (
                <GroupContainer
                    group={group}
                    key={group.name}
                />
            ))}
        </main>
    );
}
