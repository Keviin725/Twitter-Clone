<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">

      <div class="col">
        <q-input bottom-slots v-model="newTweetContent" placeholder="What's Happening" counter maxlength="280" autogrow style="new-tweet">
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </template>
      </q-input>
      </div>

      <div class="col col-shrink">
        <q-btn class="q-mb-lg" rounded color="primary" label="Tweet" unelevated no-caps :disable="!newTweetContent"/>
      </div>

    </div>
    <q-separator size="10px" color="grey-2" class="divider"/>

    <q-list  class="" >


      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1"><strong>
            Kevvv⚡
            <span class="text-grey-7">@thisKeviin</span>
          </strong></q-item-label>
          <q-item-label class="tweet-content text-body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut soluta iusto praesentium deserunt dolorum consectetur nostrum maxime repellat eveniet,
            accusamus itaque, incidunt quisquam voluptate dignissimos ducimus officiis harum autem molestias?
          </q-item-label>

          <div class="row justify-between q-mt-sm tweet-icons">
            <q-btn flat round color="grey" icon="far fa-comment" size="sm"/>
            <q-btn flat round color="grey" icon="fas fa-retweet" size="sm"/>
            <q-btn flat round color="grey" icon="far fa-heart" size="sm"/>
            <q-btn flat round color="grey" icon="fas fa-trash" size="sm"/>
          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data(){
    return{
      newTweetContent: ''
    }
  }
})
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
