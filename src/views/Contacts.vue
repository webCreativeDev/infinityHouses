<template>
  <div class="w80">
    <div class="page-title">Contact Us</div>
    <div class="row contacts-comp">
      <div class="col-12 col-xl-6 form">
        <div class="text">
          Feel free to Contact us and we will get book to you as soon as we can.
        </div>
        <form ref="form" v-on:submit="sendEmail">
          <input
            class="input-type-text"
            placeholder="Name"
            name="from_name"
            type="text"
          />
          <input
            name="from_email"
            class="input-type-text"
            placeholder="Email Address"
            type="text"
          />
          <textarea

            name="message"
            class="input-type-message"
            placeholder="Message"
          ></textarea>
          <input class="input-type-button" type="submit" value="Send" />
        </form>
      </div>
      <div class="col-xl-2 borderRight md-none"></div>
      <div class="col-xl-2 md-none"></div>
      <div class="col-12 col-xl-2 form">
        <div class="h1-">Contacts</div>
        <div class="text-">
          Parada Lindoso <br />
          4980-453 <br />
          Ponte da Barca
        </div>

        <div class="h1-">Phone</div>
        <div class="text-">965 627 880</div>
        <div class="text-">965 831 772</div>

        <div class="h1-">Email</div>
        <div class="text-">geral@rhcasasdecampo.com</div>
        <div class="text-">laurebola@gmail.com</div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import "../assets/styles/contacts.css";

export default {
  data() {
    return {
      serviceID: "service_35wff8h",
      templateID: "template_zein85a",
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
      emailjs.init("SZBS_NJRV38Kh0TLy");
      emailjs.sendForm(this.serviceID, this.templateID,this.$refs.form,"SZBS_NJRV38Kh0TLy").then(
        () => {
          alert("Sent!");
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    }
  },
};
</script>
