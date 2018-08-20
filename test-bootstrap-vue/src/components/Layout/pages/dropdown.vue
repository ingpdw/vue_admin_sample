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
