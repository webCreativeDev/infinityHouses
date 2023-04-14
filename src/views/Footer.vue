<template>
  <div class="footer">
    <div class="row rel">
      <div class="col-10 col-lg-4 col-sm-6 col-md-4 col-xl-2">
        <div class="fot-h1">Menu</div>
        <ul class="fot-list">
          <li class="ext-link" @click="navigateTo('/')">Home</li>
          <li class="ext-link" @click="navigateTo('/About')">About Us</li>
          <li class="ext-link" @click="navigateTo('/Houses')">Houses</li>
          <li class="ext-link" @click="navigateTo('/Services')">Services</li>
          <li class="ext-link" @click="navigateTo('/Contacts')">Contacts</li>
        </ul>
      </div>
      <div class="col-10 col-lg-4 col-sm-6 col-md-4 col-xl-2">
        <div class="fot-h1">Houses</div>
        <ul class="fot-list">
          <li class="ext-link" @click="navigateTo('/House/')" >Family House</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Gold House</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Copper House</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Silver House</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Natural House</li>
        </ul>
      </div>
      <div class="col-10 col-lg-4 col-sm-6 col-md-4 col-xl-2">
        <div class="fot-h1">Packs</div>
        <ul class="fot-list">
          <li class="ext-link" @click="navigateTo('/Services')">Luxury</li>
          <li class="ext-link" @click="navigateTo('/Services')">In Love</li>
        </ul>
      </div>
      <div class="col-10 col-lg-4 col-sm-6 col-md-6 col-xl-2">
        <div class="fot-h1">Contacts</div>
        <ul class="fot-list">
          <li>+351 965 627 880</li>
          <li>laurebola@gmail.com</li>
          <li style="line-height: 26px;">
           Rua da Electra del lima nº 657 e 693<br />
           Padamonte - Britelo<br />
            4980-203 Ponte da Barca
          </li>
        </ul>
      </div>
      <div class="col-xl-2 esp">
        <div class="vl"></div>
      </div>
      <div class="col-10 col-lg-4 col-md-6 col-sm-6  col-xl-2">
        <div class="fot-h1">Connect</div>
        <ul class="fot-list">
          <li class="ext-link" v-on:click="openExtLink(facebook)">Facebook</li>
          <li class="ext-link" v-on:click="openExtLink(instagram)">Instagram</li>
        </ul>
      </div>
    </div>
    <div class="copyrigth">
      Registo Nacional de Turismo n.º 10659 - Livro de reclamações
      online - Infinityhouses © All rights reserved.
    </div>
  </div>
</template>

<script> 
import "../assets/styles/footer.css";
export default {
  data() {
    return {
      facebook: "https://www.facebook.com/rhcasasdecampodesign/",
      instagram: "https://www.instagram.com/infi.nityhouses/",
    };
  },
  props: {
    disable: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    openExtLink(link){
        window.open(link,'_blank');
    },
      navigateTo(place) {
            this.$router.push(place);
        }
  },  
};
</script>
