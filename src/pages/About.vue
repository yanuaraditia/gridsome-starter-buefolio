<template>
  <Layout>
    <Hero title="Something About Me" branch="about"/>
    <section class="section mb-10">
      <div class="container">
        <h3 class="title is-5 has-text-primary">Hello I'm Yanuar Aditia</h3>
        <div class="columns">
          <div class="column is-3">
            <g-image src="~/images/pp.jpg" style="border-radius: 100%"></g-image>
          </div>
          <div class="column is-9">
            <p>My full name is Yanuar Aditia, and Yanuar in short. Born, raised, and currently living in Yogyakarta, Indonesia.
              Currently working as Backend Developer at Tries Company Yogyakarta.</p>
            <p>I start getting into web dev on high school by creating an blog/CMS for practicum management using native PHP, then learning various php framework like CI, CakePHP, Yii, but now I'd prefer using Laravel.</p>
            <p>Nowadays I spend my time to organize IMAKA site, sometimes hang around various programming/web dev user groups, play some games, and keep learning new things while I can.</p>
            <p>You can contact me via email at yanuaraditia@outlook.com.</p>
            <div class="columns is-multiline mt-3">
              <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Age :</strong> {{calculateAge}}</div>
              <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Residence :</strong> Indonesia</div>
              <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Freelance :</strong> Available</div>
              <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Address :</strong> Yogyakarta, ID</div>
              <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Chat :</strong><a href="//t.me/yanuaraditia" class="has-text-white"> t.me/yanuaraditia</a></div>
              <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Mail :</strong><a href="mailto:yanuarditia@outlook.com" class="has-text-white"> yanuarditia@outlook.com</a></div>
            </div>
          </div>
        </div>
        <hr>
        <h3 class="title is-5 has-text-primary">Coding Skills</h3>
        <div class="columns is-multiline">
          <div class="column is-6-widescreen">
            <small>PHP / Laravel</small>
            <b-progress :value="95" show-value format="percent" type="is-primary"></b-progress>
          </div>
          <div class="column is-6-widescreen">
            <small>HTMl,CSS,SASS</small>
            <b-progress :value="85" show-value format="percent" type="is-primary"></b-progress>
          </div>
          <div class="column is-6-widescreen">
            <small>Javascript / VueJS</small>
            <b-progress :value="75" show-value format="percent" type="is-primary"></b-progress>
          </div>
          <div class="column is-6-widescreen">
            <small>SQL / MySQL</small>
            <b-progress :value="85" show-value format="percent" type="is-primary"></b-progress>
          </div>
        </div>
        <hr>
        <h3 class="title is-5 has-text-primary">Knowledge & Technology</h3>
        <g-image src="~/images/tc-laravel.png" class="mr-3" width="40px"></g-image>
        <g-image src="~/images/tc-rest.png" class="mr-3" width="40px"></g-image>
        <g-image src="~/images/tc-sql.png" class="mr-3" width="40px"></g-image>
        <g-image src="~/images/tc-sass.png" class="mr-3" width="40px"></g-image>
        <g-image src="~/images/tc-git.png" class="mr-3" width="40px"></g-image>
      </div>
    </section>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
export default {
  components: {
    Hero,
  },
  metaInfo: {
    title: 'Me',
    description: "I'm currently working as Backend Developer using Laravel as the framework."
  },
  computed:{
    calculateAge() {
      let currentDate = new Date();
      let birthDate = new Date("1999/01/07");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference/31557600000);
      return age
    }
  }
}
</script>
