<script>
import Footer from "./Footer.vue";
import MyHeader from "./MyHeader.vue";

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
         <MyHeader msg="ロケーション移動"/>
         <div class="card-body p-lg-5">
         
           <div class="text-center">
             <!-- Removed the inner row and adjusted column classes -->
             <div class="form-group row mb-3 border border-primary p-3">
               <router-link to="/moveSingleLocationBefore" style="text-decoration:none;">ロケーション移動</router-link>
             </div>
             <div class="form-group row mb-3 border border-primary p-3">
              <router-link to="/ikatsuLocationIdou" style="text-decoration:none;">一括ロケーション移動</router-link>
             </div>

           </div>
         </div>
         
       </div>
       <Footer msg1="戻る" msg2="確定"  msg3="/menu"></Footer>
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