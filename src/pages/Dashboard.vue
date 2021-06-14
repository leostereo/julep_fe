<template>
  <q-page padding v-if="render">
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
    <div class="activity_frame " v-if="render">
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
    <div class="goal_frame q-mt-xs" v-if="render">
      <!--<p class="secondary_text text-julep1">Goals</p>-->
      <q-btn-toggle
        v-model="showGoals"
        class="j-text1"
        glossy
        rounded
        toggle-color="jgreen"
        unelevated
        color="white"
        text-color="julep1"
        :options="[
          { label: 'Goals', value: true },
          { label: 'Challenges', value: false }
        ]"
      />
      <q-carousel
        v-if="showGoals"
        v-model="goalSlide"
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
      <q-carousel
        v-if="!showGoals"
        v-model="challengeSlide"
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
          v-for="challenge in userState.activeChallenges"
          :key="challenge.id"
          :name="challenge.id"
          class=""
        >
          <goal :title="challenge.title" :progress="challenge.progress" />
        </q-carousel-slide>
      </q-carousel>
      <q-dialog v-model="addDialog">
        <q-card class="bg-julep1 text-julep1 q-px-md">
          <q-card-section align="center" class="q-pt-none">
            <p class="secondary_text q-mt-md">
              Lets add a new {{ showGoals ? "Goal" : "challenge" }}
            </p>
          </q-card-section>
          <q-input
            class="q-mb-xs"
            outlined
            label-color="julep1"
            color="julep1"
            bg-color="input"
            v-model="newGoalChall.title"
            label="Title"
          />
          <q-card-section align="center" class="q-pt-none">
            <p class="third_text q-my-lg">
              What is current progress?
            </p>
            <q-slider
              label
              :label-value="newGoalChall.progress + '%'"
              v-model="newGoalChall.progress"
              :min="0"
              :max="100"
              :step="5"
            />
          </q-card-section>

          <q-card-actions align="center" class="q-mb-md">
            <q-btn
              flat
              label="go for it!!"
              class="j-login-reg"
              @click="submitNew"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div class="text-right q-pr-md">
        <q-btn
          class=""
          round
          color="primary"
          icon="add"
          @click="addDialog = true"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import getDate from "../services/services";
import { getApidata } from "../services/apiServices";
import Activity from "../components/home/activity.vue";
import Goal from "../components/home/goal";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Activity,
    Goal
  },
  data: () => ({
    dateStr: "",
    data: {},
    alert: false,
    goalSlide: "",
    challengeSlide: "",
    render: false,
    showGoals: false,
    addDialog: false,
    newGoalChall: {
      type: "",
      title: "",
      progress: 0
    }
  }),

  created: function() {
    this.displayDate();
        getApidata('/dashboard/user/9','julepx/UPDATE_USER')

  },
  methods: {
    displayDate: function() {
      this.dateStr = getDate();
    },
    showAlert: function() {
      this.alert = true;
    },
    submitNew() {
      console.log(JSON.stringify(this.newGoalChall));
    }
  },
  computed: {
    userState: {
      get() {
        //return this.$store.getters["userInfo"];
        return this.$store.getters["julepx/userInfo"];
      }
    }
  },
  watch: {
    userState(value) {
      //this.color = "#" + value.stripColor;
      this.goalSlide = value.goals[0].id;
      this.challengeSlide = value.activeChallenges[0].id;

      this.render = true;
      this.showAlert();
    }
  }
};
</script>
<style scoped lang="scss">
.main_text {
  font-weight: bold;
  font-size: 1.6em;
  margin-left: 3%;
}
.secondary_text {
  font-weight: bold;
  font-size: 1.2em;
}
.third_text {
  font-weight: bold;
  font-size: 1em;
}

.q-dialog__inner > div {
  width: 90%;
  border-radius: 20px;
}
.activity_frame {
  width: 95%;
  margin-left: 3%;
  max-height: 20em;
  height: 18em;
  overflow: auto;
  padding-right: 1em;
}
.goal_frame {
  background: transparent;
}
div.q-carousel__slide {
  background: transparent;
}

</style>
