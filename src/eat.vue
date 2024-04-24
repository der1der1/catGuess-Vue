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
    <div id="head">主子最愛的食物？</div>
    <div id="answer">
      <button @click="wrong ">  孔雀牌香酥脆</button>
      <button @click="right " > 不加水的罐罐</button>
      <button @click="wrong " > 台糖水池鯉魚</button>
      <button @click="wrong " > 滷味店素肚子</button>
    </div>
    <nav class="show" v-if = visible> {{words}} </nav>
    <p class="show" v-if = show_right> 貓咪是肉食性動物，其食物種類相當多元。包含鳥類、魚類、以及陸地上諸多哺乳類動物。在長期與人類共處之下，貓咪的腸胃已能適應人類所給予的熟食，並且能夠藉此吸收充足的影養。在現代家貓當的飼養習慣中，許多人會選擇給予貓罐頭，而在餵食這些貓罐頭時請記得不要加入太多的水喔！不然你家主子可是會生氣的。 </p>
    
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