<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader> Users </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="10"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center' }"
            @page-change="pageChange"
          >
            <!-- <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
                </CBadge>
              </td>
            </template> -->
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import postsData from "./PostsData";
export default {
  name: "Posts",
  data() {
    return {
      items: postsData.filter((p) => p.userId == this.$route.params.id),
      fields: [
        { key: "userId" },
        { key: "id" },
        { key: "title" },
        { key: "body" },
      ],
      activePage: 1,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      },
    },
  },
  methods: {
    // getBadge (status) {
    //   switch (status) {
    //     case 'Active': return 'success'
    //     case 'Inactive': return 'secondary'
    //     case 'Pending': return 'warning'
    //     case 'Banned': return 'danger'
    //     default: 'primary'
    //   }
    //},
    rowClicked(item, index) {
      console.log(item.userId);
      this.$router.push({ path: `${item.userId}/${index + 1}` });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
  },
};
</script>
