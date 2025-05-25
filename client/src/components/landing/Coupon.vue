<script>
import request from "@/request";

export default {
  name: "Coupon",
  data() {
    return {
      fio: '',
      tel: ''
    }
  },
  emits: ['openPolicy', 'submit'],
  methods: {
    async lead() {
      this.$emit('submit')
      await request('lead/new', {name: this.fio, telegram: this.tel, origin: this.$route.name + ' Из купона'})
    }
  }
}
</script>

<template>
  <div class="coupon">
    <h1>Получи скидку <span>5%</span><br> на обучение</h1>

    <input type="text" v-model="fio" placeholder="ФИО">
    <input type="tel" v-model="tel" placeholder="Телефон">
    <p class="label">Промокод</p>
    <input type="text" placeholder="Промокод" disabled value="6G2964RYBMR4BT9G">
    <div class="form__agreement">
      <input type="checkbox" checked @click.prevent>
      <p>Отправляя заявку, вы соглашаетесь с <a @click="$emit('openPolicy')" style="cursor: pointer">политикой конфиденциальности</a> и условиями обработки персональных данных</p>
      <!-- , а также даёте согласие на получение информационных рассылок-->
    </div>
    <button @click="lead">Получить</button>
  </div>
</template>

<style scoped lang="scss">

.coupon {
  width: 100%;
  background-color: #eee;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    color: #001B36;
    line-height: 120%;
    margin-bottom: 2rem;

    span {
      padding: 0 0.5rem;
      color: #fff;
      background-color: #004e8a;
      border-radius: 0.375rem ;
    }
  }

  .promo {
    width: fit-content;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.25rem;
    background-color: #fff;
    color: #000;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    margin-right: auto;
  }
  .subpromo {
    color: #fff;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 2rem;
  }

  .label {
    width: 100%;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
  }
  input {
    width: 100%;
    height: 2.5rem;
    line-height: 2rem;
    font-size: 1rem;
    background-color: #fff;
    color: #000;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    margin-bottom: 0.75rem;

    &:disabled {
      color: #0004;
    }
  }

  button {
    width: max-content;
    height: 2.5rem;
    background-color: #004e8a;
    color: #fff;
    padding: 0 1.5rem;
    border-radius: 0.25rem  ;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
  }
}

.form__agreement {
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

</style>