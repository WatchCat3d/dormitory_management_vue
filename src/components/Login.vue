<template>
  <div id="formBackground">
    <div id="loginContainer">
        <div id="loginForm">
              <form action="" method="POST" role="form">
              <legend>请登录</legend>

              <div class="form-group text-left has-feedback">
                <label for="">用户名</label>
                  <span class="glyphicon glyphicon-user form-control-feedback"></span>
                  <input type="text" class="form-control" id="username" name="username" v-model="username" placeholder="用户名">
              </div>

              <div class="form-group text-left has-feedback">
                <label for="">密码</label>
                  <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                  <input type="password" class="form-control" id="password" v-model="password" placeholder="密码">
              </div>

              <button type="submit" class="btn btn-primary" v-on:click.prevent="submit" v-bind:disabled="canLogin">登录</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: "",
      password: ""
    }
  },
  mounted: function () {
    window.onresize = function () {
      $("#formBackground").css("height", "100%");
    }
    window.onmousewheel = function () {
      $("#formBackground").css("height", document.documentElement.scrollHeight);
    }
  },
  methods: {
    submit: function () {
      
      Bmob.initialize("e8afd2eeb77f297a661fdc1052443b81", "0edc378465f184f1a3d58a210d3cd211");

      var countUsername = function (tempname) {
        return new Promise(function (resolve, reject) {
          var Users = Bmob.Object.extend("Users");
          var query = new Bmob.Query(Users);
          query.equalTo("username", tempname); 
          // 查询所有数据
          query.find({
              success: function(results) {
                  resolve(results.length);
              },
              error: function(error) {
                  alert("查询失败: " + error.code + " " + error.message);
              }
          });       
        })
      }

      var countPassword = function (tempname, tempword) {
        return new Promise(function (resolve, reject) {
          var Users = Bmob.Object.extend("Users");
          var query = new Bmob.Query(Users);
          query.equalTo("username", tempname); 
          query.equalTo("password", tempword); 
          // 查询所有数据
          query.find({
              success: function(results) {
                  resolve(results.length);
              },
              error: function(error) {
                  alert("查询失败: " + error.code + " " + error.message);
              }
          });       
        })
      }

      var count = async function (tempname, tempword, router) {
        var result1 = await countUsername(tempname);
        if (result1 == 0) {
          alert("用户名不存在");
        }
        else {
          var result2 = await countPassword(tempname, tempword);
          if (result2 == 0) {
            alert("密码错误");
          }
          else {
            router.push({name:'IndexContent',params:{username: tempname}});
          }
        }     
      }

      count(this.username, this.password, this.$router);
      
    }
  },
  computed: {
    canLogin: function () {
      if (this.username != "" && this.password != "") {
        return false;
      }
      else {
        return true;
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#loginForm {
  margin: auto;
  width: 300px;
  text-align: center;
  background-color: white;
}
#loginForm button {
  width: 300px;
}
#loginContainer {
  margin: auto;
  width: 400px;
  height: 400px;
  padding-top: 60px;
  background-color: white;
  position: relative;
  top: 15%;
}
#formBackground {
  background-image: url('../assets/loginBackground.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
