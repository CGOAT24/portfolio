<script setup lang="ts">
    import "xp.css/dist/XP.css";
    const props = defineProps({

        text: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    });
</script>
<template>
    <div id="container">
        <img 
            id="icon" 
            :src="`portfolio/icons/Windows\ XP\ Icons/${props.icon}.png`"
        />
        <div id="text">{{ props.text }}</div>
    </div>
</template>
<style scoped>
    #container {
        background: rgba(1, 1, 1, 0);
        aspect-ratio: 1;
        max-width: 75px;
    }

    #icon {
        aspect-ratio: 1;
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 75px;
    }

    #text {
        display: table;
        margin: 0 auto;
        text-shadow: 2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000,
               1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000;
    }
</style>