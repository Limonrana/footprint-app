<template>
  <div>
    <FreeAnalytics v-if="membership.plan === 'free'"></FreeAnalytics>
    <FreeAnalytics v-else></FreeAnalytics>
  </div>
</template>

<script>
import FreeAnalytics from "./section/FreeAnalytics";

export default {
  name: "Analytics",
  components: {
    FreeAnalytics
  }
};
</script>

<style></style>
