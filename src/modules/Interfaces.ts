export interface GroupInterface {
    name: string | null;
    apps: AppInterface[];
}

export interface AppInterface {
    name: string | undefined;
    description: string | undefined;
    url: string | undefined;
    logo: string | undefined;

    [index: string]: string | undefined;
}

export interface SettingsInterface {
    hostname: string | null;
    logo: string | null;
}
