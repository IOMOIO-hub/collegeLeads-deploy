<script>
import request from "@/request"
import Modal from "@/components/Modal.vue"

export default {
	name: 'LandingView',
	components: {
		Modal
	},
	data() {
		return {
			isModalOpen: false,
			name: '',
			telegram: '',
			agreement: true,
		}
	},
	methods: {
		async lead() {
			await request('lead/new', {name: this.name, telegram: this.telegram})
		}
	}
}
</script>

<template>
	<header class="header">
		<div class="header__logo">
			<img src="@/assets/logo.png" alt="Логотип" class="header__logo">
			<div class="column">
				<span class="title">Уральский колледж экономики и права</span>
				<span class="subtitle">Автономная некоммерческая организация профессионального образования</span>
			</div>
		</div>

		<button class="header__button" @click="isModalOpen = true">
			Поступить
		</button>
	</header>

	<div class="banner">
		<div class="banner__back"></div>
		<img src="@/assets/banner.png" alt="Студент на пуфе" class="banner__image">
		<h1>Колледж</h1>
		<p>Поступи в колледж <b>без ЕГЭ и ОГЭ</b><br>Дистанционно!</p>
		<div class="banner__buttons">
			<button @click="isModalOpen = true">Подать заявку</button>
<!--			<button>Выбрать направление</button>-->
		</div>
	</div>

	<Modal
		v-model:isOpen="isModalOpen"
		title="Получить консультацию"
		width="450px"
	>
		<div class="form">
			<p>Ваше имя</p>
			<input type="text" v-model="name" placeholder="Имя" class="form__input">
			<p>Телеграм</p>
			<input type="tel" v-model="telegram" placeholder="@username" class="form__input">
			<span>Если вас нет в телеграм, оставьте номер телефона</span>
			<div class="form__agreement">
				<input type="checkbox" v-model="agreement">
				<p>Отправляя заявку, вы соглашаетесь с <a>политикой конфиденциальности</a> и условиями обработки персональных данных, а также даёте согласие на получение информационных рассылок</p>
				</div>
		</div>

		<template v-slot:footer>
			<button @click="lead" class="borderButton">Получить</button>
		</template>
	</Modal>
</template>

<style scoped lang="scss">
@import "@/assets/fonts/logoRegular.css";

.header {
	width: 100%; height: 6rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	&__logo {
		height: 3rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;

		img {
			filter: invert(1);
		}

		.column {
			display: flex;
			flex-direction: column;
		}

		.title {
			font-family: "LogoRegular", sans-serif;
			white-space: nowrap;
			font-size: 2rem;
		}
		.subtitle {
			font-family: "LogoRegular", sans-serif;
			white-space: nowrap;
			font-size: 1rem;
		}
	}

	&__button {
		height: 2.5rem;
		padding: 0 1rem;
		line-height: 2.25rem;
		color: var(--blue);
		font-size: 1rem;
		font-weight: 600;
		border: var(--blue) solid 0.125rem;
		background-color: #fff;

		transition: 0.1s;
		&:hover {
			background-color: var(--blue);
			color: #fff;
		}
	}
}

.banner {
	width: calc(100% - 1rem);
	height: 24rem;
	margin: 4rem 0;
	padding: 3rem 4rem;
	border: #121212 solid 1px;
	background-color: #f2f2f2;

	h1 {
		font-size: 4rem;
		font-weight: 600;
	}

	p {
		font-size: 2rem;
		font-weight: 400;
		line-height: 150%;
		padding: 1rem 0;
	}

	position: relative;
	&__image {
		position: absolute;
		right: -5%;
		top: -20%;
		height: 150%;
	}

	&__buttons {
		height: 3rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin-top: 2rem;

		button {
			line-height: 2rem;
			padding: 0 1.5rem;
			font-size: 1.25rem;
			font-weight: 500;

			&:nth-of-type(1) {
				background-color: var(--blue);
				color: #fff;
			}
			&:nth-of-type(2) {
				color: var(--blue);
				border: var(--blue) solid 2px;
			}
		}
	}

	&__back {
		width: 100%; height: 100%;
		background-color: #fff;
		border: #000 solid 1px;
		position: absolute;
		right: -1rem;
		bottom: -1rem;
		z-index: -1;
	}
}

.form {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	&__input {
		width: 100%;
		height: 3rem;
		padding: 0 1rem;
		font-size: 1rem;
		border-radius: 2px;

		border: #ccc solid 1px;
	}
	& > p {
		margin-bottom: -0.5rem;
	}
	& > span {
		margin-top: -0.5rem;
		margin-bottom: 0.25rem;
		font-size: 0.75rem;
		color: #666;
	}

	&__agreement {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 0.5rem;

		input {
			width: 1.125rem; height: 1.125rem;
			border: #ccc solid 1px;
			accent-color: var(--blue);
			margin-top: 0.125rem;
		}
		p {
			width: calc(100% - 1.125rem - 0.5rem);
			font-size: 0.875rem;
			color: #666;
			line-height: 120%;
			a {
				color: var(--blue);
				opacity: 0.8;
			}
		}
	}
}

.borderButton {
	border: var(--blue) solid 2px;
	background-color: #fff;
	height: 2.5rem;
	padding: 0 2.5rem;
	font-size: 1rem;
	font-weight: 600;
	color: var(--blue);
	border-radius: 2px;

	transition: 0.1s;
	&:hover {
		background-color: var(--blue);
		color: #fff;
	}
}
</style>