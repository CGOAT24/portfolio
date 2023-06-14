import type {Window} from "./Window"

export interface Shortcut {
    id: number,
    text: string,
    icon: string,
    window: Window
}