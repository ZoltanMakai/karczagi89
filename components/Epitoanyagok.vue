<template>
  <section
    class="bg-white border-b-4 pt-8 pb-16 md:pb-32"
    id="epitoanyag-kereskedelem"
  >
    <div class="container px-3 mx-auto flex flex-wrap items-center">
      <h2
        class="w-full my-2 pt-8 md:pt-16 text-2xl md:text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Építőanyag kereskedelem
      </h2>
      <div class="w-full mb-2 md:mb-4">
        <div
          class="h-1 mx-auto bg-gradient w-24 md:w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 mx-auto gap-6 md:gap-12 pt-8">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="w-full bg-transparent cursor-pointer group perspective"
          @click="rotateImage(index)"
        >
          <p
            class="text-gray-800 text-lg md:text-3xl text-center font-semibold py-3 md:py-4"
          >
            {{ card.title }}
          </p>
          <div
            :class="{
              'my-rotate-y-180': isRotated[index],
            }"
            class="relative preserve-3d w-full h-[240px] md:h-[420px] duration-1000"
          >
            <div class="absolute w-full h-full">
              <NuxtImg
                format="webp"
                :src="card.image"
                class="w-full h-full object-cover rounded-xl shadow-2xl shadow-gray-900"
                alt="Icon"
              />
            </div>
            <div
              v-if="card.details && card.details.length > 0"
              class="absolute my-rotate-y-180 backface-hidden w-full h-full shadow-xl rounded-xl bg-gray-100 overflow-hidden"
            >
              <div
                class="text-center flex flex-col items-center justify-center text-black h-full px-2"
              >
                <ul>
                  <li
                    class="py-2 text-base font-semibold md:text-xl"
                    v-for="(detail, idx) in card.details"
                    :key="idx"
                  >
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
            <div
              v-else-if="card.details !== undefined"
              class="absolute my-rotate-y-180 n w-full h-full shadow-xl rounded-xl overflow-hidden"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: "Sóder",
    image: "/img/soder.jpg",
    details: ["- 0-4 mm-es sóder", "- 0-16 mm-es sóder", "- 0-22 mm-es sóder"],
    isRotated: ref(false),
  },
  {
    title: "Homok",
    image: "/img/homok.jpg",
    details: ["- Éles", "- Finom"],
    isRotated: ref(false),
  },
  {
    title: "Gyöngykavics",
    image: "/img/gyongykavics.jpg",
    isRotated: ref(false),
  },
  {
    title: "Kulé kavics",
    image: "/img/kulekavics.jpg",
    isRotated: ref(false),
  },
  {
    title: "Zúzott kő",
    image: "/img/zuzottko.jpg",
    isRotated: ref(false),
  },
  {
    title: "Betontermékek",
    image: "/img/betontermek.jpg",
    details: [
      "- Zsalukövek",
      "- Oszlopkövek",
      "- Szegélykövek",
      "- Járdalapok",
      "- Átereszek",
    ],
    isRotated: ref(false),
  },
  {
    title: "Zsákos cement",
    image: "/img/cement.jpg",
    isRotated: ref(false),
  },
  {
    title: "Zsákos oltott mész",
    image: "/img/oltottmesz.jpg",
    isRotated: ref(false),
  },
  {
    title: "Betonacél",
    image: "/img/betonacel.jpg",
    isRotated: ref(false),
  },
];

const isRotated = ref(Array(cards.length).fill(false));

const rotateImage = (index) => {
  isRotated.value = isRotated.value.map((value, idx) =>
    idx === index ? !value : false
  );
};
</script>
