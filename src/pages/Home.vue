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
          {{ userState.initialTip }}
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
      <div class="q-mb-md main_text">Hello {{ userState.initialGreeting }}</div>
    </div>
    <div class="main_text text-julep1 q-mb-xs">
      Todays activities      
    </div>
    <div class="activity_frame" v-if="render">
      <div v-for="activity in userState.todayActivities" :key="activity.id">
        <activity
          :title="activity.title"
          :description="activity.description"
          :enabled="activity.enabled"
          :time="activity.time"
        />
      </div>
    </div>
        <div class="main_text text-julep1 q-mt-md">
        My progress      
    </div>
    <div class="goal_frame"  v-if="render">
      <p class="secondary_text text-julep1">Goals</p>
          <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="julep1"
      prev-icon="arrow_left"
      next-icon="arrow_right"

      padding
      arrows
      height="100px"
      class="bg-julep1 text-white"
    >
      <q-carousel-slide
        v-for="goal in userState.goals"
        :key="goal.id"
        :name="goal.id"
        class=""
      >
        <goal :title="goal.title" :progress="goal.progress" />
      </q-carousel-slide>

    </q-carousel>
          <div class="text-right q-pr-md">
    <q-btn class="" round color="primary" icon="add" />
  </div>
    </div>


  </q-page>
</template>

<script>
import { api } from "boot/axios";
import getDate from "../services/services";
import getUserStatus from "../services/homeServices";
import Activity from "../components/home/activity.vue";
import Goal from "../components/home/goal";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Activity,
    Goal
  },
  data: () => ({
      dateStr: "",
      data: {},
      alert: false,
      slide: '',
      render: false,
  }),  

  created: function() {
    this.displayDate();
   getUserStatus();


    /*
    api
      .get("/dashboard/user/100")
      .then(response => {
        console.log(JSON.stringify(response.data));
        this.$store.commit("julepx/UPDATE_USER", response.data);
        this.showAlert();
      })
      .catch(() => {
        console.log("something is wrong");
      });
      */
  },
  methods: {
    displayDate: function() {
      this.dateStr = getDate();
    },
    showAlert: function() {
      this.alert = true;
    }
  },
  computed: {
    userState: {
      get() {
                return this.$store.getters["userInfo"];

        //return this.$store.getters["julepx/userInfo"];
      }
    }
  },
  watch: {
    userState(value) {
      this.color = "#" + value.stripColor;
      this.slide = value.goals[0].id
      this.render= true;
    }
  }
};
</script>
<style scoped lang="scss">
.main_text{
  font-weight: bold;
  font-size: 1.6em;
}
.secondary_text{
  text-decoration: underline;
  font-size: 1.4em;
  margin-bottom: 0%;
}
.q-dialog__inner > div {
  width: 90%;
  border-radius: 20px;
}
.activity_frame {
  max-height: 20em;
  height: 18em;
  overflow: auto;
  padding-right: 1em;
}
.goal_frame{
background: transparent;
}
div.q-carousel__slide{
  background: transparent;
}
.q-carousel__slide, .q-carousel .q-carousel--padding {
}
</style>
