<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            bottom-slots
            v-model="newTweetContent"
            placeholder="What's Happening"
            counter
            maxlength="280"
            autogrow
            style="new-tweet"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>

        <div class="col col-shrink">
          <q-btn
            class="q-mb-lg"
            rounded
            color="primary"
            label="Tweet"
            unelevated
            no-caps
            :disable="!newTweetContent"
            @click="addNewTweet"
          />
        </div>
      </div>
      <q-separator size="10px" color="grey-2" class="divider" />

      <q-list separator>
        <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow">

          <q-item
          class="q-py-md"
          v-for="tweet in tweets"
          :key="tweet.date">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1"
                ><strong>
                  Kevvv⚡
                  <span
                  class="text-grey-7">
                    @thisKeviin
                    <br class="lt-md"> &bullet; {{ tweet.date | relativeDate }}

                  </span>
                </strong></q-item-label
              >
              <q-item-label class="tweet-content text-body1">
                {{ tweet.content }}
              </q-item-label>

              <div class="row justify-between q-mt-sm tweet-icons">
                <q-btn
                flat
                round
                color="grey"
                icon="far fa-comment"
                size="sm" />

                <q-btn
                flat
                round
                color="grey"
                icon="fas fa-retweet"
                size="sm" />

                <q-btn
                flat
                round
                color="grey"
                icon="far fa-heart"
                size="sm" />

                <q-btn
                flat
                round
                color="grey"
                icon="fas fa-trash"
                size="sm"
                @click="deleteTweet(tweet)"
                />

              </div>
            </q-item-section>

          </q-item>
        </transition-group>
      </q-list>
  </q-scroll-area>
  </q-page>
</template>

<script>
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
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
      //return formatDistance(value, Date.now(), {addSuffix: true})
    },
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.newTweetContent,
        date: Date.now(),
      };
      this.tweets.unshift(newTweet);
      this.newTweetContent = ''
    },
    deleteTweet(tweet){
      let dateToDelete = tweet.date
      let index = this.tweets.findIndex(tweet => tweet.date === dateToDelete)
      this.tweets.splice(index, 1)

    }
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
  border-color: $grey-5

.tweet-content
  white-space: pre-line
.tweet-icons
  margin-left: -5px
</style>
