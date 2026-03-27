<template>
  <div 
    class="relative group w-full rounded-[2rem] p-4 flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl border border-white/60"
    :style="{ backgroundColor: lightenColor(fruit.color), aspectRatio: '1 / 1' }"
  >
    <!-- Background Blur Decorative Element -->
    <div 
      class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none"
      :style="{ backgroundColor: fruit.color }"
    ></div>

    <!-- Image wrapper: explicitly defining equal w/h guarantees a perfect circle -->
    <div class="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-3 flex-shrink-0 z-10 transition-transform duration-500 group-hover:scale-105" style="border-radius: 50%;">
      <img 
        :src="fruit.img" 
        :alt="fruit.name" 
        class="absolute inset-0 w-full h-full object-cover shadow-md border-[3px] border-white/80" 
        style="border-radius: 50%;"
      />
    </div>
    
    <!-- Title -->
    <div class="relative z-10 text-center px-1 w-full">
      <h3 class="text-sm sm:text-base md:text-xl font-bold text-stone-900 leading-tight">
        {{ fruit.name }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type Fact = { id: number; description: string; };
type Fruit = { id: number; img: string; name: string; color: string; facts: Fact[]; };

defineProps({
  fruit: {
    type: Object as PropType<Fruit>,
    required: true
  }
});

function lightenColor(hex: string) {
  return hex.startsWith('#') ? hex + '25' : hex;
}
</script>
