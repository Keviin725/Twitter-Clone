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
</style>
