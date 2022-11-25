<template>      
<transition name="fade">
      <span v-if="show">输入不能为空</span>
</transition>
      <div class="input-add">
        <input type="text" name="todo" v-model="todoContent" @keyup.enter="emitAddtodo"/>
        <button @click="emitAddtodo">
          <i class="plus"></i>
        </button>
      </div>
</template>

<script>
import useEmitAddTodo from '../composables/useEmitAddTodo'
export default {
name: "TodoAdd",
  props: ["tid"],
  setup(props, context) {
    return useEmitAddTodo(props.tid, context.emit);
  },
}
// import useEmitAddTodo from '../composables/useEmitAddTodo'
// import {defineProps,defineEmits,ref }from'vue'
//   const props=defineProps(['tid'])
//   const emit=defineEmits(['addTodo'])
//   const todoContent=ref("")
//   const show=ref(false)
//   useEmitAddTodo(props,emit,show,todoContent)

</script>

<style scoped>

.fade-leave-to{
		opacity: 0;
}
.fade-leave-active{
		transition: opacity 3s;
}
span{
  padding-left:18px ;
  line-height: 50.4px;
  color: #870000;
  opacity: 0.5;
  position: absolute;
  z-index: 2;
}
.input-add{
  position: relative;
  display: flex;
  align-items: center;
}

.input-add input{
  padding: 16px 52px 16px 18px;
  border-radius:48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0,0,0,0.08);
  width: 100%;
  font-size: 16px;
  color:#626262;
}
.input-add button{
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3,#7f95f7);
  border: none;
  outline: none;
  color:white;
  position: absolute;
  right: 0px;
  cursor: pointer;
}
.input-add button:hover{
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3,#7f95f7);
  border: none;
  outline: none;
  color:white;
  position: absolute;
  right: 0px;
  cursor: pointer;
  transform: scale(1.2);
  transition: 0.4s;
}

.input-add .plus {
display: block;
width: 100%;
height: 100%;
background: linear-gradient(#fff,#fff),linear-gradient(#fff,#fff);
background-size: 50% 2px, 2px 50%;
background-position: center;
background-repeat: no-repeat;
}
.input-add .plus:hover {
display: block;
width: 100%;
height: 100%;
background: linear-gradient(#fff,#fff),linear-gradient(#fff,#fff);
background-size: 50% 2px, 2px 50%;
background-position: center;
background-repeat: no-repeat;
transform:scale(1.2);
transition: 0.4s;
}
</style>