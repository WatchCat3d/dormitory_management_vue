<template>
    <div id="index" class="container-fluid">
        <div class="row">
            <div id="leftBar">
                <ul class="nav nav-pills nav-stacked">
                    <li class="active">
                        <a href="#">主页</a>
                    </li>
                </ul>
            </div>

            <div id="headBar">
                <div id="bk" class="jumbotron">
                    <h2>欢迎登陆</h2>
                </div>
                <div id="content">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="background-color:red;">
                        adf
                    </div>

                    <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11"style="background-color:blue;">
                        h
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: "Index",
  created: function () {
      
  }
}




window.addEventListener("load", function () {
    window.onresize = function () { 
        if (innerWidth > 700) {
            $("#headBar").width(innerWidth - 176);
            $("#headBar").css("margin-left", 159);
            $(".nav-pills").width(159);
        }
        else if (innerWidth <= 700) {
  
            $("#headBar").width(innerWidth - 76);
            $("#headBar").css("margin-left", 59);
            $(".nav-pills").width(59);
        }
    };
});


</script>

<style scoped>
    #index {
        border: 0;
    }
    #leftBar {
        padding: 0;
        float: left;
        position: fixed;
        top: 0px;
        left: 0px;
    }
    .nav-pills {
        width: 159px;
    }
    #headBar {
        padding: 0;
        margin-left: 159px;
    }
    #bk {
        background-image: url("../assets/loginBackground.jpg");
        background-size: 100%, 100%;
        background-position-y: -50px;
        padding-top: 80px;
        padding-bottom: 20px;
    }
    #index {
        background-color: #F5F5F5;
    }
    #bk h2 {
        text-align: left;
    }
    #content {
        height: 1500px;
    }
</style>
