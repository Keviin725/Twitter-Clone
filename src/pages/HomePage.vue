<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input bottom-slots v-model="newTweetContent" placeholder="What's Happening" counter maxlength="280"
            autogrow style="new-tweet">
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>

        <div class="col col-shrink">
          <q-btn class="q-mb-lg" rounded color="primary" label="Tweet" unelevated no-caps :disable="!newTweetContent"
            @click="addNewTweet" />
        </div>
      </div>
      <q-separator size="10px" color="grey-2" class="divider" />

      <q-list separator>
        <transition-group appear enter-active-class="animated fadeIn slow" leave-active-class="animated fadeOut slow">

          <q-item class="tweet q-py-md" v-for="tweet in tweets" :key="tweet.id">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1"><strong>
                  Kevvv⚡
                  <span class="text-grey-7">
                    @thisKeviin
                    <br class="lt-md"> &bullet; {{ formatRelativeDate(tweet.date) }}

                  </span>
                </strong></q-item-label>
              <q-item-label class="tweet-content text-body1">
                {{ tweet.content }}
              </q-item-label>

              <div class="row justify-between q-mt-sm tweet-icons">
                <q-btn flat round color="grey" icon="far fa-comment" size="sm" />

                <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />

                <q-btn @click="toggleLiked(tweet)" flat round :color="tweet.liked ? 'pink' : 'grey'"
                  :icon="tweet.liked ? 'fas fa-heart' : 'far fa-heart'" size="sm" />
                <i class="" />

                <q-btn flat round color="grey" icon="fas fa-trash" size="sm" @click="deleteTweet(tweet)" />

              </div>
            </q-item-section>

          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";
import { collection, query, onSnapshot, orderBy, limit, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { defineComponent } from "vue";
import { formatDistance } from "date-fns";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newTweetContent: "",
      tweets: [],
    };
  },
  methods: {
    // Método para substituir o filtro
    formatRelativeDate(value) {
      return formatDistance(new Date(value), new Date(), { addSuffix: true });
    },
    async addNewTweet() {
      let newTweet = {
        content: this.newTweetContent,
        date: Date.now(),
        liked: false,
      };
      //this.tweets.unshift(newTweet);
      // Add a new document with a generated id
      const newTweetRef = doc(collection(db, 'tweets'));

      // later...
      await setDoc(newTweetRef, newTweet);

      this.newTweetContent = '';
    },

    async deleteTweet(tweet) {
      const tweetRef = doc(db, 'tweets', tweet.id);
      await deleteDoc(tweetRef);
    },

    async toggleLiked(tweet) {
      const likedtweetRef = doc(db, "tweets", tweet.id);


      await updateDoc(likedtweetRef, {
        liked: !tweet.liked,
      });

    }
  },
  mounted() {
    const q = query(collection(db, 'tweets'), orderBy('date'), limit(10))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let tweetChange = change.doc.data();
        tweetChange.id = change.doc.id;
        if (change.type === "added") {
          console.log("New tweet: ", tweetChange);
          this.tweets.unshift(tweetChange);
        }
        if (change.type === "modified") {
          console.log("Modified tweet: ", tweetChange);
          let index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id);
          Object.assign(this.tweets[index], tweetChange);

        }
        if (change.type === "removed") {
          console.log("Removed tweet: ", tweetChange);
          let index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id);
          this.tweets.splice(index, 1);
        }
      });
    });
  },
});
</script>
<style lang="sass">
.new-tweet
  textarea
    font-size: 19px
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.tweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.tweet-content
  white-space: pre-line
.tweet-icons
  margin-left: -5px
</style>
