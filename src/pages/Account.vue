<template>
  <q-page padding class="flex flex-center">
    <div class="row justify-center full-height bg-red items-center">
      <div class="fixed-top">
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
      </div>

      <div class="q-pa-md">
        <q-carousel
          class="bg-julep1"
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          control-color="primary"
        >
          <q-carousel-slide name="account" class="column no-wrap flex-center">
            <div class="q-mt-md text-center">
<amplify-auth-container>
  <amplify-authenticator></amplify-authenticator>
</amplify-auth-container>
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
    </div>
    <div class="fixed-bottom q-mb-md">
      <div class="text-center">
        <q-btn to="/dashboard" no-caps label="Save" class="q-mb-lg j-button1"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-vue";
import { auth_logout } from "src/services/cloud";


export default {
  name: 'AuthStateApp',
  created() {
    const currentConfig = Auth.configure();
    console.log(JSON.stringify(currentConfig));
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      if (authState == "signedin") {
        this.loggedIn = true;
        this.user = authData;
      } else {
        this.loggedIn = false;
        this.user = "";
      }
    });
  },
  data() {
    return {
      slide:"account",
      loggedIn: false,
      user: undefined,
      formFields: [
        {   type: "name",
            label: "First name",
            placeholder: "Bruce",
            required: true,
            },
       {   type: "family_name",
            label: "Last name",
            placeholder: "Waine",
            required: true,
            },
{ type: "email" },
        { type: "password" },


      ]
    };
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  }
}
</script>
