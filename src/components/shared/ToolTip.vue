<template>
  <div class="hover-body mobile-toolkit color-bg-black-2 p-4 rounded-md border">
    <div class="mobile-hover">
      <img src="../../assets/images/image-on-mob.png" />
      <div class="mb-1">
        <p class="text-white text-md pt-2">Get project impact updates. 💪</p>
      </div>
      <p class="text-xs text-white text-justify">
        You will have access to all projects details prior to choosing the project. In order to
        provide you with projects updates you would need to sign up / sign in after the project
        selection.
      </p>
    </div>
  </div>
  <!-- mobile tooltip end  -->
</template>

<script>
export default {
  props: ["id", "top", "left", "width"]
};
</script>

<style></style>
