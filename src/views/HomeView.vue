<script>
import "bootstrap";
import "../assets/styles/home.css";
import ArrowUpSvg from "../components/common/ArrowUpSvg.vue";
import ArrowDownSvg from "../components/common/ArrowDownSvg.vue";
import Calendar from "../components/datepicker/calendar.vue";
import { disableKeys } from "../scripts/disbleInputNumberKeys";
import casa from '../assets/imgs/quarto.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      guestsNumber: 1,
      showCalendar: false,
      casa: casa,
    };
  },
  methods: {
    addGuests() {
      this.guestsNumber += this.guestsNumber < 12 ? 1 : 0;
    },
    removeGuests() {
      this.guestsNumber += 1 < this.guestsNumber ? -1 : 0;
    },
    updateGuests(event) {
      if (parseInt(event.target.value) > 12) {
        event.target.value = 12;
        event.preventDefault();
      }
      this.guestsNumber = parseInt(event.target.value);
    },
    formattedNumber(number) {
      return ("0" + number).slice(-2);
    },
    openCalendar() {
      this.showCalendar = !this.showCalendar;
    },
    navigateToHouses() {
      this.$router.push("/houses");
    },
  },
  components: {
    ArrowUpSvg,
    ArrowDownSvg,
    Calendar,
  },
  mounted() {
    disableKeys()
    var elem = document.querySelector(".img-fluid");
    elem.style.filter = "invert(1)"
    var lines = [...document.querySelectorAll(".line")];
    lines.map((e) => e.style.background = "white")

  },
  unmounted() {
    var elem = document.querySelector(".img-fluid");
    elem.style.filter = "invert(0)"
    var lines = [...document.querySelectorAll(".line")];
    lines.map((e) => e.style.background = "#2D362B")

  }

};
</script>

<template>
  <main>
    <div class="casaimg">
      <img :src="casa">
    </div>
    <div class="text-center w-100 textStyle">
      <div>Tourism Houses</div>
    </div>
    <div class="w-25 mx-auto mt-30">
      <div class="hr"></div>
    </div>
    <div class="h1">
      <div>
        ENJOY A LUXURY <br />
        EXPERIENCE
      </div>
    </div>
    <div class="housesBox" @click="navigateToHouses">
      <div class="house">Houses</div>
    </div>
    <div class="datePicker" v-show="showCalendar">
      <Calendar />
    </div>
    <div class="row p-3 mx-auto justify-content-center width">
      <div class="col-10 m-3 m-lg-5 col-xl-3 m-xl-0 justify-content-center back">
        <div class="row justify-content-center">
          <div class="col text-center row-titles">check-in</div>
        </div>
        <div class="row">
          <div class="col-6 text-center text-number">01</div>
          <div class="col-6">
            <div class="row">
              <div class="text-center">Jun</div>
            </div>
            <div class="row click">
              <ArrowDownSvg />
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 m-3 m-lg-5  col-xl-3 m-xl-0 back">
        <div class="row justify-content-center row-titles">
          <div class="col text-center">check-Out</div>
        </div>
        <div class="row">
          <div class="col-6 text-center text-number">02</div>
          <div class="col-6">
            <div class="row">
              <div class="text-center">Jun</div>
            </div>
            <div class="row click" @click="openCalendar">
              <ArrowDownSvg />
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 m-3 m-lg-5 col-xl-3 m-xl-0 back">
        <div class="row justify-content-center">
          <div class="col text-center row-titles">Guests</div>
        </div>
        <div class="row">
          <div class="col-6 text-center text-number">
            <input class="numberOfGuests" id="number" type="number" :max="12" :min="1" pattern="[0-9]{4}"
              v-on:change="updateGuests" maxlength="2" :value="formattedNumber(this.guestsNumber)" autocomplete="off" />
          </div>
          <div class="col-6">
            <div class="row click">
              <ArrowUpSvg @click="addGuests" />
            </div>
            <div class="row click" @click="removeGuests">
              <ArrowDownSvg />
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 col-xl-3 m-xl-0 m-3 m-lg-5 check-availability justify-content-center">
        <div class="text-c">
          Check <br />
          Availability
        </div>
      </div>
    </div>
  </main>
</template>
