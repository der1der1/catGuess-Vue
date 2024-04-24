<script setup>
  import {onMounted, onUnmounted, onUpdated, ref} from "vue";
  let words = ref("作答結果...")
  let visible = ref(false);
  let show_right = ref(false);
  let wrong = function(){
    words.value = "答錯了!!";
    visible.value = true;
    show_right.value = false;
    }
  let right = function(){
    words.value = "答對了!!";
    visible.value = true;
    show_right.value = true;
    }
</script>

<template>
  <main>
    <div id="head">主子的弱點？</div>
    <div id="answer">
      <button @click="wrong ">  被奴才摸肚子</button>
      <button @click="wrong " > 被其他貓胖揍</button>
      <button @click="wrong " > 長胖無法翻身</button>
      <button @click="right " > 吃飯背後出現小黃瓜</button>
    </div>
    <nav class="show" v-if = visible> {{words}} </nav>
    <p class="show" v-if = show_right> 當貓咪正在專心享用美味佳餚時，突然飯碗後方出現一個小黃瓜，貓咪瞬間變身成了奧運高手，以超音速躍過碗邊，讓你只能看到一道毛毛球飛速穿越房間。或許小黃瓜只是想加入晚餐聚會，但對貓咪而言，它比任何怪異生物都更嚇人！ </p>
    
  </main>
</template>

<style scoped>
  main{
    background-color: azure;
    border: 2px solid #b9c5c5;
    border-radius: 5px;
  }
  #head{
    height: 25px;
    width: 420px;
    display: flex;
    justify-content: center;
  }
  #answer{
    height: 25px;
    padding-bottom: 5px;
    /* border-bottom: 1px solid grey; */
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
  }
  button{
    font-size: 12px;
  }
  .show{
    padding: 0 10px 0 10px;
    /* border: 2px solid red; */
  }
  p{
    font-size: 14px;
  }
</style>