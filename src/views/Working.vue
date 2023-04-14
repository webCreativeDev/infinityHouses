
<template>
<div class="pageContainer" v-show="show">
    <div class="working">
       Site is currently under construction
</div>
<div class="workingsmall">
       Click in Continue to check what we have done so far
</div>
<div class="housesBox2" @click="hide" >
      <div class="house">Continue</div>
    </div>
</div>
</template>
<script> 
import "../assets/styles/working.css";
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
      hide() {
            this.show = false
            console.log(this.show)
        }
  },  
};
</script>