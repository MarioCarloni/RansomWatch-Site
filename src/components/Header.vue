<template>
  <div class="rwheader">

    <b-navbar toggleable type = 'inverse' variant = 'success'>
      <b-link class = 'navbar-brand' to = '#'>
        <span><img class = 'img-rounded' id = 'logoimg' width = '50' src = '../assets/logo.png'>  <b id = 'logo'>RansomWatch</b></span>
      </b-link>
      <b-nav is-nav-bar class = 'pull-right'>
        <b-nav-item to = '/'><b>Home</b></b-nav-item>
        <b-nav-item to = 'About'>About</b-nav-item>
        <b-nav-item to = 'Pricing'>Pricing</b-nav-item>
        <b-nav-item to = 'Demo'><b-button size = 'sm' variant = 'success'>Demo</b-button></b-nav-item>
      </b-nav>
    </b-navbar>

  </div>
</template>

<script>

export default {

  name: 'rwheader',

  data () {

    return {

    }
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
