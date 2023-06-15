<script setup lang="ts">
    import "xp.css/dist/XP.css";
    import { useWinBox } from 'vue-winbox';
    import Shortcut from './Shortcut.vue';
    import type { Window as WindowType } from "../interfaces/Window";
    import type { Shortcut as ShortcutType } from "../interfaces/Shortcut";

    const createWindow = useWinBox();

    const shortcutList: ShortcutType[] = [
        {
            text: "About",
            icon: "Favorites",
            window: {
                title: "About",
                body: "test",
            }
        },
        {
            text: "GOAT_ENGINE",
            icon: "Game_Controller",
            window: {
                title: "GOAT_ENGINE",
                body: "henlo",
            }
        }
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
        const winbox = createWindow({
            title: x.title,
            class: ["no-header", "no-shadow"],
            x: "center",
            y: "center"
        }).setBackground("rgba(0, 0, 0, 0)");

        const element = document.getElementById(winbox.id);
        if(!element) { 
            return; 
        }

        const body = element.querySelector(".wb-body");
        if(!body) { 
            return; 
        }
        
        body.style.backgroundColor = "rgba(0, 0, 0, 0)";
        body.innerHTML = createWindowBody(x, winbox);
    }

    //TODO: Close button should close the window
    const createWindowBody = (x: WindowType, winbox: Object) => {
        return `
        <div class="window" style="width: 300px; height: 300px; background-color: #fff;">
            <div class="title-bar">
                <div class="title-bar-text">${x.title}</div>
                <div class="title-bar-controls">
                    <button aria-label="Close"/>
                </div>
            </div>
            <div class="window-body">
                <p>${x.body}</p>
            </div>
        </div>
        `;
    }
</script>
<template>
    <div id="desktop-container">
        <div v-for="x in shortcutList">
            <Shortcut :text="parseText(x.text)" :icon="x.icon" @Click="handleClick(x)"/>
        </div>
    </div>
</template>

<style scoped>
    #desktop-container {
        aspect-ratio: 4/3;
        background-image: url("/portfolio/xp-wallpaper.png");
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