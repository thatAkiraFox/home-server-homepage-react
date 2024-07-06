import {useEffect, useState} from "react";
import GroupContainer from "./components/GroupContainer";
import {GroupInterface} from "./Interfaces.ts";

export default function Main() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/config/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(`error while fetching services\n${err}`));
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
