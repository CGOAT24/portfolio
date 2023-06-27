<script setup lang="ts">
	import "tuicss";
	import { ref } from "vue";

	document.addEventListener("keydown", (event) => {
		switch(event.key) {
			case "ArrowLeft":
			case "h":
				if(loading.value) {
					break;
				}
				if(currentTab.value > 1) {
					loading.value = true;
					setTimeout(() => {
						loading.value = false;
						--currentTab.value;
					}, 500);
				}
				break;
			case "ArrowRight":
			case "l":
				if(loading.value) {
					break;
				}
				if(currentTab.value < 3) {
					loading.value = true;
					setTimeout(() => {
						loading.value = false;
						++currentTab.value;
					}, 500);
				}
				break;
			case "Enter":
				viewRepo(currentTab.value);
				break;
		}
	});

	const viewRepo = (id: number) => {
		let win;
		switch (id) {
			case 1:
				win = window.open("https://github.com/CGOAT24", "_blank");
				if(win) {
					win.focus;
				}
				break;
			case 2:
				win = window.open("https://github.com/CGOAT24/portfolio", "_blank");
				if(win) {
					win.focus();
				}
				break;
			case 3:
				win = window.open("https://github.com/CGOAT24/GOAT_ENGINE", "_blank");
				if(win) {
					win.focus();
				}
				break;
		}
	}
	const currentTab = ref(1);
	const loading = ref(false);
</script>
<template>
	<div id="loader" class="tui-progress-bar" v-if="loading">
		<span class="tui-indeterminate"></span>
	</div>
	<div class="tui-tabs">
		<ul>
			<li><a :class="{'tui-tab': true, 'active': currentTab === 1}" data-tab-content="tab-1-content">About</a></li>
			<li><a :class="{'tui-tab': true, 'active': currentTab === 2}" data-tab-content="tab-2-content">Portfolio</a></li>
			<li><a :class="{'tui-tab': true, 'active': currentTab === 3}" data-tab-content="tab-2-content">GOAT_ENGINE</a></li>
		</ul>
	</div>
	<div id="body" class="tui-bg-blue-black white-168-text">
		<div v-if="currentTab === 1">
			Hey! Welcome to my portfolio. I'm Chad Gauthier. I'm currently a student at the University of Sherbrooke.
		</div>
		<div v-else-if="currentTab === 2">

		</div>
		<div v-else-if="currentTab === 3">
			GOAT_ENGINE is a 2D game engine made with C++ developped as an end-of-DEC project at the Cégep of Trois-Rivières.
		</div>
	</div>
	<div class="tui-statusbar">
		<ul>
			<li><span class="red-168-text">H</span> <span class="red-168-text">&#8592;</span> Left</li>
			<span class="tui-statusbar-divider"/>
			<li><span class="red-168-text">L</span> <span class="red-168-text">&#8594;</span> Right</li>
			<span class="tui-statusbar-divider"/>
			<li><span class="red-168-text">ENTER</span> View more</li>

		</ul>
	</div>
</template>
<style scoped>
	#body {
		height: 95vh;
		padding: 15px;
	}

	#loader {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>