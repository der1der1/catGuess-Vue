<script setup> 
  import {onMounted, onUnmounted, onUpdated, ref} from "vue";
  import eat_app from "./eat.vue";
  import act_app from "./act.vue";
  import life_app from "./life.vue";
  import weak_app from "./weak.vue";
  
  let eat = ref(false);
  let act = ref(false);
  let life = ref(false);
  let weak = ref(false);
  let act_eat = function(){
    eat.value = true;
    act.value = false;
    life.value = false;
    weak.value = false;
  }
  let act_act = function(){
    eat.value = false;
    act.value = true;
    life.value = false;
    weak.value = false;
  }
  let act_life = function(){
    eat.value = false;
    act.value = false;
    life.value = true;
    weak.value = false;
  }
  let act_weak = function(){
    eat.value = false;
    act.value = false;
    life.value = false;
    weak.value = true;
  }

</script>

<template>
  <main>
  <div id="container">
    <div id="cat">
      <div id="head">
        <img id="catpic" src="..\img\cat_head.jpg" width="40%" height="40%">
        <div id="words"> 
          <h2>貓咪翻牌</h2>
          <h4>上至在寒冷的高山，下至湍急的小溪；杳無人煙的沙漠，熙熙攘攘的城市中都可以在不經意間看到一抹閃過的小精靈。我們對他似乎有所認識，但又如陌生人，今天就讓我們來認識一下生活在我們周遭的小精靈吧！</h4>
        </div>
      </div>
      <div class="row" id="row1">
        <button class="but" id="eat" @click="act_eat">愛吃的食物</button>
        <button class="but" id="act"  @click="act_act">活動的時間</button>
        <button class="but" id="life"  @click="act_life">魔王的血條</button>
        <button class="but" id="weak"  @click="act_weak"> 喵皇的弱點</button>
      </div>
      <!-- <div class="row" id="row2">
        <button class="but" id="life"  @click="act_life">魔王的血條</button>
        <button class="but" id="weak"  @click="act_weak"> 喵皇的弱點</button>
      </div> -->
      <div id="qestion">
        <eat_app v-if = "eat" ></eat_app>
        <act_app v-if = "act"></act_app>
        <life_app v-if = "life"></life_app>
        <weak_app v-if = "weak"></weak_app>
      </div>
      
    </div>
  </div>
  </main>
</template>

<style scoped>
  #container{
    display: flex;
    justify-content: center;
  }
  #cat{
    height: 450px;
    width: 430px;
    margin: 15px;
    padding: 5px;
    background-color: #bbe1ff;
    border: 20px solid #373737;
    border-radius: 7px;
  }
  #head{
    display: flex;
    align-content: space-around;
  }
  #catpic{
    padding-top: 15px;
    margin-right: 5px;
  }
  .row{
    display: flex;
    justify-content: center;
  }
  #qestion{
    padding: 10px;
  }
</style>