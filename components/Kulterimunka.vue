<template>
  <section class="bg-white border-b-4 pt-10 pb-8 md:pb-24" id="kulteri-munkak">
    <div class="container px-3 mx-auto flex flex-wrap items-center">
      <h2
        class="w-full my-2 md:pt-10 text-2xl md:text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Kültéri munkák
      </h2>
      <div class="w-full mb-2 md:mb-4">
        <div
          class="h-1 mx-auto bg-gradient w-24 md:w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 mx-auto pt-8 gap-3 text-black"
      >
        <div class="flex flex-col items-center md:pr-10">
          <NuxtImg
            loading="lazy"
            src="/img/concrete-mixer.webp"
            format="webp"
            class="md:w-40 md:h-40 w-20 h-20 transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <h3 class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            BETONALAPOK KÉSZÍTÉSE
          </h3>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Tökéletes alap a tökéletes otthonhoz. Udvarok, kocsibeállók és
            járdák minőségi betonalapokkal, szakértő gondossággal
          </p>
        </div>

        <div class="flex flex-col items-center md:pr-10">
          <NuxtImg
            loading="lazy"
            src="/img/paver.webp"
            format="webp"
            class="md:w-40 md:h-40 w-20 h-20 transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <h3 class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            TÉRKÖVEZÉS
          </h3>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Álmodja meg, mi megépítjük. Térkövezés szakértelemmel és
            precizitással az újabb utakhoz és tervezett terekhez
          </p>
        </div>
        <div class="flex flex-col items-center">
          <NuxtImg
            loading="lazy"
            src="/img/road.webp"
            format="webp"
            class="md:w-40 md:h-40 w-20 h-20 transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <h3 class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            ZÚZALÉKOLÁS
          </h3>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Kiváló minőségű útburkolatokhoz vezető út. Zuzalékolásunk precíz
            felületkezelést biztosít az utak hosszú távú tartósságáért és
            esztétikájáért
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
