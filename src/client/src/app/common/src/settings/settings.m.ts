export enum Theme {
	Default = "Default",
	Dark = "Dark",
	Light = "Light"
}

export enum Timezone{
	default = "Default",
	browser = "Browser",
	utc = "Utc"
}

export interface Preferences {
  theme: Theme;
	timeZone: Timezone;
	homeDashboardId: number;
}

export interface TextMessage{
	message: string;
}


