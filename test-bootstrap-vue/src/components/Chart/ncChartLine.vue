<template>
  <canvas :id="chartId"></canvas>
</template>

<script>
import Chart from 'chart.js';
import chartData from './chartDataLine.js';

export default {
  name: 'ncChartLine',
  mounted() {
    this.createChart(this.chartData);
  },
  data() {
    return {
      chartData: chartData,
      chartId: 'chart1' + +new Date,
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
