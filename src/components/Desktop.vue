<script setup lang="ts">
    import "xp.css/dist/XP.css";
    import { useWinBox } from 'vue-winbox';
    import Shortcut from './Shortcut.vue';
    import Window from "./Window.vue";
    import type { Window as WindowType } from "../interfaces/Window";
    import type { Shortcut as ShortcutType } from "../interfaces/Shortcut";
import { Ref, ref } from "vue";

    const createWindow = useWinBox();


    const shortcutList: Ref<ShortcutType>[] = [
        ref({
            id: 1,
            text: "About",
            icon: "Favorites",
            window: {
                title: "About",
                text: "test",
                visible: false
            }
        }),
        ref({
            id: 2,
            text: "GOAT_ENGINE",
            icon: "Game\ Controller",
            window: {
                title: "GOAT_ENGINE",
                visible: false,
                text: "henlo",
                url: "https://github.com/CGOAT24/GOAT_ENGINE"
            }
        })
    ];

    const parseText = (value: string) => {
        if(value.length > 10) {
            return value.slice(0, 10) + "...";
        }
        return value;
    }

    const handleClick = (x: ShortcutType) => {
        generateWindow(x.window);
    }

    const generateWindow = (x: WindowType) => {
        x.visible = !x.visible;
    }
</script>
<template>
    <div id="container">
        <div v-for="x in shortcutList">
            <Shortcut :id="`shortcut-${x.value.id}`" :text="parseText(x.value.text)" :icon="x.value.icon" @Click="handleClick(x.value)"/>
            <Window :data="x.value.window" v-if="x.value.window.visible"/>
        </div>
    </div>
</template>

<style scoped>
    #container {
        aspect-ratio: 4/3;
        background-image: url("/xp-wallpaper.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 5px;
        color: white;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        gap: 30px;
    }
</style>