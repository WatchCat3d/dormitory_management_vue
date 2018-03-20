<template>
  <div id="yearCost">
    <div id="containChart" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="text-left">
        <h4>年份:</h4>
      </div>
      <select v-model="selectedValue" name="yearSelect" id="yearSelect" class="form-control" required="required">
        <option v-for="item in years" :key="item.id" :value="item">{{item}}</option>
      </select>    
      <div id="chart" style="width: 100%;height:400px;">     

      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selectedValue: "2018"
    }
  },
  methods: {
    drawChart: function () {
      var myChart = this.echarts.init(document.getElementById('chart'));
      var option = {
          title: {
              text: '一年支出情况'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
              data:['支出']
          },
          calculable : true,
          xAxis: {
              name: "月份/月",
              type : 'category',
              boundaryGap : false,
              data: ["1","2","3","4","5","6","7","8","9","10","11","12"]
          },
          yAxis: {
              name: "支出/元",
              type : 'value'
          },
          series: [{
              name: '支出',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20]
          }]
      };
      myChart.setOption(option);
    }
  },
  mounted: function () {
    this.drawChart();
    var myChart = echarts.getInstanceByDom(document.getElementById("chart"))
    window.onresize = function () {
      $("#leftBar").css("height", window.innerHeight); 
      myChart.resize();
    }
  },
  computed: {
    years: function () {
      var result = [];
      var date = new Date();
      for (var i = 2016; i <= date.getFullYear(); i++) {
        result.push(i);
      }
      return result;
    }
  }
}

</script>

<style scoped>
  #yearSelect {
    width: 200px;
  }
  #chart {
    margin-top: 30px;
    background-color: white;
  }
</style>

