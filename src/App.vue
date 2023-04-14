<script>
import { RouterLink, RouterView } from "vue-router";
import "./assets/base.css";
import "bootstrap";
import CloseButton from "./components/common/CloseButton.vue";
import Pages from "./scripts/pages";
import Footer from "./views/Footer.vue";
import Working from "./views/Working.vue";
import casa from './assets/imgs/quarto.jpg';


export default {
    data() {
        return {
            showNavBar: false,
            navWidth: null,
            currentPage : 0,
            disableFooter : false,
            casa : casa,
            Pages: Pages,
            
        };
    },
    mounted() {
        window.addEventListener("resize", this.updateNavWidth);

    },
    unmounted() {
        window.removeEventListener("resize", this.updateNavWidth);
    },
    methods: {
        openNavBar() {
            this.showNavBar = true;
        },
        closeNavBar() {
            this.showNavBar = false;
        },
        updateNavWidth() {
            this.navWidth = document.querySelector(".secondary-nav").style.width;
        },

        navigateTo(place, showNav, page) {
          this.showNavBar = showNav;
            this.currentpage =  page;
            this.$router.push(place);
            this.disableFooter = !(page === this.Pages.HOME);
        }
    },
    computed : {
      page(){
        return this.currentPage === Pages.HOME;
      }
    },
    components: { CloseButton, Footer, Working }
};
</script>

<template>
  <header>
    <Working/>
    <div class="wrapper">
      <nav
        class="navbar navbar-expand-sm d-flex flex-row-reverse justify-content-between align-items-center my-2"
      >
        <label for="check" @click="openNavBar">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
        <div class="logo" @click="navigateTo('/',false,Pages.HOME)">
          <img src="./assets/logo.png" class="img-fluid" alt="..." />
        </div>
      </nav>
      <div class="secondary-nav" v-bind:class="{ active: this.showNavBar }">
      <div class="nav-close-button" @click="closeNavBar">
      <CloseButton/>
      </div>
       <ul class="left-nav">
        <li v-bind:class="{active : this.currentpage ===  Pages.HOME}" @click="navigateTo('/',false,Pages.HOME)">Home</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.ABOUT_US}" @click="navigateTo('/about',false,Pages.ABOUT_US)">About Us</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.HOUSES}" @click="navigateTo('/houses',false,Pages.HOUSES)">Houses</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.SERVICES}" @click="navigateTo('/services',false,Pages.SERVICES)">Services</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.CONTACTS}" @click="navigateTo('/contacts',false,Pages.CONTACTS)">Contacts</li>
      </ul>
      </div>
    </div>
  </header>
  <div class="casaimg" v-show="page">
    <img :src="casa">
  </div>
  <RouterView />
  <Footer :disable="disableFooter" />
</template>
