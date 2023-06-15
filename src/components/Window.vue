<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    });

    const emit = defineEmits({
        "close": null
    });

    const closeEvent = () => {
        emit("close");
    }
    
</script>
<template>
    <div class="window" style="width: 100%; height: 100%; overflow-y: hidden;">
            <div class="title-bar">
                <div class="title-bar-text">{{ props.title }}</div>
                <div class="title-bar-controls">
                    <button aria-label="Close" @click="closeEvent"/>
                </div>
            </div>
            <div class="window-body">
                <p>{{ props.body }}</p>
            </div>
        </div>
</template>