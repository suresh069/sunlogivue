<script setup>

// defineProps({
//   msg: String,
// })
import {ref} from 'vue'; 
const code = ref('');
const codename=ref('')
const lotnumber=ref('');
const expiredday=ref('');
const freestock=ref('');
const shippingfrag=ref('');

const numberPlus=()=>{
 code.value="18980";
 codename.value="A-2";

 lotnumber.value=112;
 expiredday.value="2025/04/30";
 freestock.value=21;
 shippingfrag.value="可";
//  const s= document.getElementById("code") ;
//  s.value="180234";
//  console.log("test");
//  const u=document.getElementById("codename") ;
//  u.value="商品サンプル１";
}




</script>





<template>


<div class="input-group custom-form">
  <span class="input-group-text col-5">商品コード</span>
  <input class="col-7 form-control custom-input" type="text" :value="code" autofocus v-on:keyup.enter="numberPlus" id="code" readonly  ref="locationInput">
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">ロケーション</span>
  <input class="col-7 form-control custom-input" type="text" readonly id="codename" :value="codename">
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">ロット番号</span>
  <input class="col-7 form-control custom-input" type="text" :value="lotnumber">
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">販売期限</span>
  <input class="col-7 form-control custom-input" type="text" id="number" :value="expiredday">
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">出荷フラグ</span>
  <select name="frag" class="col-7 form-control custom-input">
		<option :value="shippingfrag">{{ shippingfrag }}</option>
		
		</select>
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">フリー在庫</span>
  <input class="col-7 form-control custom-input" type="text" :value="freestock">
</div>


</template>

<style scoped>

</style>
