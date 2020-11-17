<template>
  <div class="d-flex justify-content-center">
    <CSpinner
      class="mt-5"
      v-show="!user"
      style="width: 4rem; height: 4rem"
      color="danger"
      grow
    />
    <CCard v-if="user" width="50">
      <CCardHeader class="inline p-1">
        <CRow>
          <CCol md="3" class="ml-2 p-2">
            <CImg
              class="ml-2"
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              shape="rounded-circle"
              thumbnail
              height="50"
            />
          </CCol>
          <CCol class="p-4">
            <h3>{{ user.username }}</h3>
            <span class="h6"> {{ user.name }} </span> |

            <span class="h6"> {{ user.email }} </span>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <div class="h6">Street</div>
            {{ user.address.street }}
          </CCol>
          <CCol class="text-right">
            <div class="h6">Suite</div>
            {{ user.address.suite }}
          </CCol>
        </CRow>
        <hr />
        <CRow>
          <CCol>
            <div class="h6">City</div>
            {{ user.address.city }}
          </CCol>
          <CCol class="text-right">
            <div class="h6">Zipcode</div>
            {{ user.address.zipcode }}
          </CCol>
        </CRow>
        <!-- {{user.address}} -->
      </CCardBody>
      <CCardFooter>
        <a v-bind:href="getLocationUrl(user.address.geo)" target="_blank">
          <CIcon
            :content="$options.icons.cilLocationPin"
            width="25"
            style="stroke-width: 1; stroke: rgb(125, 125, 125)"
          />
        </a>
      </CCardFooter>
    </CCard>
  </div>
</template>

<script>
import { cilLocationPin } from "@coreui/icons";
export default {
  name: "UserDetail",
  icons: { cilLocationPin },

  computed: {
    user() {
      const id = this.$route.params.id;
      const user = this.$store.state.users.find((user, index) => user.id == id);
      return user;
    },
  },
  mounted() {
    if (!this.$store.state.users) this.$store.dispatch("getUsers");
  },
  methods: {
    getLocationUrl(geo) {
      return (
        "https://www.google.com/maps/search/?api=1&query=" +
        geo["lat"] +
        "," +
        geo["lng"]
      );
    },
  },
};
</script>
