<template>
  <q-page padding class="flex flex-center">
    <div class="row  full-height bg-red items-center">
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
          v-if="render"
          class="bg-julep1"
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          control-color="primary"
        >
          <q-carousel-slide name="account" class="column no-wrap flex-center">
            <div class="q-mt-md text-center">
              <q-input
                class="q-my-xs"
                type="password"
                outlined
                label-color="julep1"
                color="julep"
                bg-color="input"
                v-model="form.password"
                label="current password"
              />
              <q-input
                class="q-my-xs"
                type="password"
                outlined
                label-color="julep1"
                color="julep"
                bg-color="input"
                v-model="form.newPassword"
                label="new password"
              />
              <q-btn
                @click="changePassword"
                no-caps
                label="Change"
                class="q-mt-lg j-button1"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="personal" class="column no-wrap -center">
            <div class="row q-mt-lg">
              <div class="col">
                <q-input
                  outlined
                  label-color="gray"
                  color="julep1"
                  bg-color="input"
                  :v-model="this.account.personal.firstName"
                  :label="this.account.personal.firstName"
                />
              </div>

              <div class="col q-ml-sm">
                <q-input
                  class=""
                  outlined
                  label-color="gray"
                  color="julep1"
                  bg-color="input"
                  :v-model="this.account.personal.lastName"
                  :label="this.account.personal.lastName"
                />
              </div>
            </div>
            <div class="q-mt-md j-text1">Age</div>
            <q-linear-progress
              rounded
              size="25px"
              value="40"
              color="julep1"
              class="q-mb-md"
            >
              <div class="absolute-full flex flex-center">
                <q-badge color="julep1" text-color="julep1" label="40" />
              </div>
            </q-linear-progress>
            <div class="q-mt-md j-text1">
              Marital status
            </div>

            <div class="q-gutter-sm ">
              <q-radio
                v-model="account.personal.maritalStatus"
                val="Single"
                label="Single"
              />
              <q-radio
                v-model="account.personal.maritalStatus"
                val="Divorcied"
                label="divorced"
              />
              <q-radio
                v-model="account.personal.maritalStatus"
                val="Married"
                label="Married"
              />
            </div>
            <div class="row j-text1 text-left">Zip code</div>
            <q-input
              class=""
              outlined
              label-color="gray"
              color="julep1"
              bg-color="input"
              :v-model="this.account.personal.zipCode"
              :label="this.account.personal.zipCode"
            />
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
    <div v-if="slide != 'account'" class="fixed-bottom q-mb-md">
      <div class="text-center">
        <q-btn to="/dashboard" no-caps label="Save" class="q-mb-md j-button1" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-vue";
import { auth_logout } from "src/services/cloud";
import { getApidata } from "../services/apiServices";

export default {
  name: "AuthStateApp",
  mounted: function() {
    getApidata("/myprofile/user/100", "julepx/UPDATE_ACCOUNT");
  },
  data() {
    return {
      render: false,
      slide: "account",
      loggedIn: false,
      form: {
        email: "",
        password: "",
        newPassword: ""
      },
      account: {}
    };
  },
  methods: {
    changePassword: function() {
      Auth.currentAuthenticatedUser()
        .then(user => {
          console.log(user);
          return Auth.changePassword(
            user,
            this.form.password,
            this.form.newPassword
          );
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },
  computed: {
    accountState: {
      get() {
        //return this.$store.getters["userInfo"];
        return this.$store.getters["julepx/accountInfo"];
      }
    }
  },
  watch: {
    accountState(value) {
      this.account = value;
      this.render = true;
    }
  }
};
</script>

<style scoped>
.text{
  text-align: left;
}
</style>