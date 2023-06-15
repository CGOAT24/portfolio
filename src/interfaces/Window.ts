import type { Ref } from "vue"

export interface WindowConfig {
    title: string | undefined,
    class: string[],
    x: string,
    y: string
}

export interface Window {
    body: string,
    visible: boolean,
    options: WindowConfig,
    ref: Ref
}