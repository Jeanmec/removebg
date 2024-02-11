<template>
  <div>
    <nav>
      <NuxtLink to="/"><Icon name="ph:house-bold" /></NuxtLink>
      <NuxtLink to="/encode-image-base64"
        ><Icon name="bx:barcode-reader" /> Encode Base64 image</NuxtLink
      >
      <NuxtLink to="/convert-base64-to-image">
        <Icon name="iconoir:scan-barcode" />
        Decode Base64 image
      </NuxtLink>
      <NuxtLink to="/remove-background">
        <Icon name="fluent:video-background-effect-20-filled" />
        Remove image background
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  width: 60%;
  display: flex;
  justify-content: space-around;
  column-gap: 15px;
  backdrop-filter: blur(5px);
  padding: 15px 25px;
  border-radius: 999px;
  border: 2px solid #f3f3f3;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    gap: 5px;
    transition: 0.3s;
    svg {
      width: 35px;
      height: 35px;
    }
    &:hover {
      transition: 0.3s;
      color: #715aff;
    }
    &.router-link-active {
      color: #715aff;
    }
  }
}
</style>
