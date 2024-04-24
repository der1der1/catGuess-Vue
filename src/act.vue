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
    <div id="head">主子的狂歡時光？</div>
    <div id="answer">
      <button @click="wrong " > 早上起床開始 </button>
      <button @click="wrong " > ㄡ完大便之後 </button>
      <button @click="right " > 奴才睡覺時候 </button>
      <button @click="wrong " > 播PartyRock時 </button>
    </div>
    <nav class="show" v-if = visible> {{words}} </nav>
    <p class="show" v-if = show_right> 家貓總在午夜瘋狂，或許是他們以為夜晚是貓界的舞台，展現獨特魅力。或者，他們是在對付家中看似無害的玩具和影子，讓我們這些人類一無所知。不管原因如何，看到它們在黑暗中忙碌，我只能靜靜地祈禱：「請讓我們的睡眠得以保持，親愛的家貓。」 </p>
    
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