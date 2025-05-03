<script>
export default {
  name: "About"
}
</script>

<template>
  <div class="about">
    <div style="display: flex; flex-direction: row">
      <p class="about__text">
        <b>Уральский Университет - Уральский институт экономики, управления и права </b>
        динамично развивающийся ВУЗ с бессрочной государственной лицензией и аккредитацией. За 33 года плодотворной работы мы накопили богатый опыт в образовательной сфере и выпустили более 13000 квалифицированных специалистов.
      </p>
      <img src="@/assets/images/logo_institute.png" alt="Логотип" class="about__logo">
    </div>
    <div class="points">
      <div
        class="point"
        v-for="point in [
            {
              number: 'от 30 000 ₽',
              subtitle: 'за семестр обучения'
            },
            {
              number: '33+',
              subtitle: 'лет в сфере обучения'
            },
            {
              number: '13 000+',
              subtitle: 'студентов УрУ-УИЭУиП'
            },
            {
              number: '39',
              subtitle: 'программ обучения'
            }
        ]"
      >
        <span class="point__number">{{ point.number }}</span>
        <span class="point__subtitle">{{ point.subtitle }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.about {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 1rem #0002;
  border-radius: 4px;
  padding: 3rem 4rem;
  margin: 2rem 0;

  &__text {
    width: 75%;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 4rem;
  }

  position: relative;
  &__logo {
    width: 14rem;
    height: 14rem;
    position: absolute;
    right: -5rem;
    top: -5rem;
  }
}

.points {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 4rem 3rem;

  .point {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    &__number {
      color: var(--blue);
      font-size: 2.5rem;
      font-weight: 600;
      white-space: nowrap;
    }
  }
}

@media screen and (max-width: 740px) {
  .about {
    padding: 3rem 2rem;

    &__text {
      font-size: 1.125rem;
    }

    &__logo {
      width: 10rem;
      height: 10rem;
      right: -3rem;
      top: -3rem;
    }
  }
}

</style>