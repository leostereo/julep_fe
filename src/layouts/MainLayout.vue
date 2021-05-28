<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-julep1">
      <q-toolbar class="">
    <q-btn class="q-mt-xs" dense round flat icon="star" style="font-size: 1.2em;">
      <q-badge color="green" floating transparent >
        4
      </q-badge>
    </q-btn>
        <q-toolbar-title class="text-weight-bold text-center">
          Dashboard
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="link in topItems"
          :key="link.name"
          :to="link.path"
          class="text-julep1"
        >
          <q-item-section avatar>
            <q-icon color="julep1" :name="link.icon" />
          </q-item-section>

          <q-item-section avatar>
            {{ link.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
      <q-footer class="bg-white text-julep1">
    <q-btn-group  >
      <q-btn  v-for="link in bottomItems"
      :key="link.label"
      no-caps stack :label="link.label" :icon="link.icon" />
     
    </q-btn-group>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TOP_MENU_ITEMS from "../constants/home/top_menu_items";
import BOTTOM_MENU_ITEMS from "../constants/home/bottom_menu_items";


export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
      topItems: TOP_MENU_ITEMS,
      bottomItems: BOTTOM_MENU_ITEMS,
    };
  }
};
</script>
