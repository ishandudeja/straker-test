<template>
  <CCard width="50">
    <CCardBody>
      <CRow>
        <CCol md="2" class="p-2">
          <CImg
            class="ml-2"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            shape="rounded-circle"
            thumbnail
            width="75"
          />
        </CCol>
        <CCol class="p-2">
          <h3>{{ user.username }}</h3>
          <span class="h6"> {{ user.name }} </span> |

          <span class="h6"> {{ user.email }} </span>
        </CCol>
      </CRow>
    </CCardBody>
    <CCardFooter class="text-right">
      <router-link class="m-1" :to="{ path: '/user/' + user.id }" replace>
        <CIcon
          :content="$options.icons.cilUser"
          width="25"
          style="stroke-width: 1; stroke: rgb(125, 125, 125)"
        />
      </router-link>
      <router-link class="m-1" :to="{ path: '/posts/' + user.id }" replace>
        <CIcon
          :content="$options.icons.cilFeaturedPlaylist"
          width="25"
          style="stroke-width: 1; stroke: rgb(125, 125, 125)"
        />
      </router-link>
    </CCardFooter>
  </CCard>
</template>

<script>
import { cilPencil, cilUser, cilFeaturedPlaylist } from "@coreui/icons";
export default {
  name: "UserComponent",
  props: ["user"],
  icons: { cilPencil, cilUser, cilFeaturedPlaylist },
  };
</script>

<style scoped>
</style>