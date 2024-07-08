import {AppInterface} from "../Interfaces.ts";
import Button from "./Button.tsx";

export function ButtonsContainer({appList}: { appList: AppInterface[] }) {
    return (
        <div className="buttons-container">
            {appList.map((app) => (
                <Button app={app} key={app.name}/>
            ))}
        </div>
    );
}