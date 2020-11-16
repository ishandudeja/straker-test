<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          User id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import postsData from './PostsData'
export default {
  name: 'Post',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.postsOpened = from.fullPath.includes('posts')
    })
  },
  data () {
    return {
      postsOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key',  _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    postsData () {
      const id = this.$route.params.id
      const post = postsData.find((user, index) => index + 1 == id)
      const postDetails = post ? Object.entries(post) : [['id', 'Not found']]
      return postDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.postsData.filter(param => param.key !== 'username')
    },
    username () {
      return this.postsData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.postsOpened ? this.$router.go(-1) : this.$router.push({path: '/posts'})
    }
  }
}
</script>
