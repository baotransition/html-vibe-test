<template>
  <main class="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 lg:pt-40 pb-20 w-full relative z-10">
    <NuxtLink to="/fruits" class="inline-flex items-center text-stone-500 hover:text-stone-900 font-bold mb-8 transition-colors text-lg group">
      <span class="mr-2 text-2xl group-hover:-translate-x-1 transition-transform">&larr;</span> 
      Back to Library
    </NuxtLink>

    <div class="add-card">
      <!-- Left Side: Image Preview -->
      <div class="add-preview-wrapper bg-stone-100 flex items-center justify-center relative overflow-hidden transition-colors duration-500">
        <template v-if="form.img">
          <img 
            :src="form.img" 
            alt="Fruit Preview" 
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/10 to-transparent"></div>
        </template>
        <template v-else>
          <!-- Rainbow blurred effect -->
          <div class="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-40 mix-blend-multiply blur-[80px] pointer-events-none transition-all duration-1000 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 animate-pulse"></div>
          <div class="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] opacity-40 mix-blend-screen blur-[80px] pointer-events-none transition-all duration-1000 bg-gradient-to-tl from-yellow-400 via-orange-500 to-red-500"></div>
          
          <div class="relative z-10 px-6 py-3 rounded-full bg-white/50 backdrop-blur-md shadow-sm border border-white/40">
            <span class="text-stone-600 font-bold tracking-widest uppercase text-xs">Image Preview</span>
          </div>
        </template>
      </div>

      <!-- Right Side: Premium Add Form Content -->
      <div class="add-content relative bg-white">
        <div class="mb-10">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter leading-[0.9] text-stone-900">
            Add Fruit
          </h1>
          <p class="text-xl text-stone-500 font-medium">Contribute to the world's most beautiful fruit library.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-8 flex-grow flex flex-col justify-start">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
            <!-- Row 1: Name and Color Picker -->
            <div class="md:col-span-3 space-y-2">
              <label class="block text-sm font-bold text-stone-400 uppercase tracking-widest">Fruit Name</label>
              <input v-model="form.name" type="text" required placeholder="e.g. Starfruit" class="w-full px-4 py-4 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 font-bold text-xl placeholder-stone-300 focus:bg-white focus:ring-4 focus:ring-stone-900/10 transition-all outline-none hover:border-stone-200" />
            </div>
            
            <div class="md:col-span-2 space-y-2">
              <label class="block text-sm font-bold text-stone-400 uppercase tracking-widest">Theme Color</label>
              <div class="relative">
                <select v-model="form.color" required class="w-full px-4 py-4 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 font-bold text-lg focus:bg-white focus:ring-4 focus:ring-stone-900/10 transition-all outline-none hover:border-stone-200 appearance-none cursor-pointer">
                  <option value="#ef4444">Red</option>
                  <option value="#f97316">Orange</option>
                  <option value="#eab308">Yellow</option>
                  <option value="#84cc16">Lime</option>
                  <option value="#22c55e">Green</option>
                  <option value="#3b82f6">Blue</option>
                  <option value="#8b5cf6">Purple</option>
                  <option value="#ec4899">Pink</option>
                </select>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full shadow-sm border-2 border-white pointer-events-none" :style="{ backgroundColor: form.color }"></div>
              </div>
            </div>
          </div>

          <!-- Image URL -->
          <div class="space-y-4 mt-6">
            <label class="block text-sm font-bold text-stone-400 uppercase tracking-widest">High-Res Image URL</label>
            <input v-model="form.img" type="url" placeholder="https://images.unsplash.com/..." class="w-full px-4 py-4 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 font-bold text-lg placeholder-stone-300 focus:bg-white focus:ring-4 focus:ring-stone-900/10 transition-all outline-none hover:border-stone-200" />
          </div>

          <!-- Facts List Generator -->
          <div class="pt-8 border-t-[3px] border-stone-900/5">
            <div class="mb-8">
              <label class="block text-sm font-bold text-stone-400 uppercase tracking-widest">Fascinating Facts</label>
            </div>
            
            <div class="space-y-5 mb-8">
              <div v-for="(fact, index) in form.facts" :key="index" class="flex items-center gap-4">
                <span class="text-stone-300 font-black shrink-0 w-8 text-2xl text-right">{{ index + 1 }}.</span>
                <input v-model="fact.description" type="text" required placeholder="Enter a cool fact..." class="w-full px-5 py-4 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 font-bold text-lg placeholder-stone-300 focus:bg-white focus:ring-4 focus:ring-stone-900/10 transition-all outline-none hover:border-stone-200" />
                <button v-if="form.facts.length > 1" type="button" @click="removeFact(index)" class="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-rose-100/50 hover:border-rose-200 text-stone-300 hover:text-rose-500 flex items-center justify-center transition-all shrink-0">
                  <span class="text-3xl leading-none">&times;</span>
                </button>
              </div>
            </div>

            <!-- Moved to the bottom with decent spacing -->
            <button type="button" @click="addFact" class="text-stone-500 font-bold text-sm hover:text-stone-900 transition-colors bg-stone-100 hover:bg-stone-200 px-6 py-3 rounded-xl flex items-center gap-2 ml-12">
              <span class="text-2xl leading-none -mt-1">+</span> Add Another Fact
            </button>
          </div>

          <!-- Submit CTA -->
          <div class="mt-auto pt-10">
            <button v-if="!success" type="submit" class="w-full bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-stone-800 transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
              Add to Library
            </button>
            <div v-else class="w-full bg-emerald-50 text-emerald-600 border-2 border-emerald-100 px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 shadow-lg">
               ✓ Successfully added!
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Extract the shared functions needed
const { addNewFruit } = useFruits();
const router = useRouter();

const form = ref({
  name: '',
  color: '#eab308', // Yellow
  img: '',
  facts: [{ description: '' }]
});

const success = ref(false);

const addFact = () => {
  form.value.facts.push({ description: '' });
};

const removeFact = (index: number) => {
  form.value.facts.splice(index, 1);
};

const handleSubmit = () => {
  const stringFacts = form.value.facts.map((f, i) => ({ id: i + 1, description: f.description }));
  
  // Provide generic fruit fallback if empty
  const finalImg = form.value.img.trim() !== '' 
     ? form.value.img 
     : 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop';
  
  addNewFruit({
    name: form.value.name,
    color: form.value.color,
    img: finalImg,
    facts: stringFacts
  });

  success.value = true;
  
  setTimeout(() => {
    router.push('/fruits');
  }, 1200);
};
</script>

<style scoped>
.add-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 2.5rem;
  box-shadow: 0 40px 60px -15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
  width: 100%;
}

.add-preview-wrapper {
  width: 100%;
  height: 400px;
  position: relative;
  flex-shrink: 0;
}

.add-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

@media (min-width: 1024px) {
  .add-card {
    flex-direction: row;
    min-height: 700px;
  }
  .add-preview-wrapper {
    width: 45%;
    height: auto;
    flex-shrink: 0;
  }
  .add-content {
    width: 55%;
    padding: 5rem;
  }
}
</style>
