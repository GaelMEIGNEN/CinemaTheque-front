<template>
  <div class="actors-list">
    <ul>
      <li v-for="actor in actorsList" v-bind:key="actor.id">
        <div class="actor">
          <!-- <a @click="redirectToActorInformations" v-bind:actor="actor">{{ -->
          {{ actor.firstName + " " + actor.lastName }}
          <!-- }}</a> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Actor from "../types/Actor";

@Options({
  name: "actorList",
  props: {
    actorsList: [] as Actor[],
  },
})
export default class ActorsList extends Vue {}
</script>
