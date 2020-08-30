<template>
  <Layout>
    <Hero title="Contacts" branch="contact"/>
    <section class="section mb-10">
        <div class="container">
            <h3 class="title is-5 has-text-primary">Stay In Touch</h3>
            <p>You can find me around the web:</p>
            <div class="columns is-multiline mt-3">
                <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Chat :</strong><a href="//t.me/yanuaraditia" class="has-text-white"> t.me/yanuaraditia</a></div>
                <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Mail :</strong><a href="mailto:yanuarditia@outlook.com" class="has-text-white"> yanuarditia[at]outlook.com</a></div>
                <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">LinkedIn :</strong><a href="//linkedin.com/in/yanuaraditia" class="has-text-white"> linkedin.com/in/yanuaraditia</a></div>
                <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">GitHub :</strong><a href="//github.com/yanuaraditia" class="has-text-white"> github.com/yanuaraditia</a></div>
                <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">GitLab :</strong><a href="//gitlab.com/yanuaraditia" class="has-text-white"> gitlab.com/yanuaraditia</a></div>
                <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Instagram :</strong><a href="//instagram.com/yanuaraditia" class="has-text-white"> instagram.com</a></div>
            </div>
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
    title: 'Contact Me',
    description: 'Stay in touch with me, find me around the web',
  },
}
</script>
