<template>
  <div class="header">
    <router-link to="/">
      <img src="./../assets/logo.png" />
      Accueil
    </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "header",
})
export default class Header extends Vue {}
</script>
