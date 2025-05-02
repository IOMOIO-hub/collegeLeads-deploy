<script>
export default {
  name: "Banner",
  emits: ['openModal']
}
</script>

<template>
  <div class="banner">
    <div class="banner__back"></div>
    <img src="@/assets/banner.png" alt="Студент на пуфе" class="banner__image">
    <h1>Колледж</h1>
    <p>Поступи в колледж <b>без ЕГЭ</b><br>Очно, заочно, дистанционно!</p>
    <div class="banner__buttons">
      <a @click="$emit('openModal')">Подать заявку</a>
      <a href="#programs">Выбрать направление</a>
    </div>
  </div>
</template>

<style scoped lang="scss">

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
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;

    a {
      line-height: 3rem;
      padding: 0 1.5rem;
      font-size: 1.25rem;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;

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
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: #000 solid 1px;
    position: absolute;
    right: -1rem;
    bottom: -1rem;
    z-index: -1;
  }
}

@media screen and (max-width: 950px) {
  .banner__image {
    height: 120%;
    top: 10%;
  }
  .banner {
    padding: 2rem 2rem;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
}

@media screen and (max-width: 800px) {
  .banner__image {
    display: none;
  }
}

</style>