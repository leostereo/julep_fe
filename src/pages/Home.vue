<template>
  <q-page padding class="bg-julep1">
    <q-dialog v-model="alert">
      <q-card class="bg-julep1 text-julep1">
        <q-card-section align="center" class="q-mt-sx">
          <q-img
            src="../assets/images/logo design_color_bluetext_nobackground.png"
            style="height: 80px; max-width: 200px"
          />
        </q-card-section>

        <q-card-section align="center" class="q-pt-none">
          Hello {{ this.data.initialGreeting }}
        </q-card-section>
        <q-card-actions align="center" class="q-mb-md">
          <q-btn flat label="Good to know" class="j-login-reg" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="bg-julep1 text-julep1 text-center q-mt-md">
      <div>
        {{ dateStr }}
      </div>
      <div class="q-mb-md">Hello {{ this.data.initialGreeting }}</div>
    </div>
    <div v-for="activity in this.data.todayActivities" 
    :key="activity.id"
    >
      <activity
        :title="activity.title"
        :description="activity.description"
        :status="activity.status"
        :time="activity.time"
      />
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import getDate from "../services/services";
import Activity from "../components/home/activity.vue";

export default {
  name: "Home",
    components: {
      Activity,
  },
  data() {
    return {
      dateStr: "",
      data: {},
      alert: false
    };
  },
  created: function() {
    this.displayDate();
    api
      .get("/dashboard/user/100")
      .then(response => {
        this.data = response.data;
        console.log(JSON.stringify(this.data));
        this.showAlert();
      })
      .catch(() => {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "Loading failed",
          icon: "report_problem"
        });
      });
  },
  methods: {
    displayDate: function() {
      this.dateStr = getDate();
    },
    showAlert: function() {
      this.alert = true;
    }
  }
};
</script>
<style lang="scss">
.q-dialog__inner > div {
  width: 90%;
  border-radius: 20px;
}
</style>
