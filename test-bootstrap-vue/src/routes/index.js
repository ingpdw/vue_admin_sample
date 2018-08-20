import table from '../components/Layout/pages/table.vue';
import chart from '../components/Layout/pages/chart.vue';
import main from '../components/Layout/pages/main.vue';
import dropdown from '../components/Layout/pages/dropdown.vue';

export default [
  {
    path: '/',
    component: main
  },
  {
    path: '/table',
    component: table
  },
  {
    path: '/chart',
    component: chart
  },
  {
    path: '/dropdown',
    component: dropdown
  },
  {
    path: '/icon',
    component: table
  },
];
