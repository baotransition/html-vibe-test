<template>
    
    <main class="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 lg:pt-40 pb-20 w-full relative z-10">
      <NuxtLink to="/fruits" class="inline-flex items-center text-stone-500 hover:text-stone-900 font-bold mb-8 transition-colors text-lg group">
        <span class="mr-2 text-2xl group-hover:-translate-x-1 transition-transform">&larr;</span> 
        Back to Library
      </NuxtLink>

      <div v-if="fruit" class="pdp-card">
        <!-- Left Side: Edge to Edge Hero Image -->
        <div class="pdp-image-wrapper bg-stone-100">
          <img 
            :src="fruit.img" 
            :alt="fruit.name" 
            class="pdp-image"
          />
          <!-- Very subtle gradient so the image isn't too stark against the white curve if on mobile -->
          <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/10 to-transparent"></div>
        </div>

        <!-- Right Side: Beautiful Details Overlay -->
        <div class="pdp-content relative" :style="{ backgroundColor: lightenColor(fruit.color) }">
          
          <div class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-black tracking-wide uppercase mb-6 w-max bg-white/60 text-stone-900 shadow-sm backdrop-blur-md">
            Fruit Details
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9]" :style="{ color: fruit.color }">
            {{ fruit.name }}
          </h1>
          
          <div class="mt-4 flex-grow flex flex-col justify-center">
            <h3 class="text-2xl lg:text-3xl font-bold text-stone-900 mb-8 border-b-[3px] border-stone-900/10 pb-5">Fascinating Facts</h3>
            <ul class="space-y-8 lg:space-y-12">
              <li v-for="fact in fruit.facts" :key="fact.id" class="flex items-start group">
                <span class="flex-shrink-0 w-4 h-4 rounded-full mr-6 lg:mr-8 mt-2.5 shadow-md transition-transform duration-300 group-hover:scale-125" :style="{ backgroundColor: fruit.color }"></span>
                <span class="text-xl lg:text-3xl font-medium text-stone-800 leading-relaxed tracking-tight">{{ fact.description }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Error state -->
      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-stone-900 mb-4">Fruit not found</h2>
        <p class="text-stone-600 mb-8">We couldn't find the fruit you were looking for.</p>
        <NuxtLink to="/fruits" class="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all">
          Browse all fruits
        </NuxtLink>
      </div>
      
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { getFruitById } = useFruits();

const fruitId = Number(route.params.id);
const fruit = computed(() => getFruitById(fruitId));

function lightenColor(hex: string) {
  // Use '15' for a super lightweight ~8% opacity tint to avoid overpowering the content
  return hex.startsWith('#') ? hex + '15' : hex;
}
</script>

<style scoped>
/* Hardcoding the split view using pure CSS guarantees responsiveness regardless of Tailwind util status */
.pdp-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 2.5rem;
  box-shadow: 0 40px 60px -15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
  width: 100%;
}

.pdp-image-wrapper {
  width: 100%;
  height: 400px;
  position: relative;
  flex-shrink: 0;
}

.pdp-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.pdp-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .pdp-card {
    flex-direction: row;
    height: 600px; /* Limit height so all PDPs are exactly identical */
  }
  .pdp-image-wrapper {
    width: 50%;
    height: 100%;
  }
  .pdp-content {
    width: 50%;
    padding: 4rem;
  }
}

@media (min-width: 1280px) {
  .pdp-card {
    height: 700px; /* Expand height but keep strictly fixed */
  }
  .pdp-content {
    padding: 6rem;
  }
}
</style>
