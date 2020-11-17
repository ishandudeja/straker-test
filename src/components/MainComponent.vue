<template>
  <div class="c-app">
    <CWrapper>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <CRow>
              <CCol sm="6">
                <UserComponent
                  v-for="user in users"
                  v-bind:user="user"
                  v-bind:key="user.id"
                ></UserComponent>
              </CCol>
              <CCol sm="6">
                <CContainer fluid>
                  <transition name="fade" mode="out-in">
                    <router-view :key="$route.path"></router-view>
                  </transition>
                </CContainer>
              </CCol>
            </CRow>
          </CContainer>
        </main>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import UserComponent from "./UserComponent";
import Vue from "vue";

export default {
  name: "MainComponent",
  components: { UserComponent },
  data() {
    return {
      loading: true,
      errored: false,
    };
  },
  computed: {
    users() {
      return this.$store.getters.allUsers;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  
};
</script>

<style scoped>
</style>