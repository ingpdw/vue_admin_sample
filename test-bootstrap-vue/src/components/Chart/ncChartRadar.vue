<template>
  <canvas :id="chartId"></canvas>
</template>

<script>
import Chart from 'chart.js';
import chartData from './chartDataRadar.js';

export default {
  name: 'ncChartRadar',
  mounted() {
    this.createChart(this.chartData);
  },
  data() {
    return {
      chartData: chartData,
      chartId: 'chart2' + +new Date,
    }
  },
  methods: {
    createChart(chartData) {
      const ctx = document.getElementById(this.chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  mounted() {
    this.createChart(this.chartData);
  }
}

</script>
