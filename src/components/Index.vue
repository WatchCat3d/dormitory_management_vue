<template>
    <div id="index" class="container-fluid">
        <div class="row">
            <div id="leftBar" class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <ul class="nav nav-stacked">
                    <li>
                        <a href="http://localhost:3000/#/index">主页</a>
                    </li>
                </ul>
                <div id="empty">

                </div>
            </div>

            <div id="headBar" class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                <div id="bk" class="jumbotron">
                    <h2>欢迎登陆</h2>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: "Index"
}



</script>

<style scoped>
    #index {
        border: 0;
    }
    #headBar {
        padding: 0;
    }
    #leftBar {
        padding: 0;
        background-color: #2D323E;
    }
    #leftBar ul :hover{
        background-color: #282D38;
    }
    #empty {
        background-color: #2D323E;
        height: 800px;
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
</style>
