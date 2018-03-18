<template>
  <div id="formBackground">
    <div id="loginContainer">
        <div id="loginForm">
              <form action="" method="POST" role="form">
              <legend>请登录</legend>

              <div class="form-group text-left has-feedback">
                <label for="">用户名</label>
                  <span class="glyphicon glyphicon-user form-control-feedback"></span>
                  <input type="text" class="form-control" id="username" name="username" placeholder="用户名">
              </div>

              <div class="form-group text-left has-feedback">
                <label for="">密码</label>
                  <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                  <input type="password" class="form-control" id="password" v-model="password" placeholder="密码">
              </div>

              <button type="submit" class="btn btn-primary" v-bind:disabled="canLogin">登录</button>
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
  computed: {
    canLogin: function () {
      if (this.username != "" && this.password != "")
        return false;
      else return true;
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
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
