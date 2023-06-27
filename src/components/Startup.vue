<script setup lang="ts">
	import "tuicss";

	let loadingComplete = false;

	document.addEventListener("keydown", (event) => {
		if(event.key === "Enter" && loadingComplete) {
			window.location.href = "/portfolio/showcase";
		}
	});

	const showSection = (num: number) => {
		setTimeout(() => {
			const element = document.getElementById("session-" + num);
			if(element) {
				element.style.display = "block";
			}
			if(num < 6) {
				showSection(++num);
			}
			else {
				loadingComplete = true;
			}
		}, Math.floor(Math.random() * (3000 - 800 + 1)) + 800);
	}
	setTimeout(() => showSection(1), 1000);
</script>

<template>
	<div class="tui-screen black white-text" style="padding: 2px">
		<img src="/portfolio/pcstartup1.png" style="float: left; width: 40px; height: 40px;" />
		<img src="/portfolio/pcstartup2.png" style="float: right; width: 200px; height: 150px;" />
		<div style="margin-top: 4px"></div>
		Award Medallion BIOS v6.0, An Energy Star Ally<br>
		Copyright (C) 1984-2001, Award Software, Inc.<br><br>
		ASUS P4T533-C ACPI BIOS Revision 1007 Beta 001<br><br>
		Intel(R) Pentium(R) 4 2800 MHz Processor<br>
		Memory Test : &nbsp;&nbsp; 262144K OK<br><br>
		<div id="session-1" style="display: none">
			Award Plug and Play BIOS Extension v1.0A<br>
			Initialize Plug and Play Cards...<br>
			PNP init Completed<br><br>
		</div>
		<div id="session-2" style="display: none">
			Detecting Primary Master .....: MAXTOR 6L040J2<br>
		</div>
		<div id="session-3" style="display: none">
			Detecting Primary Slave ......: ASUS CD-S520/A<br>
		</div>
		<div id="session-4" style="display: none">
			Detecting Secondary Master ...: Skip<br>
			Detecting Secondaty Slave ....: None
		</div>
		<div id="session-5" style="display: none">
			<br>Everything is in order. Ready to start.
		</div>
		<div id="session-6" style="display: none">
			<ul>
				<li style="margin-left: 0">Press <b>ENTER</b> to enter WEBSITE
				</li>
			</ul>
		</div>
	</div>
</template>