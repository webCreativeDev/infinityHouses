<template>
  <div class="row row- marg-50">
    <div class="col-12 col-xl-5 col-1">
      <div class="box green-box">
      </div>
      <div class="box image-box">
        <img class="img" src="../assets/imgs/about.jpeg" alt="">

      </div>
    </div>
    <div class="col-12 col-xl-7">
      <div class="title-about">About Us</div>
      <div class="text-about">
        <p> Overlooking the garden and the mountains, INFINITY HOUSES is located in Ponte da Barca,
         45 km from the Sanctuary of São Bento da Porta Aberta and Termas do Gerês.
         This sustainable property offers private parking on site.
         Guests enjoy river views{{ show ? '.' : '...' }}
        </p>
        
        </div>
      <div class="text-a" v-show="show">
        <p> The units are equipped with air conditioning, a flat-screen TV with cable channels, a dishwasher, a coffee machine, a shower, bathrobes and a wardrobe. With a private bathroom equipped with a hairdryer, units at the villa complex also provide free WiFi. Some rooms include a terrace. All units in the villa complex are equipped with bed linen and towels.

        </p>
        <p>If you prefer to cook in the comfort of your own home, you can make use of the kitchen facilities, which include an oven, kettle and microwave.

        </p>
        <p>  Caniçada Dam is 48 km from INFINITY HOUSES, while Braga Cathedral is 49 km away. The nearest airport is Vigo Airport, 92 km from the accommodation.


        </p>
        <p>  
        </p>
        </div>
      <div class="more-btn" @click="showMore">{{ show ? 'Read Less' : 'Read More' }}</div>
    </div>
  </div>
  <div class="interest-points">
    <div class="row-85"  :class="{ 'marg-top-0': show, 'marg-top-50': !show }">
      <div class="wrapper-interests">
        <div class="title-interests">Interest Points</div>
        <div class="interests">
          <div class="interest-card"></div>
          <div class="interest-card"></div>
          <div class="interest-card"></div>
          <div class="interest-card"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="row-85">
    <div class="activities">Activities</div>
    <div class="row-100">
      <div class="col-40">
        <ul>
          <li>Paintball</li>
          <li>Arvorism</li>
          <li>Horse ride</li>
          <li>Canoeing</li>
        </ul>
      </div>
      <div class="col-60"></div>
    </div>
  </div>
</template>

<script>
import "../assets/styles/about.css";

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
      showMore() {
            this.show = !this.show
        }
      
  },
};
</script>
