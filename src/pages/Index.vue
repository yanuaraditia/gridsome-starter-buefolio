<template>
  <Layout>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="focus-breathe-relax">
            <span>Focus /</span><br>
            <span>Breathe /</span><br>
            <span>Relax /</span>
          </div>
          <div class="currently-listening" @click="redirect(listening.item.external_urls.spotify)" v-if="listening != null" :style="`--bg:${listening.item.album.images[1].url}`">
            <img :src="listening.item.album.images[1].url" alt="" class="card-img-top">
            <div class="rroah">
              <h5 class="listening">{{listening != null ? '🎶' + listening.item.name : null}}</h5>
              <h6 class="artists">
                <span v-for="artist in listening.item.album.artists" :key="artist.id">{{artist.name}} </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import axios from 'axios'
const api_token = 'BQDzBysCXsxuNf84381ffRUHdt6BEgfdmP78YrmWg06R-uC4Cu0eRql3gvDt0iZSbRav8Et3a49YqPrA6lXu1O9wnAOcSphzVaP9gmjAsH8bE9iN9VBUKOw_fN5CQUesSWWzYubwaxwawHf1xzuo70LF96jYS-beCDhPby36YhnrOg'
export default {
  metaInfo: {
    title: 'Here I am',
    description: 'I’m from Kebumen, Indonesia and I have been working as a junior front-end programmer for more than 3 years and still love to do it every day. I’ve worked for Indonesian company called Tries and also my own Paparkir as a full-stack developer since 2018. I’ve been freelancing for the last 4 years, and right now I am looking forward to working with you!',
  },
  data() {
    return {
      listening: null,
      subtitle: [
        'Backend Developer',
        'PHP Programmer',
        'UI / UX Lover',
        'Girl?',
        'Fullstack?'
      ]
    }
  },
  methods: {
    loadSpotify() {
      axios.get('https://p.yanuaraditia.com/hoyya.php')
      .then(res => {
        this.listening  = res.data
      })
    },
    redirect(url) {
      window.location.href = url
    }
  },
  mounted() {
    this.loadSpotify()
  }
}
</script>

<style lang="scss">
.currently-listening {
  background: rgba($color: #fff, $alpha: .02);
  padding: 0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  .artists {
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1240px) {
    height: 100px;
    max-width: 500px;
    img {
      width: 100px;
      height: 100px;
      
    }
    .rroah {
      position: absolute;
      left: 130px;
      top: 1.5rem;
      right: 1.5rem;
    }
  }
  @media screen and (max-width: 1239px) {
    img {
      display: none;
    }
    .rroah {
      padding: 1.5rem;
    }
  }
}
</style>
