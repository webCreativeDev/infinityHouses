<script>
import "../assets/styles/houses.css";
import House from "../components/houses/House";
import HouseComponent from "../components/houses/HouseComponent.vue";

export default {
  data() {
    return {
      houses: [
        new House("Family House - T3", "6", "165€"),
        new House("Kiko House - T1", "2", "75€"),
        new House("Family House - T2", "4", "140€"),
        new House("Family House - T1", "2", "80€"),
        new House("Kika House - T1", "2", "80€"),
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
  <div class="Houses">
    <HouseComponent v-for="classHouse in houses" :house="classHouse" />
  </div>
</template>
