<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2">
          <span class="text-3xl">🥝</span>
          <span class="text-2xl font-extrabold text-stone-900 tracking-tight">Fruit Tracker</span>
        </div>
        
        <!-- Desktop Nav -->
        <div class="hidden md:flex space-x-8 items-center">
          <a href="#" class="text-stone-600 hover:text-stone-900 font-medium transition-colors">Explore</a>
          <a href="#" class="text-stone-600 hover:text-stone-900 font-medium transition-colors">Features</a>
          <a href="#" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5">Add a Fruit</a>
        </div>
      </div>
    </div>
  </nav>
</template>
