<template>
  <nav
    id="header"
    :class="header"
    class="fixed w-full bg-white z-30 top-0 text-black"
  >
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-1"
    >
      <div class="pl-4 md:pl-32 flex items-center">
        <a
          class="toggleColour no-underline hover:no-underline font-bold text-xl lg:text-2xl"
          href="#"
          @click="toggleHidden"
        >
          <svg
            fill="#000000"
            class="h-6 fill-current inline"
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xml:space="preserve"
          >
            <path
              d="M18,22H6c-2.2,0-4,1.8-4,4s1.8,4,4,4h12c2.2,0,4-1.8,4-4S20.2,22,18,22z M7.9,26.4c0,0.1-0.1,0.2-0.2,0.3
	C7.5,26.9,7.3,27,7,27c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1
	c-0.1-0.1-0.2-0.2-0.2-0.3C6,26.3,6,26.1,6,26c0-0.3,0.1-0.5,0.3-0.7c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1
	c0.1,0,0.1,0,0.2-0.1c0.3-0.1,0.7,0,0.9,0.3C7.9,25.5,8,25.7,8,26C8,26.1,8,26.3,7.9,26.4z M12.9,26.4c0,0.1-0.1,0.2-0.2,0.3
	c0,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0-0.2,0c-0.3,0-0.5-0.1-0.7-0.3
	c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1-0.1-0.3-0.1-0.4c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.6-0.3,0.9-0.3c0.1,0,0.1,0,0.2,0.1
	c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2
	C13,26.1,13,26.3,12.9,26.4z M17.7,26.7c0,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0-0.2,0
	c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1C16.1,26.5,16,26.3,16,26c0-0.1,0-0.1,0-0.2
	c0-0.1,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1
	c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2
	c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2C18,26.3,17.9,26.5,17.7,26.7z"
            />
            <path
              d="M30,14c0-0.1,0-0.2-0.1-0.3c0,0,0,0,0,0l-5-11C24.7,2.2,24.4,2,24,2h-3c0,0,0,0,0,0h-4c-0.2,0-0.3,0-0.5,0.1
	c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0v0c-0.1,0.1-0.2,0.1-0.2,0.2l-6,8c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0.1c0,0.1-0.1,0.2-0.1,0.3
	c0,0,0,0,0,0v4H8c-2.8,0-5,2.2-5,5c0,0.6,0.4,1,1,1h15c0.6,0,1-0.4,1-1v-4c0-0.1,0-0.2-0.1-0.4c0,0,0-0.1-0.1-0.1
	c0-0.1,0-0.1-0.1-0.2l-3.7-4.6L17.8,4h2.6L25,14.1l-2,0.6V14c0-0.6-0.4-1-1-1s-1,0.4-1,1v2c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2
	c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1l1.1,1.7c0.7,1.1,2,1.8,3.3,1.8c1.9,0,3.5-1.3,3.9-3.2l0.5-2.6C30,14.1,30,14.1,30,14
	C30,14,30,14,30,14z M12,12h2.5l2.4,3h-0.4c-0.8,0-1.6-0.5-2-1.4c-0.2-0.4-0.5-0.6-0.9-0.6H12V12z M14.8,7.6L14.2,10H13L14.8,7.6z
	 M22.6,4h0.8l4.3,9.4l-0.7,0.2L22.6,4z"
            />
          </svg>
          Karczagi-89 Kft.
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          @click="toggleHidden"
          id="nav-toggle"
          class="flex items-center p-1 text-black hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black lg:p-0 z-20"
        :class="{ hidden: isHidden }"
        id="nav-content"
      >
        <ul class="lg:flex justify-end flex-1 items-center gap-4">
          <li class="mr-3">
            <a
              class="inline-block hover:scale-105 transition tracking-wide duration-100 ease-in-out font-bold no-underline hover:underline py-2 px-4"
              href="#gepi-foldmunkak"
              @click.prevent="smoothScroll('gepi-foldmunkak')"
              @click="toggleHidden"
              >Gépi földmunkák</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block hover:scale-105 tracking-wide transition duration-100 ease-in-out font-bold toggleColour no-underline hover:underline py-2 px-4"
              href="#"
              @click="toggleHidden"
              >Kültéri munkák kivitelezése</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block hover:scale-105 transition tracking-wide duration-100 ease-in-out font-bold toggleColour no-underline hover:underline py-2 px-4"
              href="#epitoanyag-kereskedelem"
              @click.prevent="smoothScroll('epitoanyag-kereskedelem')"
              @click="toggleHidden"
              >Építőanyag kereskedelem</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block hover:scale-105 transition tracking-wide duration-100 ease-in-out font-bold toggleColour no-underline hover:underline py-2 px-4"
              href=">#gepeink"
              @click.prevent="smoothScroll('gepeink')"
              @click="toggleHidden"
              >Gépeink</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block hover:scale-105 transition tracking-wide duration-100 ease-in-out font-bold toggleColour no-underline hover:underline py-2 px-4"
              href=">#kapcsolat"
              @click.prevent="smoothScroll('kapcsolat')"
              @click="toggleHidden"
              >Kapcsolat</a
            >
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";

const isHidden = ref(true);

const toggleHidden = () => {
  isHidden.value = !isHidden.value;
};

const smoothScroll = (targetId) => {
  const target = document.querySelector(`#${targetId}`);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.error(`Element with ID '${targetId}' not found.`);
  }
};
</script>
