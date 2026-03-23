<script setup>
import { ref } from 'vue'
import TodoItem from '../components/TodoItem.vue'

const todos = ref([
  { id: 1, text: 'Buy groceries', done: false },
  { id: 2, text: 'Finish the Vue project', done: true },
  { id: 3, text: 'Read a book', done: false }
])

const newTodoText = ref('')

const toggleTodo = (id) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}

const addTodo = () => {
  const text = newTodoText.value.trim()
  if (text) {
    todos.value.push({
      id: Date.now(),
      text,
      done: false
    })
    newTodoText.value = ''
  }
}
</script>

<template>
  <div class="todo-page">
    <div class="todo-container">
      <h1 class="title">Fancy Todo List</h1>
      
      <form class="add-todo-form" @submit.prevent="addTodo">
        <input 
          v-model="newTodoText" 
          type="text" 
          placeholder="What needs to be done?" 
          class="todo-input"
        >
        <button type="submit" class="add-button">Add</button>
      </form>

      <div class="todo-list">
        <TodoItem 
          v-for="todo in todos" 
          :key="todo.id" 
          :todo="todo" 
          @toggle="toggleTodo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-page {
    background-color: lightgreen;
    border-radius: 12px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.todo-container {
  width: 100%;
  max-width: 600px;
}

.title {
  font-size: 2.5rem;
  color: var(--color-heading, #2c3e50);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
}

.add-todo-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.todo-input {
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid var(--color-border, transparent);
  border-radius: 12px;
  background-color: var(--color-background-soft, #ffffff);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  outline: none;
  color: var(--color-text, #333);
}

.todo-input:focus {
  border-color: #3498db;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.1);
}

.add-button {
  padding: 0 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: green;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.2);
}

.add-button:hover {
  background-color: darkgreen;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(52, 152, 219, 0.3);
}

.add-button:active {
  transform: translateY(0);
}

.todo-list {
  display: flex;
  flex-direction: column;
}
</style>
