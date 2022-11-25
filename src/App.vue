<template>
  <main>
    <div class="container">
      <h1>我的待办</h1>
      <TodoAdd :tid="todos.length" @addTodo="addTodo"/>
      <TodoFilter :selected="filter" @change-filter="filter=$event"/>
      <TodoList :filter="filter" :todos="filteredTodos" :deleteTodo="deleteTodo"/>
      </div>
  </main>
</template>

<script setup>
import TodoAdd from "./components/TodoAdd.vue"
import TodoFilter from "./components/TodoFilter.vue"
import TodoList from "./components/TodoList.vue"
import useTodos from '@/composables/useTodos.js'
import useFilteredTodo from '@/composables/useFilteredTodo.js'
// export default {
  // name: 'App',
  // components: {TodoAdd,TodoFilter,TodoList},
  // setup(){
    const{todos,addTodo}=useTodos()
    const {filter,filteredTodos}=useFilteredTodo(todos)
    const deleteTodo=(index)=>{
      console.log(index);
      todos.value.splice(index, 1)
    }
    // return{
    //   deleteTodo,
    //   todos,
    //   addTodo,
    //   filter,
    //   filteredTodos,
    // }
  // }
// }
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica,"PingFang SC","Miscrosoft Yahei",sans-serif;
}

main{
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203,210,248);
}

.container{
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0,0,0,0.15);
  border-radius: 24px;
  padding:48px 28px;
  background-color:rgb(245,246,252);
}

h1{
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
