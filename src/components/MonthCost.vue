<template>
  <div id="monthCost">
      <div id="content">
        <div class="col-xs-7 col-sm-3 col-md-3 col-lg-3">
          <div class="text-left">
            <h4>年份</h4>
          </div>
          <select name="selectYear" id="selectYear" class="form-control" required="required">
            <option value=""></option>
          </select>  
        </div>

        <div class="col-xs-7 col-sm-3 col-md-3 col-lg-3">
          <div class="text-left">
            <h4>月份</h4>
          </div>
          <select name="selectMonth" id="selectMonth" class="form-control" required="required">
            <option value=""></option>
          </select>
        </div>

        <div id="main" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div id="containChart" class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div id="chart" style="width:100%;height:400px;">

            </div>
          </div>
          <div id="detail" class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div style="height:400px;background-color:white;">   
                <legend>账单明细</legend>        
                <ul class="list-group text-left">
                  <li class="list-group-item">月支出：</li>
                  <li class="list-group-item">水电费：</li>
                  <li class="list-group-item">饮用水费：</li>
                  <li class="list-group-item">其他费用：</li>
                  <li class="list-group-item">其他费用包括：</li>
                </ul>
                
                
                
                
                
              </div>
          </div>
        </div>



      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  mounted: function () {
    this.drawPie();
    var myChart = echarts.getInstanceByDom(document.getElementById("chart"));
    window.onresize = function () {
      $("#leftBar").css("height", window.innerHeight); 
      myChart.resize();
    }
  },
  methods: {
    drawPie: function () {
      var myChart = this.echarts.init(document.getElementById('chart'));
      var option = {
        title : {
            text: '月支出',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['水电费','饮用水费','其他费用']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'支出',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'水电费'},
                    {value:310, name:'饮用水费'},
                    {value:234, name:'其他费用'}
                ]
            }
          ]
        };
        myChart.setOption(option);
    }

                    
  }
}





</script>

<style scoped>
#containChart {
  background-color: white;
  margin-top: 20px;
}
#detail {
  margin-top: 20px;
}
#detail ul li {
  border: 0px;
}
</style>
