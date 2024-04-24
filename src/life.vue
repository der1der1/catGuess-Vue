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
    <div id="head">怪貓的血量？</div>
    <div id="answer">
      <button @click="right " > 9條命</button>
      <button @click="wrong " > 7宗罪</button>
      <button @click="wrong " > 5升血</button>
      <button @click="wrong " > 3顆心</button>
    </div>
    <nav class="show" v-if = visible> {{words}} </nav>
    <p class="show" v-if = show_right> 貓咪的九條命就像是一款奇幻遊戲的存檔點，每當它們遇到危險，就像是按下了重新開始的按鈕。第一條命用來學會跳高，第二條用來研究高處墜落，第三條則用來嘗試挑釁大狗。依此類推，每一條命都是一次驚險冒險的機會，而貓咪總是優雅地在生命數減少之前抓住下一個挑戰。當然，它們可不想浪費任何一條，因為誰知道下一關會是什麼呢？ </p>
    
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
  .show{
    padding: 0 10px 0 10px;
    /* border: 2px solid red; */
  }
  p{
    font-size: 14px;
  }
</style>