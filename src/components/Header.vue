<template>
  <div class="header">
    <img src="./../assets/logo.png" />
    <a @click="redirectToHomepage">Accueil</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import router from "./../router/index";

@Options({
  name: "header",
})
export default class Header extends Vue {
  redirectToHomepage() {
    router.push("/");
  }
}
</script>
