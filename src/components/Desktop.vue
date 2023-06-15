<script setup lang="ts">
import "xp.css/dist/XP.css";
import { VueWinBox } from 'vue-winbox';
import Shortcut from './Shortcut.vue';
import type { Shortcut as ShortcutType } from "../interfaces/Shortcut";
import { ref, type Ref } from "vue";
import Window from "./Window.vue";

const defaultWinOptions = (title: string) => {
    return {
        title: title,
        class: ["no-shadow", "no-full", "no-min", "no-max"],
        x: "center",
        y: "center"
    }
}

const shortcutList: Ref<ShortcutType>[] = [
    ref({
        text: "About",
        icon: "Favorites",
        window: {
            body: "test",
            visible: false,
            options: defaultWinOptions("About"),
            ref: ref()
        }
    }),
    ref({
        text: "GOAT_ENGINE",
        icon: "Game_Controller",
        window: {
            body: "henlo",
            visible: false,
            options: defaultWinOptions("GOAT_ENGINE"),
            ref: ref()
        }
    })
];

const parseShortcutTitle = (value: string) => {
    if (value.length > 10) {
        return value.slice(0, 10) + "...";
    }
    return value;
}

const showWindow = (x: Ref<ShortcutType>) => {
    //x.value.window.ref.value.winbox.initialize();
    x.value.window.visible = true;
}

const closeWindow = (x: Ref<ShortcutType>) => {
    x.value.window.visible = false;
}

const destroyWindow = (x: Ref<ShortcutType>) => {
    closeWindow(x);
    x.value.window.ref.value.winbox.close();
}
</script>
<template>
    <div id="desktop-container">
        <div v-for="x in shortcutList" v-bind:key="x.value.text">
            <Shortcut :text="parseShortcutTitle(x.value.text)" :icon="x.value.icon" @Click="showWindow(x)" />
            <VueWinBox v-if="x.value.window.visible" :ref="x.value.window.ref" :options="x.value.window.options"
                @close="closeWindow(x)">
                <Window style="overflow-y: hidden;" :title="x.value.window.options.title ?? ''" :body="x.value.window.body"
                    @close="destroyWindow(x)" />
            </VueWinBox>
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
    flex-direction: column;
    gap: 30px;
    border-radius: 5px;
    border: 3px solid black;
    max-height: 90vh;
}
</style>