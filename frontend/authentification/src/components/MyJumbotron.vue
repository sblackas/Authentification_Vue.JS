<template>
  <div id="jumbo">
  <b-jumbotron>
    <template v-slot:header>Connexion Interface</template>

    <template v-slot:lead>
            Below the formulary for signUp or signIn in our magnificient application
    </template>

    <hr class="my-4">
  <FormHandler/>
 </b-jumbotron>
</div> 
</template>

<script>
import FormHandler from './FormHandler'
export default {
    name : 'MyJumbotron',
    components : {
      FormHandler,
     
      }
}
</script>