<script>
import "../../assets/styles/houseComponent.css";
import House from "../houses/House.js";



export default {

  props: {
    house: {
      type: House,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getImage(){
      return this.house.img;
    }
  }
};
</script>

<template>
  <div class="house-card col-12 col-md-6 col-lg-6 col-xl-4">
    <div class="card-size">

    <div class="house-img">
      <img class="img" :src='getImage()' :alt="house.name">
    </div>
    <div class="house-title">
      {{ house.name }}
    </div>
    <div class="house-hr"></div>
    <div class="house-ocupation">Ocupation : {{ house.ocupation }}</div>
    <div class="house-price">Price : {{ house.price }}</div>
    <div v-if="false" class="house-btn-reserve">Reserve</div>
      </div>
  </div>
</template>
