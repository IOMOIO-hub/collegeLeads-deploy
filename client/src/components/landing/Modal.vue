<script>
export default {
	name: 'Modal',
	props: {
		isOpen: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		},
		width: {
			type: [String, Number],
			default: '600px'
		},
		height: {
			type: [String, Number],
			default: 'auto'
		},
		closeOnOutsideClick: {
			type: Boolean,
			default: true
		},
		closeOnEsc: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		containerStyle() {
			return {
				width: typeof this.width === 'number' ? `${this.width}px` : this.width,
				height: typeof this.height === 'number' ? `${this.height}px` : this.height
			}
		}
	},
	methods: {
		closeModal() {
			this.$emit('update:isOpen', false)
			this.$emit('close')
		},
		handleOutsideClick() {
			if (this.closeOnOutsideClick) {
				this.closeModal()
			}
		},
		handleKeydown(e) {
			if (this.isOpen && this.closeOnEsc && e.key === 'Escape') {
				this.closeModal()
			}
		}
	},
	mounted() {
		document.addEventListener('keydown', this.handleKeydown)
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.handleKeydown)
	}
}
</script>

<template>
	<transition name="modal">
		<div v-if="isOpen" class="modal-overlay" @click.self="handleOutsideClick">
			<div class="modal-container" :style="containerStyle">
				<div class="modal-header" v-if="$slots.header || title">
					<slot name="header">
						<h3>{{ title }}</h3>
					</slot>
					<button class="modal-close" @click="closeModal" aria-label="Close modal">
						&times;
					</button>
				</div>

				<div class="modal-content">
					<slot></slot>
				</div>

				<div class="modal-footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>


<style lang="scss" scoped>
.modal-overlay {
  max-width: 100%;
	position: fixed;
	top: 0; left: 0; right: 0; bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	backdrop-filter: blur(2px);
}

.modal-container {
	background-color: white;
	border-radius: 0.5rem ;
	max-width: 98%;
	max-height: 90vh;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
}

.modal-header {
	padding: 16px 20px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	h3 {
		margin: 0;
		font-size: 1.25rem;
	}
}

.modal-close {
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0 8px;
	color: #666;

	&:hover {
		color: #333;
	}
}

.modal-content {
	flex-grow: 1;
}

.modal-footer {
	padding: 16px 20px;
	border-top: 1px solid #eee;
	display: flex;
	justify-content: center;
	gap: 10px;
}

/* Анимации */
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.3s ease;
}

.modal-enter,
.modal-leave-to {
	opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
	transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter .modal-container,
.modal-leave-to .modal-container {
	transform: translateY(-20px);
	opacity: 0;
}
</style>