<script>
import request from "@/request"

export default {
  name: "Form",
  data() {
    return {
      name: '',
      telegram: '',
    }
  },
  emits: ['openPolicy', 'submit'],
  methods: {
    async lead() {
      this.$emit('submit')
      await request('lead/new', {name: this.name, telegram: this.telegram, origin: this.$route.name})
    }
  }
}
</script>

<template>
  <div class="form">
    <p>Ваше имя</p>
    <input type="text" v-model="name" placeholder="Имя" class="form__input">
    <p>Телефон / Телеграм</p>
    <input type="text" v-model="telegram" placeholder="+7 900 000 00 00 / @username" class="form__input">
    <div class="form__agreement">
      <input type="checkbox" checked @click.prevent>
      <p>Отправляя заявку, вы соглашаетесь с <a @click="$emit('openPolicy')" style="cursor: pointer">политикой конфиденциальности</a> и условиями обработки персональных
        данных, а также даёте согласие на получение информационных рассылок</p>
    </div>
    <button @click="lead" class="borderButton">Отправить</button>
  </div>
</template>

<style scoped lang="scss">

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
      width: 1.125rem;
      height: 1.125rem;
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

  .borderButton {
    width: min-content; margin: 0 auto;
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
}

</style>