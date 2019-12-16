<template>
  <div id="login">
    <p>
      <input id="username" type="text" placeholder="用户名" v-model="usr"></input>
    </p>
    <p>
      <input id="password" type="text" placeholder="密码" v-model="psw"></input>
    </p>
    <p>
      <button v-on:click="post">SIGN IN</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data: function() {
    return {
      usr: "",
      psw: ""
    };
  },
  methods: {
    post: function() {
      this.$http.post("/apis/login",
        {
          username:this.usr,
          password:this.psw
        },
        {
          withCredentials:true,
          emulateJSON: true
        }
        ).then(
        function(res) {
          if(res.ok) {
            this.$router.push({path:"/Search"});
          }
        },
        function() {
          alert("error");
        });
    },

  }
}
</script>
