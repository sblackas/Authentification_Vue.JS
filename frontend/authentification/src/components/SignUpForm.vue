<template>
  <div>
    <b-form >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="password"
          required
          placeholder="Enter you secret password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" v-on:click='registerIt'>Sign Up</b-button>
     
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SignUpForm",

  data() {
    return {
        email: "",
        name: "",
        password: "",
      }
  },

methods : {
  registerIt () {
      console.log("Welcome to our website");
      axios.post("http://localhost:8000/", {email : this.email, name:this.name, password:this.password})
      .then(response => {
          console.log(response);
      })
  }
}
};
</script>