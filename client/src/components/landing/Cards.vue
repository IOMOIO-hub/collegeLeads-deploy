<script>
export default {
  name: "Cards",
  props: {
    cards: Array,
  }
}
</script>

<template>
  <div class="cards">
    <div
      class="card"
      v-for="card in cards"
    >
      <img :src="require(`@/assets/images/${card.image}`)" :alt="card.title" class="card__image">
      <h3 class="card__title">{{ card.title }}</h3>
      <p class="card__subtitle">{{ card.subtitle }}</p>
      <a class="card__link" :href="card.link">Посмотреть</a>
    </div>
  </div>
</template>

<style scoped lang="scss">

.cards {
  width: 100%;
  margin: 2rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-gap: 2rem;

  .card {
    height: 14.25rem;
    background-color: #fff;
    box-shadow: 0 0 1rem #0002;
    padding: 1.5rem 2rem 1.5rem calc(1.5rem + 8rem + 1.5rem);

    display: flex;
    flex-direction: column;

    position: relative;
    &__image {
      position: absolute;
      top: 1.5rem; left: 2rem;
      width: 8rem;
    }

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #000;
      margin-bottom: 1rem;
      line-height: 120%;
    }
    &__subtitle {
      font-size: 1rem;
      font-weight: 400;
      color: #666;
      line-height: 120%;
    }

    &__link {
      height: 2.5rem; width: min-content;
      padding: 0 1rem;
      margin-top: auto;
      background-color: transparent;
      border: var(--blue) solid 2px;
      line-height: 2.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: var(--blue);

      &:hover {
        background-color: var(--blue);
        color: #fff;
      }
    }
  }
}

</style>