<template>
  <div class="pricing">

  <div class = 'row'>
      <div class="thumbnail text-center">
        <img src="../assets/pricingbackground.jpg" alt="" class="img-rounded">
        <div class = 'overlay'></div>
        <div class="caption text-center">
            <b-jumbotron header="Pricing"><br><br>
              <article class = 'text-center'>
                <h2><b>Endpoint Security</b></h2>
                <img width = '15%' class = 'img-circle' src = '../assets/logo.png'>
                <h2>$2/user</h2> 
                <span>per month</span>
              </article>
              <ul>
                <li>Regular malware definition updates</li>
                <li>Intermittent feature enchancements</li>
              </ul>
            </b-jumbotron>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: 'pricing',

  data () {

    return {

    }
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span {
  color: #e5e3d0;
}

article {

  margin-bottom: 3%;
}

.overlay {

  background-color: rgba(0, 0, 0, 0.7) !important;
}

.caption {

  top: 15%
}

.caption ul {

  text-align: center;
  margin: auto;
  width: 25%;
}

.caption li {

  text-align: center;
  display: block;
  color: #e8e4be;
  border-bottom: 1px solid white;
  margin-bottom: 5%;
}

h2 {
  margin-bottom: 2%;
}

.thumbnail {

  margin-bottom: 0;
}


</style>
