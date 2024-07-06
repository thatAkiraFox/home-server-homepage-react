import Button from "./Button";
import {AppInterface, GroupInterface} from "../Interfaces.ts";

function ButtonsContainer({appList}: { appList: AppInterface[] }) {
    return (
        <div className="buttons-container">
            {appList.map((app) => (
                <Button app={app} key={app.name}/>
            ))}
        </div>
    );
}

export default function GroupContainer({group}: { group: GroupInterface }) {
    return (
        <div className="group-container">
            <h2 className="group-container-name">{group.name}</h2>
            <ButtonsContainer appList={group.apps} key={group.name}/>
        </div>
    );
}
