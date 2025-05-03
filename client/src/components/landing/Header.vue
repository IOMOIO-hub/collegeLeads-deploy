<script>
export default {
  name: "Header",
  emits: ['openModal'],
}
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo.png" alt="Логотип" class="header__logo">
      <slot></slot>
    </div>

    <button class="header__button" @click="$emit('openModal')">
      Поступить
    </button>
  </header>
</template>

<style lang="scss">
@import "@/assets/fonts/logoRegular.css";

.header {
  width: 100%;
  height: 6rem;

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

      &.shorten {
        display: none;
      }
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

@media screen and (max-width: 740px) {
  .header__button {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .header__button {
    display: block;
  }
  .header__logo .column {
    display: none;

    &.shorten {
      display: flex;
    }
  }
}

</style>