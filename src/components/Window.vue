<script setup lang="ts">
import "xp.css/dist/XP.css";
import type { Window as WindowType } from "../interfaces/Window";

const props = defineProps({
    data: {
        type: Object as () => WindowType,
        required: true
    }
});
</script>
<template>
    <div class="window">
    <div class="title-bar">
        <div class="title-bar-text">{{props.data.title}}</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
        </div>
    </div>
    <div class="window-body">
        <slot/>
    </div>
    </div>
</template>