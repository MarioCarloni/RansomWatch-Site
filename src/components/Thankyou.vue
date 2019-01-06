<template>
  <div class="thankyou">

  <div class = 'row'>
      <div class="thumbnail text-center">
        <img src="../assets/demobackground.jpg" alt="" class="img-rounded">
        <div class = 'overlay'></div>
        <div class="caption text-center">
            <b-jumbotron header="Thank you!"><br><br>
              <article class = 'text-center'>
                <p>We'll contact you ASAP</p>
              </article>
            </b-jumbotron>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: 'thankyou',

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

#emailButton {

  margin-top: 3%;
}

span {
  color: #e5e3d0;
}

article {

  margin-bottom: 3%;
}

article input {

  color: black;
}

article textarea {

  color: black;
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
