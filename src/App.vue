<template>
  <v-app>
    <v-navigation-drawer v-model="appStore.drawer">
      <v-list nav>
        <v-list-item
          :to="{ name: 'home' }"
          prepend-icon="mdi-view-dashboard"
          :title="t('menu.home')"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="appStore.toggleDrawer" />
      <v-app-bar-title>{{ t('app.title') }}</v-app-bar-title>
      <v-btn-toggle v-model="locale" mandatory density="compact" variant="text">
        <v-btn value="pt-BR">PT</v-btn>
        <v-btn value="en">EN</v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'

const { t, locale } = useI18n()
const appStore = useAppStore()
</script>
