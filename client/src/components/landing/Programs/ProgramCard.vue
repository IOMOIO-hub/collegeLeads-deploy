<script>
export default {
  name: "ProgramCard",
  props: {
    program: Object,
  },
}
</script>

<template>
  <div class="card">
    <img :src="require(`@/assets/icons/${program.icon}.svg`)" alt="Иконка программы" class="card__icon">
    <h3 class="card__title">{{ program.title }}</h3>
    <p class="card__subtitle">{{ program.subtitle }}</p>
    <div class="card__list" v-if="program.list">
      <div v-for="item in program.list">{{ item }}</div>
    </div>
    <span class="card__hint">Узнать больше →</span>
  </div>
</template>

<style scoped lang="scss">

.card {
  padding: 1.5rem 8.5rem 1.5rem 1.5rem;
  border-radius: 4px;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 120%;
    color: #000;
    margin-bottom: 0.5rem;
  }

  &__subtitle {
    font-size: 1rem;
    font-weight: 400;
    color: #666;
  }

  &__hint {
    font-size: 0.875rem;
    color: var(--blue);
    margin-top: auto;
    padding-top: 0.25rem;
  }
  cursor: pointer;
  &:hover &__hint {
    text-decoration: underline;
  }

  overflow: hidden;
  position: relative;
  &__icon {
    width: 12rem; height: 12rem;
    position: absolute;
    right: -5rem;
    top: 0;
  }

  &__list {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;

    div {
      white-space: nowrap;
      line-height: 1.5rem;
      background-color: #ffffff;
      border-radius: 4px;
      padding: 0 0.25rem;

      font-size: 0.875rem;
      font-weight: 500;
      color: #000;
    }
  }
}

</style>