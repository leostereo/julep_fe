<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-brand">
      <q-toolbar class="">
        <q-icon name="star" style="font-size: 2rem" />
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
          v-for="link in essentialLinks"
          :key="link.name"
          :to="link.path"
          class="text-brand"
        >
          <q-item-section avatar>
            <q-icon color="text-brand" :name="link.icon" />
          </q-item-section>

          <q-item-section avatar>
            {{ link.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksData = [
  {
    title: "Login",
    caption: "pagina de login",
    icon: "login",
    path: "/login"
  },
  {
    title: "Register",
    caption: "nuevo usuario",
    icon: "how_to_reg",
    path: "/Register"
  },
  {
    title: "Dashboard",
    caption: "Panel de usuarios",
    icon: "dashboard",
    path: "/Dashboard"
  },
  {
    title: "Logout",
    caption: "adiosss",
    icon: "logout",
    path: "/Logout"
  }
];

export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
