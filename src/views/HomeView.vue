<template>
  <v-container>
    <h1 class="text-h5 mb-4">{{ t('home.title') }}</h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
            <v-text-field v-model="cpf" v-mask="'###.###.###-##'" :label="t('home.cpf')" />
            <v-text-field
              v-model="phone"
              v-mask="['(##) ####-####', '(##) #####-####']"
              :label="t('home.phone')"
            />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <v-card :title="t('home.salesChart')">
          <v-card-text>
            <v-chart class="chart" :option="chartOption" autoresize />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { EChartsOption } from 'echarts'

const { t } = useI18n()

const cpf = ref<string>('')
const phone = ref<string>('')

const chartOption = computed<EChartsOption>(() => ({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'] },
  yAxis: { type: 'value' },
  series: [{ name: t('home.sales'), type: 'bar', data: [120, 200, 150, 80, 170, 210] }],
}))
</script>

<style scoped>
.chart {
  height: 320px;
}
</style>
