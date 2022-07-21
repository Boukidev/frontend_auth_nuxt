<template>
  <div>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input type="text" id="fullname" class="form-control" v-model="registerData.fullname" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="registerData.email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-control" v-model="registerData.password" />
      </div>
      <button type="submit" class="btn btn-primary w-100">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    registerData: {
      fullname: "",
      email: "",
      password: "",
    },
  }),

  methods: {
    async register() {
      try {
        const user = await this.$axios.$post("/api/auth/signin", {
          fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password,
        });
        console.log(user);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>