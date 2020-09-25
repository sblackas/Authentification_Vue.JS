<template>
<div>
    <b-form >
        <p>{{ message }}</p> <!-- au début il est vide et est la place du message qu'on veut afficher -->
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter your secret password"
          type="password"
          value="FakePSW"
        ></b-form-input>
      </b-form-group>



      <b-button type="reset" variant="danger" v-on:click="connectIt"  >Sign In</b-button>
    </b-form>

  </div>
</template>

<script>
import axios from 'axios';
export default {
    name : 'SignInForm',

      data() {
    return {
      form: {
        email: "",
        password: "",
      },
      message : "" //ajout pour le message d'erreur si le user n'est pas connu dans notre db
    };
  },

methods : {
  connectIt () {
      axios.post("http://localhost:8000/login", this.form)
      .then(response => { //then pour succesful response
          this.$router.push("/dashboard") //$router pour me diriger vers une route, et je veux la route dashboard
          console.log(response.data.token);
          this.$store.dispatch("SENDTOKEN", response.data.token) // deux parametres : le nom de l'action, la valeur
      })
      .catch(err => {
          console.log(err.response.data);
          this.message = err.response.data
      })
  }
}

}
</script>

