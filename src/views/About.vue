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
        <p>  Com vista para o jardim e para a serra, o INFINITY HOUSES está localizado em Ponte da Barca,
         a 45 km do Santuário de São Bento da Porta Aberta e das Termas do Gerês.
         Esta propriedade sustentável dispõe de estacionamento privado no local.
         Os hóspedes desfrutam de vistas para o rio{{ show ? '.' : '...' }}
        </p>
        
        </div>
      <div class="text-a" v-show="show">
        <p>  As unidades estão equipadas com ar condicionado, uma televisão de ecrã plano com canais por cabo, uma máquina de lavar louça, uma máquina de café, um chuveiro, roupões de banho e um roupeiro. Com uma casa de banho privativa equipada com um secador de cabelo, as unidades do complexo de villas também providenciam acesso Wi-Fi gratuito. Alguns quartos incluem um terraço. Todas as unidades do complexo de villas estão equipadas com roupa de cama e toalhas.
        </p>
        <p> Se preferir cozinhar no conforto da sua própria casa, poderá usufruir das comodidades de cozinha, que incluem um forno, uma chaleira e um micro-ondas.
        </p>
        <p>  Os hóspedes da villa poderão desfrutar de atividades em Ponte da Barca e nos arredores, como caminhadas.
        </p>
        <p>  A Barragem da Caniçada fica a 48 km do INFINITY HOUSES, enquanto a Sé Catedral de Braga está a 49 km. O aeroporto mais próximo é o Aeroporto de Vigo, a 92 km do alojamento.
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
