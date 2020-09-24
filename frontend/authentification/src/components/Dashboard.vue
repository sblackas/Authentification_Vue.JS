<template>
      <div id="jumbo">
  <b-jumbotron>
    <template v-slot:header>This is Dashboard page</template>

    <hr class="my-4">

    <template v-slot:lead>
            Welcome to you connected user !
    </template>

    <hr class="my-4">
  
  <FormHandler/>
 </b-jumbotron>
</div> 
</template>

<script>
export default {
    name : "Dashboard"
}
</script>