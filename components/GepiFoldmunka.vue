<template>
  <div class="bg-gray-200 w-screen">
    <div class="relative">
      <div class="h-16 bg-gray-200"></div>
      <div
        class="absolute md:-top-[250px] -top-[107px] inset-y-0 left-0 right-0 flex items-center justify-center"
      >
        <svg
          class="h-max fill-current text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
        >
          <path
            fill-opacity="1"
            d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <section
    class="bg-gray-200 border-b-4 pt-8 pb-8 md:pb-24"
    id="gepi-foldmunkak"
  >
    <div class="container px-3 mx-auto flex flex-wrap items-center">
      <h2
        class="w-full my-2 md:pt-10 text-2xl md:text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Gépi földmunkák
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
            src="/img/tereprendezes_icon.png"
            format="webp"
            class="md:w-40 md:h-40 w-auto h-auto transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <p class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            TEREPRENDEZÉS
          </p>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Egyenletlen terep rendezése, tuskók és fák eltávolítása gépi
            földmunkával
          </p>
        </div>

        <div class="flex flex-col items-center md:pr-10">
          <NuxtImg
            src="/img/epuletbontas_icon.png"
            format="webp"
            class="md:w-40 md:h-40 w-auto h-auto transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <p class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            ÉPÜLETBONTÁS
          </p>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Nem biztonságos, régi és feleslegessé vált épületek bontása
          </p>
        </div>
        <div class="flex flex-col items-center">
          <NuxtImg
            src="/img/fold.png"
            format="webp"
            class="md:w-40 md:h-40 w-auto h-auto transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <p class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            FÖLDTÜKÖR KIEMELÉS
          </p>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Térkövezések és útépítések előtti földtükör kiemelése és szóródó
            anyaggal való visszatöltése
          </p>
        </div>
        <div class="flex flex-col items-center md:pt-8 md:pr-10">
          <NuxtImg
            src="/img/alapasas_icon.png"
            format="webp"
            class="md:w-40 md:h-40 w-auto h-auto transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <p class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            ALAPÁSÁS
          </p>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Az általunk földmunkagéppel ásott munkagödör kiásása fogja nyújtani
            épületének alapját
          </p>
        </div>
        <div class="flex flex-col items-center md:pt-8 md:pr-10">
          <NuxtImg
            src="/img/concretesaw.png"
            format="webp"
            class="md:w-40 md:h-40 w-44 h-44 transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <p class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            VÁGÁS ÉS VÉSÉS
          </p>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Mindent átvágunk, a legkeményebb felületeket is, hogy utat
            készítsünk álmaidnak
          </p>
        </div>
        <div class="flex flex-col items-center md:pt-8">
          <NuxtImg
            src="/img/arokasas_icon.png"
            format="webp"
            class="md:w-40 md:h-40 w-auto h-auto transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <p class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            ÁROKÁSÁS
          </p>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Csatorna-, villany-, víz-, gáz- és egyéb vezetékek árkának kiásása,
            valamint vízelvezető árkok és szikkasztók kialakítása
          </p>
        </div>
        <div class="flex flex-col items-center md:col-start-2 md:pr-10">
          <NuxtImg
            src="/img/pince.png"
            format="webp"
            class="md:w-40 md:h-40 w-auto h-auto transform transition duration-300 hover:rotate-3 hover:scale-105"
            alt="Icon"
            style="transform-origin: center"
          />
          <p class="md:mt-4 mt-2 md:text-2xl font-semibold text-center">
            MEDENCE-PINCETÖMB <br />
            KIEMELÉS
          </p>
          <p
            class="md:mt-4 mt-2 md:w-80 w-72 tracking-tighter md:text-lg text-center"
          >
            Medence vagy pince kiemelése földmunkagéppel
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
