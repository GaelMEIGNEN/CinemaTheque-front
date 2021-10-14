<template>
  <footer>
    Facebook link, Twitter link, LinkedIn link, Made by Gaël Meignen
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Footer",
})
export default class Footer extends Vue {}
</script>
