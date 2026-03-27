<template>
    
    <!-- Adjusted top padding to securely clear the fixed navigation height -->
    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20 w-full relative z-10">
      <div class="mb-16 text-center max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 tracking-tight">Fruit Library</h1>
        <p class="text-xl text-stone-600">Discover and learn about a wide variety of delicious fruits from around the world. Select any fruit to explore its unique details.</p>
      </div>

      <div class="fruit-grid">
        <NuxtLink v-for="fruit in demoFruits" :key="fruit.id" :to="`/fruits/${fruit.id}`" class="block h-full outline-none focus-visible:ring-4 focus-visible:ring-orange-400 rounded-[2rem]">
          <FruitCard :fruit="fruit" />
        </NuxtLink>
      </div>
    </main>
</template>

<script setup lang="ts">
const { getDemoFruits } = useFruits();
const demoFruits = getDemoFruits();
</script>

<style scoped>
/* Hardcoding the grid using pure CSS to guarantee multiple columns and gap spacing, overriding any Tailwind compilation bugs */
.fruit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 600px) {
  .fruit-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.5rem;
  }
}
</style>
