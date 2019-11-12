<template>
  <div id="root">
        <input v-model="work"/>
        <button @click="handleSubmit">加入要作的清單</button>
        <div>{{work}}</div>
        <ul>
            <!-- 子組件 -->
            <todo-item v-for="(item,index) of list"
            :key="index"
            :content="item"
            :index="index"
            @delete="handleDelete"
            >
            </todo-item>            
        </ul>
      </div>
</template>

<script>
    
export default {
    name : 'root'
}
</script>