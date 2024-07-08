import {GroupInterface} from "../Interfaces.ts";
import {ButtonsContainer} from "./ButtonsContainer.tsx";

function isNameMissing(name: string | null) {
    return name === null || name === "";
}

function GroupContainerName({groupName}: { groupName: string | null }) {
    if (isNameMissing(groupName))
        return (
            <h2 className="group-container-name group-container-name-error">
                Group name missing!
            </h2>
        );
    else return <h2 className="group-container-name">{groupName}</h2>;
}

export default function GroupContainer({group}: { group: GroupInterface }) {

    return (
        <div className="group-container">
            <GroupContainerName groupName={group.name}/>
            <ButtonsContainer appList={group.apps} key={group.name}/>
        </div>
    );
}
