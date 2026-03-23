<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle'])
</script>

<template>
  <div 
    class="fancy-todo" 
    :class="{ 'is-done': todo.done }"
    @click="$emit('toggle', todo.id)"
  >
    <div class="checkbox">
      <div v-show="todo.done" class="checkmark"></div>
    </div>
    <span class="text">{{ todo.text }}</span>
  </div>
</template>

<style scoped>
.fancy-todo {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background-color: var(--color-background-soft, #ffffff);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  border: 1px solid var(--color-border, transparent);
}

.fancy-todo:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  border-color: var(--color-border-hover, #ccc);
}

.fancy-todo.is-done {
  opacity: 0.6;
}

.fancy-todo.is-done .text {
  text-decoration: line-through;
  color: var(--color-text-muted, #888);
}

.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-border, #e0e0e0);
  border-radius: 6px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  background-color: transparent;
}

.fancy-todo.is-done .checkbox {
  background-color: #4caf50;
  border-color: #4caf50;
}

.checkmark {
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
}

.text {
  font-size: 1.1rem;
  color: var(--color-text, #333);
  transition: all 0.3s ease;
  word-break: break-word;
}
</style>
