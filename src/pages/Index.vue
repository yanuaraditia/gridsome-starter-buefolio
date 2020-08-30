<template>
  <Layout>
    <section class="hero is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-primary">Hi I'm Yanuar Aditia</h1>
          <vue-typed-js :strings="subtitle" class="has-text-centered is-block" :loop="true">
            <h2 class="subtitle has-text-white"><span class="has-text-primary">return </span>"<span class="typing"></span>";</h2>
          </vue-typed-js>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Here I am',
    description: 'I’m from Kebumen, Indonesia and I have been working as a junior front-end programmer for more than 3 years and still love to do it every day. I’ve worked for Indonesian company called Tries and also my own Paparkir as a full-stack developer since 2018. I’ve been freelancing for the last 4 years, and right now I am looking forward to working with you!',
  },
  data() {
    return {
      subtitle: [
        'Backend Developer',
        'PHP Programmer',
        'UI / UX Lover',
        'Girl?',
        'Fullstack?'
      ]
    }
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
