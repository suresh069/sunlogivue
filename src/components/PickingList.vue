<script>
import Footer from "./Footer.vue";
import MyHeader from "./MyHeader.vue";
import Location from "./Location.vue";
export default {
  components: {
    Footer,
    MyHeader,
    Location,
  },

};
// console.log(Footer.msg1);
</script>

<template>
  
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
       
        <div class="card">
          <MyHeader msg="ピッキングリスト"/>
          <div class="card-body p-lg-5">
            <div class="text-center">
              <!-- Removed the inner row and adjusted column classes -->
              <!-- <div class="form-group row mb-3">
              
                <label class="col-sm-5 col-form-label" for="location">ロケーション</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="location" autofocus />
                </div>
              </div> -->
            </div>
            <div class="table-responsive">
              <table class="table table-bordered table-sm"> <!-- Added 'table-sm' class for smaller table size -->
                <thead>
                  <tr>
                    
                    <th scope="col">ロケーション</th>
                    <th scope="col">ロット番号</th>
                    <th scope="col">販売期限</th>
                    <th scope="col">商品コード</th>
                    <th scope="col">管理バーコード</th>
                    <th scope="col">商品名</th>
                    <th scope="col">数量</th>
                    <th scope="col">実績数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A-5</td>
                    <td>11-99</td>
                    <td>20220812</td>
                    <td>A-99999</td>
                    <td>T-A-99999</td>
                    <td>コカ・コーラ</td>
                    <td>1</td>
                    <td><input style=width:25px; type="text"></td>
                  </tr>
                  <tr>
                    <td>A-2</td>
                    <td>11-99</td>
                    <td>20220812</td>
                    <td>A-99999</td>
                    <td>T-A-99999</td>
                    <td>コカ・コーラ</td>
                    <td>12</td>
                    <td><input style=width:25px; type="text"></td>

                  </tr>
                  <tr>
                    <td>A-23</td>
                    <td>11-99</td>
                    <td>20220812</td>
                    <td>A-99999</td>
                    <td>T-A-99999</td>
                    <td>コカ・コーラ</td>
                    <td>3</td>
                    <td><input style=width:25px; type="text"></td>

                  </tr>
                  <tr>
                    <td>A-34</td>
                    <td>11-99</td>
                    <td>20220812</td>
                    <td>A-99999</td>
                    <td>T-A-99999</td>
                    <td>コカ・コーラ</td>
                    <td>4</td>
                    <td><input style=width:25px; type="text"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Footer msg1="戻る" msg2="確定" :msg3="'/picking'" :msg4="'/pickingkanryou'" ></Footer>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add your custom CSS styles for the dropdown here */
 /* .custom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}  */


@media (width:240px) and (height:320px) {
  
    .modoru{
        white-space: nowrap;
    }
  .card-body{
    height:fit-content;
  }
}

/* Add custom CSS to adjust the table width */
.table {
  width: 100%; /* Set the table width to 100% */
}

/* Custom CSS to reduce table font size and other properties */
.table-sm td, .table-sm th {
  font-size: 12px; /* Adjust font size as per your preference */
  padding: 0.2rem 0.5rem; /* Adjust padding as needed */
}
</style>
