<template>
    
    <main class="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20 w-full relative z-10">
      <NuxtLink to="/fruits" class="inline-flex items-center text-stone-500 hover:text-orange-600 font-medium mb-10 transition-colors">
        <span class="mr-2">&larr;</span> Back to Library
      </NuxtLink>

      <div class="bg-white rounded-[3rem] shadow-xl p-8 md:p-14 border border-stone-100 relative overflow-hidden">
        
        <!-- Decorative bg blur -->
        <div class="absolute -top-32 -right-32 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>

        <div class="mb-10 text-center relative z-10">
          <h1 class="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">Add a Fruit</h1>
          <p class="text-lg text-stone-600">Know a fruit that's missing from our library? Add it to the tracking system here.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-8 relative z-10">
          <!-- Basic Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label for="name" class="block text-sm font-bold text-stone-700">Fruit Name</label>
              <input v-model="form.name" type="text" id="name" required placeholder="e.g. Starfruit" class="w-full px-5 py-3 rounded-xl border-2 border-stone-100 hover:border-stone-200 focus:border-orange-500 focus:ring-0 outline-none bg-stone-50 text-stone-900 font-medium transition-all" />
            </div>

            <div class="space-y-2">
              <label for="color" class="block text-sm font-bold text-stone-700">Theme Color</label>
              <div class="relative flex items-center group">
                <input v-model="form.color" type="color" id="color" required class="w-14 h-14 rounded-xl cursor-pointer border-0 p-1 bg-stone-50 absolute left-1 z-10" />
                <input v-model="form.color" type="text" class="w-full pl-16 pr-5 py-3 rounded-xl border-2 border-stone-100 group-hover:border-stone-200 focus:border-orange-500 focus:ring-0 outline-none bg-stone-50 text-stone-900 font-medium uppercase transition-all" />
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <label for="img" class="block text-sm font-bold text-stone-700">Image URL</label>
            <input v-model="form.img" type="url" id="img" required placeholder="https://images.unsplash.com/..." class="w-full px-5 py-3 rounded-xl border-2 border-stone-100 hover:border-stone-200 focus:border-orange-500 focus:ring-0 outline-none bg-stone-50 text-stone-900 font-medium transition-all" />
          </div>

          <!-- Facts -->
          <div class="pt-6 border-t border-stone-100">
            <div class="flex justify-between items-center mb-4">
              <label class="block text-sm font-bold text-stone-700">Fascinating Facts</label>
              <button type="button" @click="addFact" class="text-orange-500 font-bold text-sm hover:text-orange-700 transition-colors bg-orange-50 px-3 py-1.5 rounded-lg">+ Add Fact</button>
            </div>
            
            <div class="space-y-3">
              <div v-for="(fact, index) in form.facts" :key="index" class="flex items-center gap-3">
                <span class="text-stone-400 font-bold shrink-0 w-4">{{ index + 1 }}.</span>
                <input v-model="fact.description" type="text" required placeholder="Enter a cool fact..." class="w-full px-5 py-3 rounded-xl border-2 border-stone-100 hover:border-stone-200 focus:border-orange-500 focus:ring-0 outline-none bg-stone-50 text-stone-900 font-medium transition-all" />
                <button v-if="form.facts.length > 1" type="button" @click="removeFact(index)" class="w-12 h-12 rounded-xl bg-stone-50 hover:bg-rose-100 text-stone-400 hover:text-rose-600 border border-stone-100 hover:border-rose-200 flex items-center justify-center transition-all shrink-0">
                  <span class="-mt-1 text-2xl">&times;</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <div class="pt-8 flex flex-col sm:flex-row items-center gap-6">
            <button type="submit" class="w-full sm:w-auto bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-colors hover:shadow-lg">
              Add to Library
            </button>
            <div v-if="success" class="flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 px-4 py-2 rounded-xl">
              <span class="text-xl">✓</span> Successfully added
            </div>
          </div>
        </form>
      </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { addNewFruit } = useFruits();
const router = useRouter();

const form = ref({
  name: '',
  color: '#eab308',
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
  
  addNewFruit({
    name: form.value.name,
    color: form.value.color,
    img: form.value.img,
    facts: stringFacts
  });

  success.value = true;
  
  setTimeout(() => {
    router.push('/fruits');
  }, 1200);
};
</script>
