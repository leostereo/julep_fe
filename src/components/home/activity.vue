<template>
<div @click="routeActivity" class="frame row" v-bind:class="[enabled ? 'enabled' : 'disabled']">
  <div class="col-9">
    <p v-bind:class="[enabled ? 'title' : 'title_dis']">{{ title }}</p>
    <p class="text-julep1 description">{{ description }}</p>
  </div>

  <div class="col text-julep1">
    <p v-if="enabled" class="">{{ time }}mins</p>
    <q-icon v-else name="lock" class="text-primary" style="font-size: 32px;" />

  </div>
 
</div>
</template>

<script>
export default {
  name: "Activity",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    description: {
      type: String,
      required: true,
      default: ""
    },
      enabled: {
      type: Boolean,
      required: true,
      default: false
    },
      time: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: () => ({
    //mytitle: "test"
  }),
  methods: {
    routeActivity: function() {
        if(this.enabled){
          console.log("routing");
          this.$router.push({ path: 'activity/1' })
        }
      
    }
  },
};
</script>

<style lang="scss">
.frame {
  border-radius: 15px;
  padding: 3%;
  margin-bottom: 1%;
}
.enabled{
  background: white;
}
.disabled{
  background: grey;
}

.title{
  font-size: 1em;
  color:#4EC56A;
  margin: 0%;
}
.title_dis{
  font-size: 1em;
  color: #375F7D;
  margin: 0%;
}
.description{
  font-size: 0.8em;
  margin: 0%;
}
</style>
