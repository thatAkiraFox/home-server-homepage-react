export interface GroupInterface {
    name: string | null;
    apps: AppInterface[];
}

export interface AppInterface {
    name: string | null;
    description: string | null;
    url: string | null;
    logo: string | null;

    [index: string]: string | null;
}

export interface SettingsInterface {
    hostname: string | null;
    logo: string | null;
}
