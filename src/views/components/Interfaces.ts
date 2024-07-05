export interface GroupInterface {
  name: string | null;
  apps: AppInterface[];
}

export interface AppInterface {
  [index: string]: string | null;
  name: string | null;
  description: string | null;
  url: string | null;
  logo: string | null;
}
