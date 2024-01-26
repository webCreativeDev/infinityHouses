<script>
import "../assets/styles/project.css";
import family from "@/assets/imgs/vila2.jpeg"
import natural from "@/assets/imgs/quarto.jpg"
import gold from "@/assets/imgs/gold_house1.jpeg"



export default {
    data() {
    return {
      natural: natural,
      family: family,
      gold: gold
    };
  },
};
</script>

<template>
<div class="midle-border">
    <div class="barra-feder" @click="navigateToProjectInfo">
          <img  src="../assets/imgs/barra_feder.jpg" class="img-feder" alt="..." />
    </div>
    <div class="project-text">

 
<p>
<strong>Designação do projeto:</strong> O presente projeto diz respeito à recuperação de uma habituação no sentido de a transformar em casa de turismo em espaço rural.
</p><p>
    <strong>Código do projeto:</strong> NORTE-07-5141-FEDER-000510
</p><p>
    <strong>Objetivo principal:</strong> Reforçar a Competitividade das PME
</p><p>
    <strong>Região de intervenção:</strong> Norte
</p><p>
    <strong>Entidade beneﬁciária:</strong> 223559580 - MARIO FRANCISCO AMORIM REBOLA DE SOUSA
</p><p>
    <strong>Data de aprovação:</strong> 14-02-2019
</p><p>
    <strong>Data de início</strong> 10/02/2020
</p><p>
    <strong>Data de conclusão:</strong> 07/11/2021
</p><p>
    <strong>Custo total elegível FEDER -</strong> 85 289,22 EUR
</p><p>
    <strong>Apoio ﬁnanceiro da União Europeia –</strong> 38 380,15 EUR
</p>
 
<p>
    <strong>Objetivos, atividades e resultados esperados/atingidos:</strong>  aquisição de novos equipamentos produtivos que nos permitam aumentar e melhorar a produção, diversificando segmentos e mercados. Complementarmente, definimos como objetivos específicos:
</p><p>
    <strong>1.</strong>  Criação de uma nova oferta de alojamento turístico que irá fortalecer a oferta da região através de um empreendimento de qualidade superior.
</p><p>
    <strong>2.</strong>  Continuar a aposta na região e no “produto turístico” que já representa a “RH Casas de Campo Design”.
</p><p>
    <strong>3.</strong>  Criação de oferta de alojamento turístico com as seguintes valências; arquitetura arrojada, modernidade, utilização de materiais de primeira qualidade e diferenciadores, aposta no conforto do cliente, serviços de qualidade com toques requintados nos acabamentos e na decoração das moradias.
</p><p>
    <strong>4.</strong>  Atingir uma média de ocupação anual combinada (entre o T1 e o T2) de 26,50%, no ano 2020
</p><p>
    <strong>5.</strong>  Promover a comercialização de produtos locais, alimentares e de artesanato, através da casa.
</p><p>
    <strong>6.</strong>  Criação de um novo posto de trabalho (contratado para a área de serviços gerais e gestão operacional).
</p>
    </div>

    <div class="imgs">
    <div class="images">
        <img :src="family" alt="">
  </div>
  <div class="images">
    <img :src="natural" alt="">

  </div>
  <div class="images">
    <img :src="gold" alt="">

  </div>
  </div>
</div>


</template>
