<template>
  <div class="footer" v-show="disable">
    <div class="row rel">
      <div class="col">
        <div class="fot-h1">Menu</div>
        <ul class="fot-list">
          <li class="ext-link" @click="navigateTo('/')">Home</li>
          <li class="ext-link" @click="navigateTo('/About')">About Us</li>
          <li class="ext-link" @click="navigateTo('/Houses')">Houses</li>
          <li class="ext-link" @click="navigateTo('/Services')">Services</li>
          <li class="ext-link" @click="navigateTo('/Contacts')">Contacts</li>
        </ul>
      </div>
      <div class="col">
        <div class="fot-h1">Houses</div>
        <ul class="fot-list">
          <li class="ext-link" @click="navigateTo('/House/')" >Family House T3</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Family House T2</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Family House T1</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Kiko House T1</li>
          <li class="ext-link" @click="navigateTo('/House/')" >Kika House T1</li>
        </ul>
      </div>
      <div class="col">
        <div class="fot-h1">Packs</div>
        <ul class="fot-list">
          <li class="ext-link" @click="navigateTo('/Services')">Luxury</li>
          <li class="ext-link" @click="navigateTo('/Services')">In Love</li>
        </ul>
      </div>
      <div class="col">
        <div class="fot-h1">Contacts</div>
        <ul class="fot-list">
          <li>+351 965 627 880</li>
          <li>geral@rhcasasdecampo.com</li>
          <li>
            Parada Lindoso <br />
            4980-453 Ponte da Barca
          </li>
        </ul>
      </div>
      <div class="col-sm-1 esp">
        <div class="vl"></div>
      </div>
      <div class="col">
        <div class="fot-h1">Connect</div>
        <ul class="fot-list">
          <li class="ext-link" v-on:click="openExtLink(facebook)">Facebook</li>
          <li class="ext-link" v-on:click="openExtLink(tripAdvisor)">Tripadvisor</li>
        </ul>
      </div>
    </div>
    <div class="copyrigth">
      Registo Nacional de Turismo n.º 3509, 3510 e 5550 - Livro de reclamações
      online - RH Casas de Campo Design © All rights reserved. | Design by:
      WebCreativeDeveloper
    </div>
  </div>
</template>

<script>
import "../assets/styles/footer.css";
export default {
  data() {
    return {
      facebook: "https://www.facebook.com/rhcasasdecampodesign/",
      tripAdvisor: "https://www.tripadvisor.com.br/VacationRentalReview-g2712645-d6757749-RH_Casas_de_Campo_Design-Ponte_da_Barca_Viana_do_Castelo_District_Northern_Portugal.html",
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
