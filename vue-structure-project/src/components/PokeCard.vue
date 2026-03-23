<script setup>
import { ref } from 'vue'

const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const isCaught = ref(false)

const toggleCaught = () => {
  isCaught.value = !isCaught.value
}

const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
}

const getTypeColor = (type) => {
  return typeColors[type.toLowerCase()] || '#777'
}
</script>

<template>
  <div 
    class="poke-card" 
    :class="{ 'is-caught': isCaught }" 
    @click="toggleCaught"
  >
    <img 
      v-if="isCaught" 
      src="@/assets/pokeball.png" 
      alt="Caught" 
      class="pokeball-icon"
    >
    
    <div class="image-container">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image">
    </div>
    
    <div class="info">
      <h3 class="name">{{ pokemon.name }}</h3>
      <div class="types">
        <span 
          v-for="typeObj in pokemon.types" 
          :key="typeObj.type.name"
          class="type-label"
          :style="{ backgroundColor: getTypeColor(typeObj.type.name) }"
        >
          {{ typeObj.type.name.toUpperCase() }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poke-card {
  background-color: var(--color-background-soft, #f9f9f9);
  border: 4px solid transparent;
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.poke-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
}

/* Hovering over the type highlights the card - this is handled by the general hover above, 
   but let's make it more specific if needed. The requirement says: 
   "Hovering over the type will highlight the Card."
   This means we might need a specific style for when the type label is hovered. 
*/
.types:hover ~ .poke-card, 
.poke-card:has(.type-label:hover) {
    border-color: #3498db;
    background-color: #ebf5fb;
}

.pokeball-icon {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  z-index: 2;
}

.image-container {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.pokemon-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  margin: 0 0 1.5rem 0; /* Increased margin for better balance */
  color: var(--color-heading);
  text-align: center;
  width: 100%;
}

.types {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.type-label {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.type-label:hover {
    transform: scale(1.1);
}

.is-caught {
    background-color: rgba(255, 255, 255, 0.9);
}

/* Specific requirement: "Hovering over the type will highligh the Card" */
.poke-card:has(.types:hover) {
    box-shadow: 0 0 20px rgba(52, 152, 219, 0.5);
    border-color: #3498db;
}
</style>
