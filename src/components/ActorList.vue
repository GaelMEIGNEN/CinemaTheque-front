<template>
  <div class="actor-list">
    <ul>
      <li v-for="actor in actorList" v-bind:key="actor.id">
        <div class="actor">
          <!-- <a @click="redirectToActorInformations" v-bind:actor="actor">{{ -->
          <h1>{{ actor.firstName + " " + actor.lastName }}</h1>
          <!-- }}</a> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Actor } from "../classes/Actor";
// import router from "./../router/index";

@Options({
  name: "actorList",
  props: {
    actorList: [] as Actor[],
  },
})
export default class ActorList extends Vue {
  // redirectToActorInformations() {
  //   router.push("/actorInformations");
  // }
}
</script>
