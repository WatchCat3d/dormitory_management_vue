<template>
    <div id="index" class="container-fluid">
        <div class="row">
            <div id="leftBar" class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <ul class="nav nav-pills nav-stacked">
                    <li :class="{'active': activeClass[0]}" v-on:click="setActive0">
                        <router-link to="/index/indexContent">主页</router-link>
                    </li>
                    <li :class="{'active': activeClass[1]}" v-on:click="setActive1">
                        <router-link to="/index/yearCost">年支出</router-link>
                    </li>
                    <li :class="{'active': activeClass[2]}" v-on:click="setActive2">
                        <router-link to="/index/monthCost">月支出</router-link>
                    </li>
                    <span>
                        宿舍费剩余
                    </span>
                    <li id="logoutButton">
                        <a href="#">登出</a>
                    </li>
                </ul>
            </div>

            <div id="headBar" class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                <div id="bk" class="jumbotron">
                    <h2>欢迎登陆</h2>
                </div>
                <div id="content">
                    <router-view></router-view>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: "Index",
  data: function () {
      return {
          activeClass: [true, false, false]
      }
  },
  created: function () {
      if (typeof(this.$route.params.username) != "string" || 
        this.$route.params.username == "") {
        this.$router.replace({name: "Login"});
      }  
  },
  methods: {
      setActive0: function () {
        for (var i = 0; i < this.activeClass.length; i++) {
            this.activeClass[i] = false;
        }      
        this.activeClass[0] = true;
      },
      setActive1: function () {
        for (var i = 0; i < this.activeClass.length; i++) {
            this.activeClass[i] = false;
        }      
        this.activeClass[1] = true;
      },
      setActive2: function () {
        for (var i = 0; i < this.activeClass.length; i++) {
            this.activeClass[i] = false;
        }      
        this.activeClass[2] = true;
      },
  },
  mounted: function () {
    $("#index").css("height", window.innerHeight); 
    window.onresize = function () {
        $("#index").css("height", window.innerHeight); 
    }
    window.onmousewheel = function () {
        $("#index").css("height", document.documentElement.scrollHeight); 
    }
  },
  computed: {
  }
}


</script>

<style scoped>
    #index {
        border: 0;
        background-color: #F5F5F5;
    }
    #leftBar {
        padding: 0;
        height: 973px;
        border-right: 1px solid darkblue;
        background-color: white;
        position: fixed;
    }
    #leftBar li {
        border-bottom: 1px solid #337AB7;
        border-radius: 10%;
    }
    #leftBar span {
        display: inline-block;
        margin-top: 10px;
        font-size: 13pt;
        color: red;
    }
    .nav-pills {
        width: 100%;
    }
    #headBar {
        padding: 0;
        margin-left: 8.3%;
    }
    #bk {
        background-image: url("../assets/loginBackground.jpg");
        background-size: 100%, 100%;
        background-position-y: -50px;
        padding-top: 80px;
        padding-bottom: 20px;
    }
    #bk h2 {
        text-align: left;
    }
    #logoutButton {
        position: fixed;
        width: 8.2%;
        bottom: 0%;
        border-top: 1px solid #337AB7;
    }
</style>
