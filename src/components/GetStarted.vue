<template>
  <div class="container mx-auto  p-5">
    <div class="md:flex justify-between footprint-mt-mid">
      <!-- left side  -->
      <div class="w-full md:w-1/3">
        <img class="" src="../assets/images/lofo-leaf.png" />
        <h1 class="Futura text-2xl md:text-5xl text-white font-bold mb-10 ">
          Delight your customers and boost your sustainability branding.
        </h1>
        <p class="Helvetica Neue mb-8 text-white md:text-sm">
          With Footprint, you will make your orders ClimateNeutral and empower your customers to
          choose which climate project to support.<span class="color-green"> 🌿</span>
        </p>
        <p class="Helvetica Neue md:text-sm text-white">Questions about our product?</p>
        <a class="Helvetica Neue md:text-sm color-green text-link " href="#">Get in touch!</a>
      </div>
      <!-- right-side -->
      <div class="mt-2 md:mt-0 md:pl-20 text-center md:text-right relative">
        <div class="relative flex justify-center items-center">
          <div class="w-full md:w-96 flex flex-col items-center absolute">
            <a href="#"><img class="mb-2" src="../assets/images/play-icon.png"/></a>
          </div>
          <img class="w-full" src="../assets/images/home-img.png" />
        </div>
        <a class="Helvetica Neue text-sm  inline-block mr-9 text-white text-link" href="#"
          >Learn more<span class="pl-2 text-sm"><i class="fas fa-angle-right"></i></span
        ></a>
      </div>
    </div>
    <div class="flex justify-between items-center mt-28 mb-10 ">
      <img class="logo" src="../assets/images/footprintlogo.png" />
      <router-link
        class="Futura text-white md:mr-9 color-bg-green-1 py-3 px-6 rounded-2xl"
        to="/category"
        >Get started<span class="pl-2"><i class="fas fa-angle-right"></i></span
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStarted"
};
</script>

<style>
.container.mx-auto.p-5 {
  min-height: 100vh;
}
.footprint-mt-mid {
  margin-top: 6%;
}
</style>
