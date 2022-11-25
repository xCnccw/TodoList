import {ref} from 'vue'
export default function useEmitAddTodo(props,emit){
    console.log(props,emit);
    const todoContent=ref('')
    const show=ref(false)
        const emitAddtodo=()=>{
          if(todoContent.value==""){
            show.value=true
            setInterval(() => {
              show.value=false
            }, 100);
            return
          }
            const todo={
                id:props.tid,
                content:todoContent.value,
                completed:false
            }
        console.log(todo);

            emit("addTodo",todo)
            todoContent.value=""
        }
        return{
            show,
            todoContent,
            emitAddtodo
        }
}