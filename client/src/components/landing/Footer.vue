<script>
export default {
  name: "Footer",
  emits: ['openPolicy'],
}
</script>

<template>
  <footer class="footer">
    <p class="footer__address">620026, г. Екатеринбург, ул. Луначарского 194, офис 412</p>
    <p class="footer__text">На правах рекламы. Данный сайт не является публичной офертой</p>
    <p class="footer__text">© 2025 Ural University of Management Economics and Law. Все права защищены</p>
    <a class="footer__policy" @click="$emit('openPolicy')">Политика конфиденциальности</a>
  </footer>
</template>

<style scoped lang="scss">

.footer {
  width: 100%;
  padding: 4rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  grid-gap: 1.5rem 3rem;

  a, p {
    font-size: 1rem;
    color: #000;
  }
  &__address {
    font-weight: 600;
  }
  &__policy {
    text-decoration: underline;
    cursor: pointer;
  }
}

</style>