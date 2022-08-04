<template>
  <div class="w80">
    <div class="page-title">Contact Us</div>
    <div class="row contacts-comp">
      <div class="col-6">
        <div class="text">
          Feel free to Contact us and we will get book to you as soon as we can.
        </div>
        <form>
          <input
            v-model="name"
            class="input-type-text"
            placeholder="Name"
            type="text"
          />
          <input
            v-model="email"
            class="input-type-text"
            placeholder="Email Address"
            type="text"
          />
          <textarea
            v-model="message"
            class="input-type-message"
            placeholder="Message"
          ></textarea>
          <input class="input-type-button" type="submit" value="Send" />
        </form>
      </div>
      <div class="col-2 borderRight"></div>
      <div class="col-2"></div>
      <div class="col-2">
        <div class="h1-">Contacts</div>
        <div class="text-">
          Parada Lindoso <br />
          4980-453 <br />
          Ponte da Barca
        </div>

        <div class="h1-">Phone</div>
        <div class="text-"> 965 627 880</div>
        <div class="text-"> 965 831 772</div>

        <div class="h1-">Email</div>
        <div class="text-">geral@rhcasasdecampo.com</div>
        <div class="text-">laurebola@gmail.com</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/styles/contacts.css";

export default {};
</script>
