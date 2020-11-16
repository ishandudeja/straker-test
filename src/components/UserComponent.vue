<template>
  <CCard width="50">
    <CCardHeader class="inline p-1">
      <CRow>
        <CCol md="3" class="p-2">
          <CImg
            class="ml-2"
            src="https://www.pinclipart.com/picdir/big/389-3893753_skip-normand-dummy-human-face-clipart.png"
            shape="rounded-circle"
            thumbnail
          />
        </CCol>
        <CCol class="p-2">
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
        location</a
      >
    </CCardFooter>
  </CCard>
</template>

<script>
export default {
  name: "UserComponent",
  props: ["user"],
  // data() {
  //     return {
  //         selectedItem: null
  //     }
  // },
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

<style scoped>
</style>