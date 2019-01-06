<template>
  <div class="demo">

  <div class = 'row'>
      <div class="thumbnail text-center">
        <img src="../assets/demobackground.jpg" alt="" class="img-rounded">
        <div class = 'overlay'></div>
        <div class="caption text-center">
            <b-jumbotron header="Request a Demo"><br><br>
              <p>See RansomWatch in-action!</p>
              <article class = 'text-center'>
                <form  action="https://formspree.io/mcarloni4@gmail.com" method="POST">
        
                  <input type="email" name="email" placeholder="Your email">
          
                  <input name="firstname" placeholder="First Name">
                  <input name="lastname" placeholder="Last Name"><br><br>
                  <p id = 'messageArea'><textarea name = 'message' placeholder = "Your message"></textarea></p>
                  <p id = 'emailButton'><button class = 'btn btn-success' type="submit">Send</button></p>
                  <input type="hidden" name="_subject" value="RansomWatch Demo" />
                </form>
              </article>
              <ul>
                <li>Typical response times between 5 and 10 business days</li>
              </ul>
            </b-jumbotron>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'demo',

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

#messageArea {

  margin-bottom: 1%;
}

#emailButton {

  margin-top: 1%;
}

span {
  color: #e5e3d0;
}

article {

  margin-bottom: 3%;
}

article input {

  color: black;
  text-align: center;
}

article textarea {

  color: black;
  height: 300px;
  width: 600px;
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

.caption p {

  margin-bottom: 4%;
}

h2 {
  margin-bottom: 2%;
}

.thumbnail {

  margin-bottom: 0;
}


</style>
