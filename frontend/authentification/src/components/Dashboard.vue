<template>
  <div id="jumbo">
    <b-jumbotron>
      <template v-slot:header>This is Dashboard page</template>

      <hr class="my-4" />

      <template v-slot:lead> Welcome to you connected user ! </template>

      <hr class="my-4" />

      <b-button type="reset" variant="danger" v-on:click="logOut">Log Out</b-button> <!-- v-on:click appelle ma fonction logOut -->

      <!-- <FormHandler/> -->
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    logOut() { // method pour supprimer le token lorsque le user se déco
      this.$store.dispatch("DELETE_TOKEN"); // on appelle le store en disptchant une action qu'on appelle DELETE_TOKEN
      this.$router.push("/"); // on redirige l'utilisateur à la page d'accueil lorsqu'il se déco
    },
  },
};
</script>