<script setup lang="ts">
	import "tuicss";
	import { ref } from "vue";

	document.addEventListener("keydown", (event) => {
		switch(event.key) {
			case "ArrowLeft":
			case "h":
				if(currentTab.value > 1) {
					--currentTab.value;
				}
				break;
			case "ArrowRight":
			case "l":
				if(currentTab.value <= 1) {
					++currentTab.value;
				}
				break;
		}
	});
	const currentTab = ref(1);
</script>
<template>
	<div class="tui-tabs">
		<ul>
			<li><a :class="{'tui-tab': true, 'active': currentTab === 1}" data-tab-content="tab-1-content">About</a></li>
			<li><a :class="{'tui-tab': true, 'active': currentTab === 2}" data-tab-content="tab-2-content">GOAT_ENGINE</a></li>
		</ul>
	</div>
</template>
<style scoped>

</style>