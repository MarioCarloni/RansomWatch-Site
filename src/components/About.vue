<template>
  <div class="about">
  
    <div class = 'row'>
      <div class="thumbnail text-center">
        <img src="../assets/ch2.jpg" alt="" class="img-rounded">
        <div class = 'overlay'></div>
        <div class="caption">
            <b-jumbotron header="About RansomWatch">
              <p>RansomWatch provides data-sensitive institutions across the globe with fail-safe networking tools and analytics.</p>
              <p>Our shared drive killswitch provides employees and leaders protection against the spread of malware.</p>
            </b-jumbotron>
        </div>
      </div>
    </div>

    <div class = 'row'>
      <b-jumbotron header="Executive Management"></b-jumbotron>
        <article class = 'col-md-4'>
          <img class = 'img-circle' src = '../assets/Mario.jpg'>
          <h3>Mario Carloni</h3>
          <p>Chief Executive Officer</p>
          <p>
            <button @click = "marioLinkedin"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></button>
            <button @click = "marioGithub"><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></button>
            <button @click = "marioEmail"><i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i></button>
          </p>
        </article>
        <article class = 'col-md-4'>
          <img class = 'img-circle' src = '../assets/Shane.jpg'>
          <h3>Shane Bergin</h3>
          <p>Chief Information Security Officer</p>
          <p>
            <button @click = "shaneLinkedin"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></button>
            <button @click = "shaneEmail"><i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i></button>
          </p>
        </article>
        <article class = 'col-md-4'>
          <img class = 'img-circle' src = '../assets/Thom.jpg'>
          <h3>Thomas Kitchen</h3>
          <p>Chief Technology Officer</p>
          <p>
            <button @click = "thomLinkedin"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></button>
            <button @click = "thomGithub"><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></button>
            <button @click = "thomEmail"><i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i></button>
          </p>
        </article>
    </div>

  </div>
</template>

<script>

export default {

  name: 'about',

  data () {

    return {

    }
  },

  methods: {

    marioLinkedin() {

      window.open('https://www.linkedin.com/in/mariocarloni/')
    },

    marioGithub() {

      window.open('https://github.com/MarioCarloni')
    },

    marioEmail() {

      window.open('mailto:mcarloni4@gmail.com')
    },

    shaneLinkedin() {

      window.open('https://www.linkedin.com/in/shane-bergin-90225b60')
    },

    shaneEmail() {

      window.open('mailto:shanebergin@gmail.com')
    },

    thomLinkedin() {

      window.open('https://www.linkedin.com/in/thomkitchen/')
    },

    thomGithub() {

      window.open('https://github.com/thomkitchen')
    },

    thomEmail() {

      window.open('mailto:thomkitchen@gmail.com')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.caption p {

  margin-top: 3%;
}

.row {
  margin-bottom: 3%;
}

</style>
