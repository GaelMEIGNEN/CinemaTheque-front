<template>
  <div class="header">
    <a @click="redirectToHome()">
      <img src="./../assets/logo.png" />
      Accueil
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "header",
  methods: {
    redirectToHome() {
      this.$router.go("/");
    },
  },
})
export default class Header extends Vue {}
</script>
