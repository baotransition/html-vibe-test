<script setup>
import { ref } from 'vue'
import PokeCard from '../components/PokeCard.vue'

const caughtPokemons = ref([])
const newPokemonName = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const addPokemon = async () => {
  const name = newPokemonName.value.trim().toLowerCase()
  if (!name) return
  
  errorMessage.value = ''

  // Check if already in list
  if (caughtPokemons.value.some(p => p.name.toLowerCase() === name)) {
    errorMessage.value = `You already have ${name} in your list!`
    newPokemonName.value = ''
    return
  }

  isLoading.value = true
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!response.ok) {
      if (response.status === 404) {
        errorMessage.value = `Pokemon "${name}" does not exist!`
      } else {
        errorMessage.value = 'Something went wrong. Please try again later.'
      }
      return
    }

    const data = await response.json()
    caughtPokemons.value.push(data)
    newPokemonName.value = ''
  } catch (error) {
    console.error('Error fetching pokemon:', error)
    errorMessage.value = 'Failed to fetch Pokemon. Please check your connection.'
  } finally {
    isLoading.value = false
  }
}

const clearError = () => {
  errorMessage.value = ''
}
</script>

<template>
  <div class="poke-view">
    <!-- Custom Alert Overlay to replace problematic window.alert -->
    <Teleport to="body">
      <div v-if="errorMessage" class="alert-overlay" @click.self="clearError">
        <div class="alert-box">
          <h2>Message</h2>
          <p>{{ errorMessage }}</p>
          <button @click="clearError" class="alert-button">OK</button>
        </div>
      </div>
    </Teleport>

    <div class="container">
      <h1 class="title">My Pokémon Collection</h1>
      
      <form class="search-form" @submit.prevent="addPokemon">
        <input 
          v-model="newPokemonName" 
          type="text" 
          placeholder="Enter Pokémon name (e.g. ditto, pikachu)..." 
          class="poke-input"
          :disabled="isLoading"
        >
        <button type="submit" class="add-button" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Add Pokemon' }}
        </button>
      </form>

      <div v-if="caughtPokemons.length === 0" class="empty-state">
        <p>No Pokémon added yet. Type a name above to start your collection!</p>
      </div>

      <div class="poke-grid">
        <PokeCard 
          v-for="pokemon in caughtPokemons" 
          :key="pokemon.id" 
          :pokemon="pokemon" 
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.poke-view {
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Inter', -apple-system, sans-serif;
  background-color: var(--color-background, #fff);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
}

.search-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
}

.poke-input {
  flex: 1;
  max-width: 400px;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 12px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.poke-input:focus {
  border-color: #ff0000;
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.1);
}

.add-button {
  padding: 0 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  background-color: #ff0000;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 0.2);
}

.add-button:hover:not(:disabled) {
  background-color: #cc0000;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 0, 0, 0.3);
}

.add-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.poke-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: #888;
  font-size: 1.2rem;
  background: var(--color-background-soft);
  border-radius: 16px;
  border: 2px dashed #ddd;
}

/* Custom Alert Styles */
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.alert-box {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  text-align: center;
  border: 4px solid #ff0000;
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.alert-box h2 {
  margin-top: 0;
  color: #ff0000;
  font-weight: 800;
}

.alert-box p {
  font-size: 1.1rem;
  margin: 1.5rem 0;
  color: #333;
}

.alert-button {
  background: #ff0000;
  color: white;
  border: none;
  padding: 0.8rem 2.5rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.alert-button:hover {
  background: #cc0000;
  transform: scale(1.05);
}

@keyframes popIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
