<template>
  <CNav variant="pills">
    <CNavItem active>Active</CNavItem>
    <CNavItem>Link</CNavItem>
    <CNavItem>Another Link</CNavItem>
    <CNavItem disabled>Disabled</CNavItem>
  </CNav>   
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
