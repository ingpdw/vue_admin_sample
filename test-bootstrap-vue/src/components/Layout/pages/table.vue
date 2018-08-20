<template>
  <div>
    <nc-card>
      <div slot="title">table demo</div>
      <div slot="description">테이블 샘플</div>
      <div slot="body" v-html="code">
      </div>
    </nc-card>

    <nc-card>
      <div slot="title">table code</div>
      <div slot="description">테이블 코드</div>
      <div slot="body">
        <codemirror v-model="code"></codemirror>
      </div>
    </nc-card>
  </div>
</template>

<script>
import ncCard from '../../Card/index.vue';
import ncSidebar from '../../Sidebar/index.vue';
import ncSearch from '../../Search/index.vue';

export default {
  name: 'app',
  data() {
    return {
      title: 'table demo',
      description: '테이블 샘플',
      code: `<table class="table table-hover table-striped">
  <thead>
    <tr>
      <th>game</th>
      <th>Name</th>
      <th>en</th>
      <th>count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>리니지</td>
      <td>lineage</td>
      <td>493,829</td>
    </tr>
    <tr>
      <td>2</td>
      <td>아이온</td>
      <td>aion</td>
      <td>93,829</td>
    </tr>
    <tr>
      <td>3</td>
      <td>블소</td>
      <td>bns</td>
      <td>493,829</td>
    </tr>
    <tr>
      <td>4</td>
      <td>리니지M</td>
      <td>lineageM</td>
      <td>4,393,829</td>
    </tr>
    <tr>
      <td>5</td>
      <td>리니지 레드나이츠</td>
      <td>rk</td>
      <td>4,393,829</td>
    </tr>
  </tbody>
</table>`,
    };
  },
  components: {
    ncCard,
    ncSidebar,
    ncSearch,
  },
};
</script>
