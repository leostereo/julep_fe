<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-julep1 text-white">
      <div class="row j-text1  justify-center items-center">
        <div class="text-right">
          <q-btn
            flat
            to="/dashboard"
            style="font-size: 1.2em;"
            label=""
            icon="reply"
          />
        </div>
        <div class="q-pr-md">
          My Profile
        </div>
        <div class=""></div>
      </div>
              <div class="row justify-center">
          <q-btn-toggle
            class="j-text1"
            glossy
            rounded
            toggle-color="jgreen"
            unelevated
            v-model="slide"
            :options="[
              { label: 'Account', value: 'account' },
              { label: 'Personal', value: 'personal' },
              { label: 'Financial', value: 'financial' }
            ]"
          />
        </div>
    </q-header>

    <q-page-container>
            <div class="q-pa-md">
        <q-carousel
          class="bg-julep1"
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
        >
          <q-carousel-slide name="account" class="column no-wrap flex-center">
            <q-icon name="style" color="primary" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="personal" class="column no-wrap flex-center">
            <q-icon name="live_tv" color="primary" size="56px" />
            <div class="q-mt-md text-center">
              personal
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="financial" class="column no-wrap flex-center">
            <q-icon name="layers" color="primary" size="56px" />
            <div class="q-mt-md text-center">
              financial
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </q-page-container>

    <q-footer class="bg-julep1">
          <div class="text-center">
            <q-btn to="/dashboard" no-caps label="Save" class="j-login-reg log"/>
          </div>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: "account",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?"
    };
  }
}
</script>