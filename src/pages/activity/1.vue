<template>
  <q-page padding>
    <q-dialog v-model="render">
            <q-img
              src="../../assets/images/logo design_color_bluetext_nobackground.png"
              style="height: 80px; max-width: 260px"
              />
    </q-dialog>
          <q-carousel
        v-model="firstSlide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="julep1"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        padding
        arrows
  
        class="bg-julep1 text-julep1"
      >
           <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      </q-carousel>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
            lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',
firstSlide:'style',
      render:false
    };
  }
}
</script>
