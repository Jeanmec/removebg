<template>
  <div>
    <Icon name="icon-park-outline:loading" class="loader" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  width: 100px;
  height: 100px;
  color: white;
  animation: spin 1s infinite linear;
  width: 50px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
