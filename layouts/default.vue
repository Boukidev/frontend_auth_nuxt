<template>
  <div>
    <navbar />
    <div class="container">
      <br />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/layout/Header.vue";

export default {
  components: { navbar: Navbar },
};
</script>
