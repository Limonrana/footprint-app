<template>
  <section class="analytic-section">
    <div class="container mx-auto p-5 mt-10">
      <div class="flex justify-between mb-4 md:mb-12">
        <div class="w-1/4">
          <router-link class="cursor-pointer" to="/integration"
            ><!-- add  active for active on green color, and add class active-white for  -->
            <div class="step2 step after px-1">
              <p class="color-white-2 text-xs md:text-sm font-bold">Integration</p>
            </div></router-link
          >
        </div>
        <!-- add  active for active on green color, and add class active-white for  -->
        <div class="w-1/4">
          <router-link class="cursor-pointer" to="/analytics">
            <div class="step3 step after active px-1">
              <p class="color-white-2 text-xs md:text-sm font-bold">Analytics</p>
            </div></router-link
          >
        </div>
        <div class="w-1/4">
          <router-link class="cursor-pointer" to="/product">
            <div class="step3 step after px-1">
              <p class="color-white-2 text-xs md:text-sm font-bold">Products</p>
            </div></router-link
          >
        </div>
        <div class="w-1/4">
          <router-link class="cursor-pointer" to="/plan-switch">
            <div class="step3 step after px-1">
              <p class="color-white-2 text-xs md:text-sm font-bold">Plan</p>
            </div></router-link
          >
        </div>
      </div>
      <!-- step line -->
      <div class="analytic-free-user-dashboard-lock relative">
        <!--  -->
        <div class="md:flex justify-between">
          <h2 class="text-3xl md:text-5xl text-white font-bold mb-4 md:mb-14">
            Explore your impact.
          </h2>
          <div>
            <label class="sr-only" for="currency">This Week</label>
            <select
              class=" border-2 color-bg-black-1 w-64 md:w-60 h-10 rounded-xl text-white focus:outline-none focus:ring focus:border-gray-200"
            >
              <option>
                This Week
              </option>
              <option>
                This month
              </option>
            </select>
          </div>
        </div>
        <!-- all project analytic area  -->
        <div class="allproducts-analytic-area mt-16 xl:flex">
          <div
            class="analytic-item all-analytic-product float-left md:block w-1/2 md:w-1/5 md:ml-2"
          >
            <div class=" analytic-produts active mr-2 h-24 relative color-bg-black-1 rounded-md">
              <p class="text-xs md:text-xl text-white px-2 md:px-4 pt-3 top-3">All projects</p>
            </div>
            <!-- progress bar area  -->
            <div class="flex justify-between items-center py-5 mr-2">
              <div class="w-1/3">
                <p class="Helvetica Neue text-sm text-white">100%</p>
              </div>
              <!-- progress bar  -->
              <div class="w-2/3"></div>
            </div>
          </div>
          <div class="analytic-item float-left md:block w-1/2 md:w-1/5 md:mx-2">
            <div
              class=" analytic-produts analytic-produts-one mr-2 h-24 relative color-bg-black-1 rounded-md"
            >
              <p class="text-xs md:text-xl text-white px-2 md:px-4 pt-3 top-3">
                Panama Biodiverse Forst plant
              </p>
            </div>
            <!-- progress bar area  -->
            <div class="flex justify-between items-center py-5 mr-6">
              <div class="w-1/4 ml-2">
                <p class="Helvetica Neue text-sm text-white">23%</p>
              </div>
              <!-- progress bar  -->
              <div class="w-3/4">
                <div class="overflow-hidden h-1 text-xs flex rounded-xl bg-white">
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center color-bg-green-1"
                    style="width:23%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="analytic-item float-left md:block w-1/2 md:w-1/5 md:mx-2">
            <div
              class=" analytic-produts analytic-produts-two mr-2 h-24 relative color-bg-black-1 rounded-md"
            >
              <p class="text-xs md:text-xl text-white px-2 md:px-4 pt-3 top-3">
                Siperia Kanato Renewables plant
              </p>
            </div>
            <!-- progress bar area  -->
            <div class="flex justify-between items-center py-5 mr-6">
              <div class="w-1/4 ml-2">
                <p class="Helvetica Neue text-sm text-white">23%</p>
              </div>
              <!-- progress bar  -->
              <div class="w-3/4">
                <div class="overflow-hidden h-1 text-xs flex rounded-xl bg-white">
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center color-bg-green-1"
                    style="width:23%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="analytic-item float-left md:block w-1/2 md:w-1/5 md:mx-2">
            <div
              class=" analytic-produts analytic-produts-tree mr-2 h-24 relative color-bg-black-1 rounded-md"
            >
              <p class="text-xs md:text-xl text-white px-2 md:px-4 pt-3 top-3">
                Kapotano South Forest plant
              </p>
            </div>
            <!-- progress bar area  -->
            <div class="flex justify-between items-center py-5 mr-6">
              <div class="w-1/4 ml-2">
                <p class="Helvetica Neue text-sm text-white">23%</p>
              </div>
              <!-- progress bar  -->
              <div class="w-3/4">
                <div class="overflow-hidden h-1 text-xs flex rounded-xl bg-white">
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center color-bg-green-1"
                    style="width:23%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="analytic-item float-left md:block w-1/2 md:w-1/5 md:mx-2">
            <div
              class=" analytic-produts analytic-produts-four mr-2 h-24 relative color-bg-black-1 rounded-md"
            >
              <p class="text-xs md:text-xl text-white px-2 md:px-4 pt-3 top-3">
                Shelando Opasio Forest Arial
              </p>
            </div>
            <!-- progress bar area  -->
            <div class="flex justify-between items-center py-5 mr-6">
              <div class="w-1/4 ml-2">
                <p class="Helvetica Neue text-sm text-white">23%</p>
              </div>
              <!-- progress bar  -->
              <div class="w-3/4">
                <div class="overflow-hidden h-1 text-xs flex rounded-xl bg-white">
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center color-bg-green-1"
                    style="width:23%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- analytic grap  will here  -->
        <div class="clear-both"></div>
        <!-- analytic grap  -->
        <div class="impact-area clear-both">
          <p class="text-white text-xl md:text-4xl">Impact examples</p>
          <div class="impact-grid flex flex-wrap md:flex-nowrap mt-24 xl:mb-64">
            <div class="impact-item w-1/2 mb-8 xl:block xl:w-1/4">
              <img alt="" class="m-auto pb-4" src="../../assets/images/tree.png" />
              <p class="text-white text-2xl text-center">2981</p>
              <p class="text-sm text-center color-white-2">Planted Trees</p>
            </div>
            <div class="impact-item w-1/2 mb-8 xl:block xl:w-1/4">
              <img alt="" class="m-auto pb-4" src="../../assets/images/blab.png" />
              <p class="text-white text-2xl text-center">811</p>
              <p class="text-sm text-center color-white-2">Homes lighted</p>
            </div>
            <div class="impact-item w-1/2 mb-8 xl:block xl:w-1/4">
              <img alt="" class="m-auto pb-4" src="../../assets/images/drink.png" />
              <p class="text-white text-2xl text-center">2671</p>
              <p class="text-sm text-center color-white-2">coffee cups saved</p>
            </div>
            <div class="impact-item w-1/2 mb-8 xl:block xl:w-1/4">
              <img alt="" class="m-auto pb-4" src="../../assets/images/bag.png" />
              <p class="text-white text-2xl text-center">76810</p>
              <p class="text-sm text-center color-white-2">plastic bags saved</p>
            </div>
          </div>
        </div>
        <!-- footer button -->
        <div class="clear-both md:flex justify-between items-center mt-16 md:mt-28 mb-10">
          <img class="logo" src="../../assets/images/footprintlogo.png" />
          <a class="color-white-2 text-sm" href="#">yourfootprint.co/business</a>
          <a class="color-white-2 ml-4 md:ml-4 text-sm" href="#">support@yourfootprint.co</a>
        </div>
        <!-- free user lock onverly -->
        <div
          class="absolute inset-0 bg-lock-screen-color flex flex-col justify-center items-center"
        >
          <router-link class="cursor-pointer" to="/plan-switch"
            ><img class="mb-2 mx-auto" height="18" src="../../assets/images/lock.png" width="18" />
            <p class="text-white text-sm pt-2">Unlock with Pro plan.</p></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
