<template>
  <section class="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Decorative background blur -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div class="absolute top-32 -left-24 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            New features available
          </div>
          <h1 class="text-5xl lg:text-7xl font-extrabold text-stone-900 tracking-tight mb-8 leading-[1.1]">
            Taste the <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">vibrant world</span> of fruits.
          </h1>
          <p class="text-lg text-stone-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Discover, track, and learn about every fruit imaginable. From the common apple to the exotic dragon fruit, visually stunning details await your exploration.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button class="bg-stone-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-800 transition-all hover:shadow-xl hover:-translate-y-1">
              Start Tracking
            </button>
            <button class="bg-white text-stone-900 border-2 border-stone-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-stone-300 hover:bg-stone-50 transition-all">
              Explore Library
            </button>
          </div>
        </div>
        
        <!-- Image Area -->
        <div class="lg:ml-auto">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-stone-900/10 max-w-[600px] mx-auto group">
            <div class="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay z-10 rounded-3xl"></div>
            <img 
              src="/images/fruit_hero.png" 
              alt="Beautiful collection of exotic fruits" 
              class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
