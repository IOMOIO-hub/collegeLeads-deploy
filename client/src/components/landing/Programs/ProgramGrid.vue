<script>
import ProgramCard from "@/components/landing/Programs/ProgramCard.vue";

export default {
  name: "ProgramGrid",
  components: {
    ProgramCard
  },
  props: {
    programs: Array,
  }
}
</script>

<template>
  <section>
    <ProgramCard
      v-for="program in programs"
      :program="program"
    />
  </section>
</template>

<style scoped lang="scss">

section {
  width: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem 2rem;
}

</style>