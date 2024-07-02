<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">

          <span class="gt-sm">{{$route.name}}</span>
          <q-icon
            size="sm"
            color="primary"
            name="fa-solid fa-dove"
            class="q-pa-md lt-md header-icon"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="263"
    >
      <!-- drawer content -->
      <q-toolbar>
        <q-icon
        size="lg"
        color="primary"
        name="fa-solid fa-dove"
        class="q-pa-md"
      />
        <q-toolbar-title class="text-weight-bold">TwitterClone</q-toolbar-title>

      </q-toolbar>
      <q-list>
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Home Page</q-item-section>
        </q-item>

        <q-item  clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-search-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Explore</q-item-section>
        </q-item>

        <q-item  clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-bell-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Notifications</q-item-section>
        </q-item>

        <q-item  clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-email-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Messages</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-plus-square-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Grok</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-people-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Community</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="attach_money"  class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Premium</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-person-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">Profile</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-more-horizontal-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">More</q-item-section>
        </q-item>

        <q-item class="flex justify-center">
          <q-btn rounded class="bg-primary full-width">
            Tweet
          </q-btn>
        </q-item>

       <!-- <q-item to="/about" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="eva-question-mark-circle-outline" class="text-h6" size="md" />
          </q-item-section>

          <q-item-section class="text-weight-bold">About</q-item-section>
        </q-item> -->

        <q-item class="absolute-bottom" clickable>
          <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
          <q-item-section>
            <q-item-label class="text-weight-bold">Kevvv⚡</q-item-label>
            <q-item-label class="text-grey-7">@thisKeviin</q-item-label>
          </q-item-section>
          <q-btn flat dense icon="eva-more-horizontal-outline"/>
        </q-item>

      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered :width="400">
      <!-- drawer content -->

      <q-input
        color="teal"
        outlined
        rounded
        dense
        class="q-ma-md"
        placeholder="Search Twitter"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list padding separator>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">INFORMATION</q-item-label>
            <q-item-label class="text-bold">Some fresh news</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>3 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">COMUNICATION</q-item-label>
            <q-item-label class="text-bold">Some fresh news</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">TECNOLOGY</q-item-label>
            <q-item-label class="text-bold">Some fresh news</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>15 min ago</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-drawer>

    <q-page-container>

      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      darkMode: localStorage.getItem('darkMode') === 'true' || false,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  methods: {
    toggleDarkMode() {
      this.$q.dark.set(this.darkMode); // Atualiza o tema do Quasar
      localStorage.setItem('darkMode', this.darkMode); // Salva a preferência do usuário
    },
  },
  mounted() {
    this.$q.dark.set(this.darkMode); // Aplica o tema escuro se for a preferência do usuário ao carregar
  },
};
</script>

<style lang="sass">
.header-icon
  position: absolute,
  bottom: 0,
  left: 50%,
  transform: translateX(-50%)

</style>
