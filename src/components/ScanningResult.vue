<template>
  <section class="Category-section">
    <div class="container mx-auto  p-5 mt-10">
      <div class="flex justify-between mb-8 md:mb-12">
        <div class="w-1/3">
          <!-- add  active for active on green color and add class active-white -->
          <div class="step1 before step active-white step  px-1">
            <h4 class="color-white-2 text-sm ">Step 1</h4>
            <p class="color-white-2 text-sm font-bold">Category</p>
          </div>
        </div>
        <div class="w-1/3">
          <!-- add  active for active on green color and add class active-white -->
          <div class="step2 step active  before px-1">
            <h4 class="color-white-2 text-sm ">Step 1</h4>
            <p class="color-white-2 text-sm font-bold">Category</p>
          </div>
        </div>
        <div class="w-1/3">
          <div class="step3 step before px-1">
            <h4 class="color-white-2 text-sm ">Step 1</h4>
            <p class="color-white-2 text-sm font-bold">Category</p>
          </div>
        </div>
      </div>
      <!-- step line -->

      <!-- selling product area -->
      <div v-if="scanning === true">
        <h2 class="text-2xl md:text-5xl text-white font-bold mb-14">Let’s have a look...</h2>
        <div class="flex justify-center items-center h-48 mt-20 ">
          <div class="relative w-full md:w-2/4">
            <div class="overflow-hidden h-0.5 mb-4 text-xs flex rounded bg-white">
              <div
                id="barStatus"
                :style="{ width: width + '%' }"
                class="shadow-md flex flex-col text-center whitespace-nowrap text-white justify-center color-bg-green-1"
              ></div>
            </div>
            <p class="text-sm color-white-2 text-center">Calculating your footprint...</p>
            <h3 class="text-white md:text-2xl  text-center mt-16">
              Footprint estimations will be shared later and can be further specified.
            </h3>
          </div>
        </div>
        <a id="complate-scanning-goThisLinks" class="" href="scanning-result.html"></a>
      </div>
      <div v-else>
        <h2 class="text-3xl md:text-5xl text-white font-semibold  mb-14 ">Looks great!</h2>
        <!-- scanning result area -->
        <div class="flex justify-between mb-2">
          <div class="w-1/3">
            <div class="step2 step  after px-1">
              <div class="md:w-40 h-28">
                <h4 class="text-2xl md:text-5xl color-white-2 ml-2 md:ml-0 md:mb-4 font-bold">
                  1289
                </h4>
                <p class="color-white-2 text-xs md:text-sm p-3 md:p-0 ">
                  Products in your inventory
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/3">
            <div class="step2 step  after px-1">
              <div class="md:w-40 h-28">
                <h4 class="text-2xl md:text-5xl color-white-2  ml-2 md:ml-0 md:mb-4 font-bold">
                  23.01
                </h4>
                <p class="color-white-2 text-xs md:text-sm p-3 md:p-0 ">
                  Average KG CO2e per product
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/3">
            <div class="step2 step  after px-1">
              <div class="md:w-40 h-28">
                <h4 class="text-2xl md:text-5xl color-white-2 ml-2 md:ml-0 md:mb-4 font-bold">
                  0.09€
                </h4>
                <p class="color-white-2 text-xs md:text-sm  p-3 md:p-0 ">
                  Average ClimateNeutral <br />cost per product
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- scanning lock sereen  -->
        <div class="relative flex justify-center items-center">
          <div class=" w-96 flex flex-col items-center absolute pt-12 md:pt-0">
            <img class="mb-2" src="../assets/images/lock.png" />
            <p class="text-white text-sm w-3/4 md:w-full text-center">
              Detailes can be seen and specified in the dashboard later on.
            </p>
          </div>
          <img class="w-full" src="../assets/images/lock-screen.png" />
        </div>
      </div>
      <!-- footer button -->
      <div class="flex justify-between items-center mt-28 mb-10">
        <img class="logo" src="../assets/images/footprintlogo.png" />
        <button
          class="text-white md:mr-9 color-bg-green-1 py-3 px-6 rounded-2xl disabled:opacity-50"
          v-if="scanning === true"
          disabled
        >
          Get started<span class="pl-2"><i class="fas fa-angle-right"></i></span>
        </button>
        <button
          @click="showPopup()"
          class="text-white md:mr-9 color-bg-green-1 py-3 px-6 rounded-2xl"
          href="#"
          v-else
        >
          Get started<span class="pl-2"><i class="fas fa-angle-right"></i></span>
        </button>
      </div>
    </div>
    <!-- congreat pop up box-->
    <div id="congrats-popup" class="congreat-popup container bg-lock-screen-color mx-auto absolute">
      <div class="flex justify-center items-center mt-96">
        <!-- aleart container  -->
        <div class="color-bg-black-3 rounded-xl p-8 w-80">
          <div class="flex justify-center">
            <img src="../assets/images/leaf-r.png" />
          </div>
          <h2 class="Futura text-white text-4xl font-bold text-center pb-4">Congrats!</h2>
          <p class="pb-4 font-bold text-white text-center text-sm">You are all set!</p>
          <div class="flex justify-around p-2">
            <router-link
              class="Futura text-xl color-bg-green-1 py-3 px-6 rounded-2xl font-bold text-white"
              to="/integration"
              >Let's go</router-link
            >
          </div>
        </div>
        <!-- eand aleart-container -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ScanningResult",
  created() {
    this.isScanning();
  },
  data() {
    return {
      scanning: true,
      width: 10,
      getInterval: null
    };
  },
  methods: {
    isScanning() {
      this.getInterval = setInterval(() => {
        const getWidth = this.width;
        if (getWidth === 100) {
          clearInterval(this.getInterval);
          this.scanning = false;
        }
        this.width += 1;
      }, 100);
    },
    showPopup() {
      document.querySelector(".congreat-popup").style.display = "block";
    }
  }
};
</script>

<style scoped></style>
