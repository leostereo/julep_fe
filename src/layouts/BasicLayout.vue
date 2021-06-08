<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg-julep1">
      <q-footer class="bg-white text-julep1 text-center">
        <q-btn-group unelevated>
          <q-btn no-caps to="/dashboard" stack label="home" icon="home" />
        </q-btn-group>
      </q-footer> 
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "BasicLayout",
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../css/app.scss";

.julep_text1 {
  color: $julep_text1;
}
</style>
