<template>
  <div>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="loginData.email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-control" v-model="loginData.password" />
      </div>
      <button type="submit" class="btn btn-primary w-100">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    loginData: {
      email: "",
      password: "",
    },
  }),

  methods: {
    async login() {
      try {
        let res = await this.$auth.loginWith("local", { data: this.loginData });
        // this.$router.push("/");
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>