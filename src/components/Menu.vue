<script>
import Footer from "../components/Footer.vue";
import MyHeader from "../components/MyHeader.vue";

export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
  },
};

</script>

<template>
  <div class="container ">
   
   <div class="row">
     
     <div class="col-sm-12 col-md-6 offset-md-3">
       <div class="card my-10 custom-card">
         <MyHeader msg="メニュー"/>
         <div class="card-body p-lg-5">
         
           <div class="text-center">
             <!-- Removed the inner row and adjusted column classes -->
             <div class="form-group row mb-3 border border-primary p-3">
               <router-link to="/nyuuko" style="text-decoration:none;">入庫新規登録</router-link>
             </div>
             <div class="form-group row mb-3 border border-primary p-3">
              <router-link to="/moveLocation" style="text-decoration:none;">ロケーション移動</router-link>
             </div>
             <div class="form-group row mb-3 border border-primary p-3">
              <router-link to="/picking" style="text-decoration:none;">ピッキング</router-link>
             </div>
             <div class="form-group row mb-3 border border-primary p-3">
              <router-link to="/syukainfo" style="text-decoration:none;">出荷検品</router-link>
             </div>
             <!-- <div class="form-group row mb-3 border border-primary p-3">
              <router-link to="/syohin" style="text-decoration:none;">棚卸</router-link>
             </div> -->
             <div class="form-group row mb-3 border border-primary p-3">
              <router-link to="/zaiko" style="text-decoration:none;">在庫照会</router-link>
             </div>
           </div>
         </div>
         <Footer msg1="戻る" msg2="確定" msg3="/dropdown"></Footer>
       </div>
       
     </div>
     
   </div>
  
 </div>
</template>


<style scoped>

@media (width:240px) and (height:320px) {
  
  .card-body{
 
    height: auto;
  }
}

</style>