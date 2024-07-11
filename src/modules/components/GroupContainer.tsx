import {GroupInterface} from "../Interfaces.ts";
import {ButtonsContainer} from "./ButtonsContainer.tsx";

function isNameMissing(name: string | null) {
    return name === null || name === "";
}

function GroupContainerName({groupName}: { groupName: string | null }) {
    if (isNameMissing(groupName))
        return (
            <span className="group-container-name group-container-name-error">
                Group name missing!
            </span>
        );
    else return <span className="group-container-name">{groupName}</span>;
}

export default function GroupContainer({group}: { group: GroupInterface }) {
    return (
        <div className="group-container">
            <GroupContainerName groupName={group.name}/>
            <ButtonsContainer appList={group.apps} key={group.name}/>
        </div>
    );
}
