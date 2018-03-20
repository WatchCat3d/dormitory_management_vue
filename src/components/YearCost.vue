<template>
  <div id="yearCost">
    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
      <div class="text-left">
        <h4>年份:</h4>
      </div>
      <select v-model="selectedValue" name="yearSelect" id="yearSelect" class="form-control" required="required">
        <option v-for="item in years" :key="item.id" :value="item">{{item}}</option>
      </select>    
      <div id="chart" style="width: 100%;height:400px;">
        
      </div>  
    </div>
    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
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
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      };
      myChart.setOption(option);
    }
  },
  mounted: function () {
    this.drawChart();
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
</style>

