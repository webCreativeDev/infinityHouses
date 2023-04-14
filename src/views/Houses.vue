<script>
import "../assets/styles/houses.css";
import House from "../components/houses/House";
import HouseComponent from "../components/houses/HouseComponent.vue";

export default {
  data() {
    return {
      houses: [
        new House("Family House", "6", "165€"),
        new House("Gold House", "2", "75€"),
        new House("Copper House", "4", "140€"),
        new House("Silver House", "2", "80€"),
        new House("Natural House", "2", "80€"),
      ],
    };
  },
  components: {
    HouseComponent,
  },
};
</script>

<template>
<div class="page-title">
Houses
</div>
  <div class="Houses row">
    <HouseComponent v-for="classHouse in houses" :house="classHouse" />
  </div>
</template>
