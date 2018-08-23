<template>
  <div>
    <div class="row">
      <div class="col-12">
        <nc-card>
          <div slot="title">dropdown demo</div>
          <div slot="body">
            <nc-dropdown></nc-dropdown>
          </div>
        </nc-card>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <nc-card>
          <div slot="title">dropdown demo</div>
          <div slot="body">
            <nc-dropdown></nc-dropdown>
          </div>
        </nc-card>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <nc-card>
          <div slot="title">dropdown code</div>
          <div slot="body">
            <pre class="language-js">
              <code>

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
    </div>


  </div>
</template>

<script>
import ncCard from '../../Card/index.vue';
import ncSidebar from '../../Sidebar/index.vue';
import ncSearch from '../../Search/index.vue';
import ncDropdown from '../../Dropdown/index.vue';

export default {
  name: 'dropdown',
  components: {
    ncCard,
    ncSidebar,
    ncSearch,
    ncDropdown,
  },
};
</script>
