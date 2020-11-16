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

export default {
  name: "MainComponent",
  components: { UserComponent },
  // props: ['items'],
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
      ],
    };
  },
  // methods: {
  //     onItemSelected(item) {
  //         // this.selectedItem = item;
  //     }
  // }
};
</script>

<style scoped>
</style>