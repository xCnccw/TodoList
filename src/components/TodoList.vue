<template>
      <div class="todo-list">
        <TodoListItem 
        v-for="(todo,index) in todos" 
        :key="todo.id" 
        :index="index"
        :todo-item="todo"
        @change-state="todo.completed=$event.target.checked"
        :deleteTodo="deleteTodo"
        :filter="filter"
        >
      </TodoListItem>
      </div>
</template>
<script setup>
    import TodoListItem from"./TodoListItem.vue"
    // name:"TodoList",
    // components:{TodoListItem},
    import { defineProps } from 'vue'
    // eslint-disable-next-line no-unused-vars
    const props=defineProps(["todos",'deleteTodo','filter'])
</script>
<style scoped>

.todo-list{
  display: gird;
  row-gap: 14px;
}
</style>