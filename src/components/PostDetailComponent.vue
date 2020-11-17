<template>
 
      <div class="d-flex justify-content-center">
      <CSpinner class="mt-5" v-show="!postsData"
      style="width:4rem;height:4rem;"
      color="danger"
      grow
    />

    
      <CCard v-if="postsData">
        <CCardHeader class="h4 text-capitalize"> {{postsData.title}} </CCardHeader>
        <CCardBody class="h5 text-capitalize">
         {{postsData.body}}
        
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
      </div>
   
</template>

<script>

export default {
  name: "PostDetail",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.postsOpened = from.fullPath.includes("posts");
    });
  },
  data() {
    return {
      postsOpened: null,
     
    };
  },
  computed: {
    
    postsData() {
    
      const id = this.$route.params.id;
     const userid = this.$route.params.userid;
     const post=this.$store.state.posts.find((post) => { if(post.userId==userid && post.id==id) return true }  );
      return post;
    
    },
  },
  
  mounted() {
     
       this.$store.dispatch("getPosts");
   
    
  },
  methods: {
    goBack() {
      this.postsOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/posts" });
    },
  },
};
</script>
