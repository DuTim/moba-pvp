<!--
 * @Description: 
 * @Author: DuTim
 * @Date: 2020-01-27 20:41:41
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-28 11:50:23
 -->
<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
// import jwtdecode from 'jwt-decode'
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login",this.model);
      localStorage.token=res.data.token
      this.$router.push("/")
      this.$message({
        type:"success",
        message:"登陆成功"
      })
      console.log(res.data);
    }
  }
};
</script>

<style lang="css">
.login-card {
  width: 25rem;
  margin: 8rem auto;
}
</style>

