<template>
  <div>
    <nc-card>
      <div slot="title">chart demo</div>
      <div slot="description">chart 샘플</div>
      <div slot="body">
          <chart-card></chart-card>
      </div>
    </nc-card>

    <nc-card>
      <div slot="title">table code</div>
      <div slot="description">chart 코드</div>
      <div slot="body">
        <pre v-highlightjs>
          <code class="javascript">

import { GChart } from 'vue-google-charts';

export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  }
}

          </code>
        </pre>
      </div>
    </nc-card>
  </div>
</template>

<script>
import ncCard from '../../Card/index.vue';
import ChartCard from '../../Chart/index.vue';

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    ChartCard,
    ncCard,
  },
};
</script>
