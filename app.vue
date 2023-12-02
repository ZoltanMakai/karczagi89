<template>
  <div
    class="leading-normal tracking-normal text-white font-roboto bg-gradient"
  >
    <Nav />
    <Hero />
    <Kulterimunka />
    <Epitoanyagok />
    <GepiFoldmunka />
    <Gepeink />
    <Kapcsolat />

    <!--Footer-->
    <Footer />
  </div>
</template>
<script setup>
const pageTitle = "Karczagi-89 kft";

onMounted(() => {
  document.title = pageTitle;
});

const animated = ref(false);

onMounted(() => {
  animated.value = true;
});
</script>

<style>
.animate-float-in {
  animation: float-in 1s ease forwards;
}

@keyframes float-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
