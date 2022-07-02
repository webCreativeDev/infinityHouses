<script>
import { RouterLink, RouterView } from "vue-router";
import "./assets/base.css";
import "bootstrap";
import CloseButton from "./components/common/closeButton.vue";
import Pages from "./scripts/pages";


export default {
    data() {
        return {
            showNavBar: false,
            navWidth: null,
            currentPage : Pages.HOME,
            Pages
        };
    },
    mounted() {
        window.addEventListener("resize", this.updateNavWidth);
    },
    unmounted() {
        window.removeEventListener("resize", this.updateNavWidth);
    },
    methods: {
        navigateToHome() {
            this.$router.push("/");
            this.showNavBar = false;
        },
        openNavBar() {
            this.showNavBar = true;
        },
        closeNavBar() {
            this.showNavBar = false;
        },
        updateNavWidth() {
            this.navWidth = document.querySelector(".secondary-nav").style.width;
        },
        navigateToHome() {
            this.$router.push("/");
            this.showNavBar = false;
            this.currentpage =  Pages.HOME;
        },
        navigateToAboutUs() {
            this.$router.push("/about");
            this.showNavBar = false;
            this.currentpage = Pages.ABOUT_US;
        },
        navigateToHouses() {
            this.$router.push("/houses");
            this.showNavBar = false;
            this.currentpage = Pages.HOUSES;
        },
        navigateToServices() {
            this.$router.push("/services");
            this.showNavBar = false;
            this.currentpage = Pages.SERVICES;
            },
        navigateToContacts() {
            this.$router.push("/contacts");
            this.showNavBar = false;
            this.currentpage = Pages.CONTACTS;
        },
    },
    components: { CloseButton }
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav
        class="navbar navbar-expand-sm d-flex flex-row-reverse justify-content-between align-items-center my-2"
      >
        <label for="check" @click="openNavBar">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
        <div class="logo" @click="navigateToHome">
          <img src="./assets/logo.png" class="img-fluid" alt="..." />
        </div>
      </nav>
      <div class="secondary-nav" v-bind:class="{ active: this.showNavBar }">
      <div class="nav-close-button" @click="closeNavBar">
      <CloseButton/>
      </div>
       <ul class="left-nav">
        <li v-bind:class="{active : this.currentpage ===  Pages.HOME}" @click="navigateToHome">Home</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.ABOUT_US}" @click="navigateToAboutUs">About Us</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.HOUSES}" @click="navigateToHouses">Houses</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.SERVICES}" @click="navigateToServices">Services</li>
        <li v-bind:class="{active : this.currentpage ===  Pages.CONTACTS}" @click="navigateToContacts">Contacts</li>
      </ul>
      </div>
    </div>
  </header>
  <RouterView />
</template>
