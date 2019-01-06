<template>
  <div class="rwfooter">

    <footer id = 'footer'>
      <b-navbar toggleable type = 'inverse' variant = 'success'>
        <b-link class = 'navbar-brand' to = '#'>
          <span><img class = 'img-rounded' id = 'logoimg' width = '50' src = '../assets/logo.png'>  <small>Copyright © 2017 Journeyman Software LLC</small></span>
        </b-link>
        <b-nav is-nav-bar class = 'pull-right'>
          <b-nav-item to = '/'><b>Home</b></b-nav-item>
          <b-nav-item to = 'About'>About</b-nav-item>
          <b-nav-item to = 'Pricing'>Pricing</b-nav-item>
          <b-nav-item to = 'Demo'><b-button to = 'Demo' size = 'sm' variant = 'success'>Demo</b-button></b-nav-item>
        </b-nav>
      </b-navbar>
    </footer>

  </div>
</template>

<script>

export default {

  name: 'rwfooter',

  data () {

    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  margin-bottom: 0 !important;
  margin-top: -5px;
  z-index: 98 !important;
}
</style>
