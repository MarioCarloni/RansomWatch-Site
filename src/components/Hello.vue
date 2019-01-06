<template>
  <div class="hello">

    <div class = 'row'>
      <div class="thumbnail text-center">
        <img src="../assets/ch.jpg" alt="" class="img-rounded">
        <div class = 'overlay'></div>
        <div class="caption">
          <b-jumbotron header="Ransomware Endpoint Security">
            <p>Fail-safe network defense against malware spread.</p>
          </b-jumbotron>
        </div>
      </div>
    </div>

    <div class = 'row'>
      <div class = 'col-md-6 text-center'>
        <b-jumbotron header="What is Ransomware?">
          <p>Malicious software that encrypts data across shared networks unless a ransom is paid, usually via cryptocurrency.</p>
          <p>Companies are hit on-average 40 times per second, with 4x more varaints than in 2016</p>
          <p>50% of attacks infect at least 20 employees</p>
          <p>Downtime from ransomware damage is expected to exceed $5 billion in 2017</p>
        </b-jumbotron>
      </div>
      <div class = 'col-md-6 text-center'>
        <b-jumbotron header="Existing Solutions">
          <p>Be wary of companies promising infinite expulsion via ecclectic and costly suites.</p>
          <p>Pricing between $5 and $8 per user per month!</p>
          <p>No company has successfully developed a 100% viable Ransomware protection system</p>
          <p>Why pay big bucks if it's going to happen again?</p>
        </b-jumbotron>
      </div>
    </div>

    <div class = 'row'>
      <div class = 'col-md-6'>
        <b-jumbotron header="Our Solution">
          <p>RansomWatch disables network-drive, wired, and wireless adapter connections at first sign of malicious encryption. Entry-points are effectively quarantined from your network</p>
          <p>The most affordably priced RansomWare solution on the market, takes minutes to install, and never bothers you unless something is wrong.</p>
        </b-jumbotron>
      </div>
      <div class = 'col-md-6'>
        <b-jumbotron>
          <b-list-group>
            <b-list-group-item id = 'benefits' active><h4>Benefits</h4></b-list-group-item>
            <b-list-group-item><h4>$2/user/month</h4></b-list-group-item>
            <b-list-group-item><h4>No configuration required</h4></b-list-group-item>
            <b-list-group-item><h4>In-memory encryption detection</h4></b-list-group-item>
            <b-list-group-item><h4>A network fail-safe against malware</h4></b-list-group-item>
          </b-list-group>
        </b-jumbotron>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: 'hello',

  data () {

    return {

    }
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.caption p {

  margin-top: 4%;
}

</style>
