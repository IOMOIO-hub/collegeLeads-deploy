<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <section class="section">
    <h1 class="section__title">{{ title }}</h1>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">

.section {
  width: 100%;
  padding: 5rem 0;

  &__title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
}

</style>