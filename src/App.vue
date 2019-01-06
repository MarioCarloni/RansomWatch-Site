<template>
  <div id="app">
    <rwheader></rwheader>
    <router-view></router-view>
    <rwfooter></rwfooter>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {

  name: 'app',

  components: {

    'rwheader': Header,
    'rwfooter': Footer
  }
}
</script>

<style lang = 'scss'>

.row {
  margin-right: 0px !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 0;
}

.navbar {

  margin-bottom: 0 !important;
  z-index: 99 !important;
  margin-top: 0;
}

.thumbnail {
    position: relative;
    margin-top: -1%;
    padding-top: 0;
}

.caption {
    background-color: transparent;
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    color: white !important;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.selected {
    color: white;
  }

  #benefits {

    color: white bold;
    background-color: #3c763d;
  }

  #logo {

    font-size: 25px;
    color: white;
  }

  #logoimg {

    margin-top: -2%;
  }

  .jumbotron {
    background-color: transparent !important;
    font-family: Helvetica;
  }


  body {

    background-color: white;
  }

  h1, h2 {

    font-weight: normal;
  }

  ul {

    list-style-type: none;
    padding: 0;
  }

  li {

    display: inline-block;
    margin: 0 10px;
  }

  a {

    color: #42b983;
  }
</style>
