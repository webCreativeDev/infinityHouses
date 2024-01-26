<script>
import "../assets/styles/houses.css";
import House from "../components/houses/House";
import HouseComponent from "../components/houses/HouseComponent.vue";
import family from "@/assets/imgs/vila2.jpeg"
import natural from "@/assets/imgs/quarto.jpg"
import gold from "@/assets/imgs/gold_house1.jpeg"
import silver from "@/assets/imgs/silver_house.jpeg"
import copper from "@/assets/imgs/cooper.jpeg"



export default {
  data() {
    return {
      houses: [
        new House("Gold House", "2", "90€",gold),
        new House("Copper House", "2", "90€",copper),
        new House("Silver House", "2", "90€",silver),
        new House("Natural House", "2", "90€",natural),
        new House("Family House", "4", "140€",family),

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
    <HouseComponent v-for="(classHouse,index) in houses" :house="classHouse" :index="index" />
  </div>
</template>
