<template>
  <div class="w80-">
    <div class="page-title">Contact Us</div>
    <div class="page-description">Feel free to Contact us and we will get book to you as soon as we can.</div>
  </div>
  <div class="contacts-comp">
    <div class="casaimg">
      <img :src="contacts">

    </div>
    <div class="row w80">
      <div class="col-12 col-xl-8 form">

        <form ref="form" v-on:submit="sendEmail" class="needs-validation" novalidate>
          <div class="form-text w-100">
            Send us a message
          </div>
          <div class="row rowa w-100">
            <input class="col-5 col-style" placeholder="First Name" name="from_first_name" type="text" />
            <div class="col-2" />
            <input class="col-5 col-style" placeholder="Last Name" name="from_last_name" type="text" />
          </div>
          <input name="from_email" class="input-type-text" placeholder="Email Address" type="text" />
          <input name="from_subject" class="input-type-text" placeholder="Subject" type="text" />
          <textarea name="message" class="input-type-message" placeholder="Message"></textarea>
          <input class="input-type-button" type="submit" value="Send" />
        </form>
      </div>
      <div class="col-xl-1 md-none"></div>
      <div class="col-12 col-xl-3 form-">
        <div class="h1-">Address</div>
        <div class="text-">
          Rua da Electra del lima nº 657 e 693 <br />
          Padamonte - Britelo <br />
          4980-203 Ponte da Barca
        </div>

        <div class="h1-">Phone</div>
        <div class="text-">+351 965 627 880</div>

        <div class="h1-">Email</div>
        <div class="text-">laurebola@gmail.com</div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import contacts from '../assets/imgs/contacts.jpg';
import "../assets/styles/contacts.css";

export default {
  data() {
    return {
      serviceID: "service_rqvrre2",
      templateID: "template_zein85a",
      contacts: contacts
    };
  },
  methods: {
    sendEmail(e) {
      e.preventDefault();
      emailjs.init("SZBS_NJRV38Kh0TLy");
      emailjs.sendForm(this.serviceID, this.templateID, this.$refs.form, "SZBS_NJRV38Kh0TLy").then(
        () => {
          alert("Sent!");
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    }
  },
  mounted() {
    //  var elem = document.querySelector(".img-fluid");
    // elem.style.filter = "invert(1)"
    // var lines = [...document.querySelectorAll(".line")];
    // lines.map((e) => e.style.background = "white")

  },
  unmounted() {
    var elem = document.querySelector(".img-fluid");
    elem.style.filter = "invert(0)"
    var lines = [...document.querySelectorAll(".line")];
    lines.map((e) => e.style.background = "#2D362B")

  }

};
</script>
