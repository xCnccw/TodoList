<template>
        <div class="todo-item" :class="{done:todoItem.completed}">
          <label>
            <input type="checkbox" 
            :checked="todoItem.completed"
            @click="$emit('change-state',$event)"
            />
            {{todoItem.content}}
            <span class="check-button"></span>
          </label>
          <button  v-show="filter=='all'" @click="delTodo"><i class="plus"></i></button>
        </div>
</template>

<script setup>
    import { defineProps } from 'vue'
    const props=defineProps(["todoItem","deleteTodo","index","filter"])
    const delTodo=()=>{props.deleteTodo(props.index)}
</script>

<style lang="less">
.todo-item{
  background: white;
  padding: 16px;
  border-radius: 8px;
  color:#626262;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
}
.todo-item:hover{
        button{
        width: 34.5px;
        height: 34.5px;
        margin-right: 5.75px;
        border-radius: 8px;
        background: linear-gradient(#c0a5f3,#7f95f7);
        opacity: 0.7;
        border: none;
        outline: none;
        color:white;
        position: absolute;
        right: 0px;
        cursor: pointer;
        line-height: 34.5px;
        text-align: center;
        display: flex;
        }
}
.todo-item button{
display: none;
}
.todo-item label{
  position: relative;
  display: flex;
  align-items: center;
}

.todo-item.done label{
  text-decoration: line-through;
  font-style: italic;
}

.todo-item label span.check-button{
  position: absolute;
  top:0;
}
.todo-item label span.check-button::before,
.todo-item label span.check-button::after{
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before{
  border: 1px solid #b382f9;
}
.todo-item label span.check-button::after{
  transform: 0.4s;
  background: #b382f9;
  transform:translate(1px,1px)scale(0.8);
  opacity: 0;
}

.todo-item input{
  margin-right: 16px;
  opacity: 0;
}
.todo-item input:checked + span.check-button::after{
  opacity: 1;
}
.todo-item .plus {
display: block;
width: 100%;
height: 100%;
background: linear-gradient(#fff,#fff),linear-gradient(#fff,#fff);
background-size: 50% 2px, 2px 50%;
background-position: center;
background-repeat: no-repeat;
transform:rotate(45deg);
}
</style>