<script>
import { RouterLink, RouterView } from "vue-router";
import "./assets/base.css";
import "bootstrap";

</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-sm d-flex flex-row-reverse justify-content-between align-items-center my-2">
       <label for="check">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
        <div class="logo">
          <img src="./assets/logo.png" class="img-fluid" alt="...">
        </div>
        
      </nav>
    </div>
  </header>
  <RouterView />
</template>

