
<template>
	<div class="container">
		<router-view></router-view>
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
	font-size: 16px;
}

:root {
	--blue: #004e8a;
}

.container {
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
}

</style>
