<template>
  <q-page padding class="row">
    <q-dialog v-model="render">
      <q-img
        src="../../assets/images/logo design_color_bluetext_nobackground.png"
        style="height: 80px; max-width: 260px"
      />
    </q-dialog>
    <div class=" ">
      <q-carousel
        v-model="firstSlide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="julep1"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        padding
        height="100%"
        class="bg-julep1 text-julep1 j-text2"
      >
        <q-carousel-slide name="1" class="column flex-center">
          <div class="row">
            <div class="j-text1 text-left">
              Wellcome
            </div>
            <div></div>
            <div></div>
          </div>
          <div v-html="slide1" class="q-mt-md"></div>
          <div @click="firstSlide = '2'" class="j-activity_button1 q-mt-md">
            Lets get started!
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="2" class="column no-wrap flex-center">
          <div class="row">
            <div>
              <q-icon
                @click="firstSlide = '1'"
                style="font-size: 2em;"
                name="reply"
              />
            </div>
            <div class="j-text1">
              How we are different
            </div>
            <div></div>
          </div>
          <div v-html="slide2" class="q-mt-md"></div>
          <div @click="firstSlide = '3'" class="j-activity_button1 q-mt-md">
            I'm down!
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="3" class="column no-wrap flex-center">
          <div class="row">
            <div>
              <q-icon
                @click="firstSlide = '2'"
                style="font-size: 2em;"
                name="reply"
              />
            </div>
            <div class="j-text1">
              What to expect
            </div>
            <div></div>
          </div>
          <div v-html="slide3.paragraph1" class="q-mt-md"></div>
          <div class="row">
            <div class="col-3">
                        <q-icon
            @click="firstSlide = '2'"
            style="font-size: 4em;"
            name="savings"
          />
            </div>
            <div @click="showScore= true" class="col-8 text-center">
              Financial wellness score?
            </div>
          </div>
          <div v-html="slide3.paragraph2" class="q-mt-md"></div>
          <div class="row">
            <div class="col-4">
                        <q-icon
            @click="firstSlide = '2'"
            style="font-size: 4em;"
            name="savings"
          />
            </div>
            <div @click="showLinking= true" class="col-8 text-center">
              Linking accounts?
            </div>
          </div>
                    <div v-html="slide3.paragraph3" class="q-mt-md"></div>
          <div class="row">
            <div class="col-3">
                        <q-icon
            @click="firstSlide = '2'"
            style="font-size: 4em;"
            name="savings"
          />
            </div>
            <div @click="showPath= true" class="col-8 text-center">
              Financial wellness path?
            </div>
          </div>
          <div @click="firstSlide = '4'" class="j-activity_button1 q-mt-xs">
            Ok
          </div>
          <q-dialog  v-model="showScore">
            <q-card v-html="scoreText" class="bg-julep1 text-julep1 q-pa-md">
            </q-card>
          </q-dialog>
          <q-dialog  v-model="showLinking">
            <q-card v-html="linkingText" class="bg-julep1 text-julep1 q-pa-md">
            </q-card>
          </q-dialog>
          <q-dialog  v-model="showPath">
            <q-card v-html="pathText" class="bg-julep1 text-julep1 q-pa-md">
            </q-card>
          </q-dialog>                    
        </q-carousel-slide>
        <q-carousel-slide name="4" class="column no-wrap flex-center">
          <div class="row">
            <div>
              <q-icon
                @click="firstSlide = '3'"
                style="font-size: 2em;"
                name="reply"
              />
            </div>
            <div class="j-text1">
              Ready to do this?
            </div>
            <div></div>
          </div>
          <div v-html="slide4" class="q-mt-md"></div>
          <div @click="firstSlide = '5'" class="j-activity_button1 q-mt-md">
            Lets do it!!
          </div>
        </q-carousel-slide>
       <q-carousel-slide name="5" class="column flex-center">
          <div class="row">
            <div class="j-text1 text-left">
              Who we are:
            </div>
            <div></div>
            <div></div>
          </div>
          <div v-html="slide5" class="q-mt-md"></div>
          <div @click="firstSlide = '6'" class="j-activity_button1 q-mt-md">
            Make sense to me
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="6" class="column no-wrap flex-center">
          <div class="row">
            <div>
              <q-icon
                @click="firstSlide = '5'"
                style="font-size: 2em;"
                name="reply"
              />
            </div>
            <div class="j-text1">
              Who we are (cont)
            </div>
            <div></div>
          </div>
          <div v-html="slide6" class="q-mt-md"></div>
          <div @click="firstSlide = '7'" class="j-activity_button1 q-mt-md">
            Got it!!
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="7" class="column no-wrap flex-center">
          <div class="row">
            <div>
              <q-icon
                @click="firstSlide = '6'"
                style="font-size: 2em;"
                name="reply"
              />
            </div>
            <div class="j-text1">
            </div>
            <div></div>
          </div>
          <div v-html="slide7" class="q-mt-md"></div>
          <div @click="firstSlide = '5'" class="j-activity_button1 q-mt-md">
            Lets go!!
          </div>
        </q-carousel-slide>               
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
     firstSlide: "1",

      slide1: `Julep is a personal financial
wellness app. We're interested in
how you handle your money, but
we're also interested in YOU.<br><br>
We’re a team of wellness
specialists, financial experts, and
educators who are passionate
about empowering people to take
control of their finances.<br><br>
In other words:<br><br>
We care about improving
your wellbeing by helping
you understand and take control
of your financial
situation—whatever that may be.`,
      slide2: `Julep leverages the power of
psychology to help you understand
and manage your finances. We
want to help you examine your
financial behaviors so you can
make informed decisions that are
right for you.<br>
We'll teach you about personal
finance in a way that's easy and
fun, but we also want you to better
understand your relationship with
money so you can take concrete
steps to meet your goals.`,
      slide3: {
        paragraph1: `<p>First, we’ll learn about your current
situation by calculating your
financial wellness score</p>`,
        paragraph2: `<p>Next, you'll tell us about yourself
and your finances, including
linking your accounts.</p>`,
        paragraph3: `<p>Then, we'll get you started on your
path to financial wellness.</p>`
      },
      showScore: false,
      scoreText:`Financial Wellness Score:<br>
We’ll want to get a sense of how you
feel about your finances and your
vision for your financial future.<br>
You’ll take the Consumer Financial
Protection Bureau (CFPB) financial
wellness questionnaire and receive
your financial wellness score.<br>
We use this tool to measure your
current financial well-being—that is,
how well your current money situation
provides you with financial security
and freedom of choice, now and in
the future.`,
      showLinking: false,
      linkingText:`Linking Accounts:<br>
We’ll give you the opportunity to
link your financial accounts so we
can get a better understanding of
your overall financial situation.<br>
This will allow us to help you find
opportunities to save money and
organize your finances in a way
that works for you`,
      showPath: false,
      pathText:`Financial Wellness Journey:<br>
Based on what we learn about you,
we’ll create a personalized financial
wellness plan.<br>
Your plan will include a mix of short
lessons, activities, and tools covering
both psychological and financial
concepts for you to complete at your
own pace.<br>
Along the way, we’ll teach you
financial psychology principles so you
can make informed decisions and
improve your overall relationship with
money.`,
slide4:`
Of course you are. You were born
ready!<br>
We’re excited about getting to
know you (and if we're being
honest, excited to show you what
we can do).<br>
Your journey to financial wellness
is about to begin.
Enjoy the ride!`,
slide5:`Julep is a resource for its
members. We will provide you with
information on financial topics and
some related psychological
concepts to equip and empower
you to make the best decisions for
your unique personality and
circumstances. We will try to do
that in an informal, engaging,
non-judgmental way.<br>
Julep is NOT a financial, tax, or
legal advisor, so we don’t give
advice on those topics. We will
ALWAYS recommend that you
consult with those advisors before
making any big moves, and will
help equip you to ask right
questions to those professionals.`,
slide6:`Similarly, Julep is also not a
clinical psychologist. We will
educate you on psychological
concepts, and how they might
apply to financial decisions, but
we can’t and won’t counsel
individual Julep members.<br>
We will always make suggestions
and recommendations with your
best interest in mind, but YOU will
always make the call.`,
slide7:`
Finally, here’s how this works for
Julep:<br>
We make money in three ways –
member fees, ads, and referral
fees paid by financial companies.<br>
We need to demonstrate value to
you, so you continue as a member.
We only win if YOU win first.<br>
When we see an opportunity to
add value for you, we will suggest
products from at least 3 providers,
along with our reasons for
suggesting them. Again, YOU get
to decide among the options, or
decide to do nothing at all.<br>
Sound fair?<br>
Next, we'll ask you to complete
your profile. That way, we can start
getting to know you a bit better.`,
      render: false
    };
  }
};
</script>
