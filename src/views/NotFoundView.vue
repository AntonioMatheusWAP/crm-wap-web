<template>
  <v-container class="text-center">
    <h1 class="text-h4 mb-4">{{ t('notFound.title') }}</h1>
    <v-btn color="primary" :to="{ name: 'home' }">{{ t('notFound.back') }}</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
