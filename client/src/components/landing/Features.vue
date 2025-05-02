<script>
export default {
  name: "Features",
  props: {
    features: {
      type: Array,
      required: true
    }
  },
}
</script>

<template>
  <section>
    <a class="feature" v-for="feature in features" :href="feature.link">
      <img class="feature__icon" :src="require(`@/assets/icons/${feature.icon}.svg`)" :alt="feature.icon"/>
      <h3 class="feature__title">{{ feature.title }}</h3>
      <p class="feature__text">{{ feature.text }}</p>
    </a>
  </section>
</template>

<style scoped lang="scss">

section {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 4rem 3rem;

  .feature {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 4rem;

    position: relative;
    &__icon {
      position: absolute;
      top: 0; left: 0;
      width: 3rem; height: 3rem;
    }

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #000;
      line-height: 120%;
    }

    &__text {
      font-size: 1rem;
      font-weight: 400;
      color: #666;
      line-height: 120%;
    }
  }
}

</style>