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
    <Footer />
  </div>
</template>
<script setup>
useHead({
  title: "FÖLDMUNKA ÉS ÉPÍTŐANYAG - Karczagi-89",
  htmlAttrs: {
    lang: "hu",
  },
  meta: [
    {
      name: "description",
      content:
        "Gépi földmunka és építőanyag-kereskedelem. Szolgáltatásaink:tereprendezés, épületbontás, betonalapok, térkövezés, és több.Bogács, Mezőkövesd, Noszvaj, Eger, Felsőtárkány, Bükk-vidék, Egri-Bükkalja, Borsod-Abaúj-Zemplén vármegye",
    },
    {
      property: "og:title",
      content: "FÖLDMUNKA ÉS ÉPÍTŐANYAG - Karczagi-89",
    },
    {
      property: "og:description",
      content:
        "Gépi földmunka és építőanyag-kereskedelem. Szolgáltatásaink:tereprendezés, épületbontás, betonalapok, térkövezés, és több.Bogács, Mezőkövesd, Noszvaj, Eger, Felsőtárkány, Bükk-vidék, Egri-Bükkalja, Borsod-Abaúj-Zemplén vármegye",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
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
