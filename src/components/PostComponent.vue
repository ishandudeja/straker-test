<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader> Posts </CCardHeader>
        <CCardBody>
          <CDataTable
            class="text-capitalize"
            hover
            striped
            :items="post"
            :fields="fields"
            :items-per-page="10"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center' }"
            @page-change="pageChange"
          >
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import Vue from "vue";
export default {
  name: "Posts",
  data() {
    return {
      fields: [{ key: "title" }],
      activePage: 1,
      loading: true,
      errored: false,
    };
  },
    computed: {
    post() {
      return this.$store.state.posts.filter(
        (p) => p.userId == this.$route.params.userid
      );
    },
  },

  mounted() {
    this.$store.dispatch("getPosts");
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
    rowClicked(item, index) {
      this.$router.push({ path: `${item.userId}/${item.id}` });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
  },
};
</script>
