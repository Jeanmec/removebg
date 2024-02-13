<template>
  <div class="footer-container">
    <hr />
    <div class="links">
      <NuxtLink to="/"><Icon name="ph:house-bold" /> Home</NuxtLink>
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
      <a href="https://github.com/Jeanmec" target="_blank"
        ><Icon name="mdi:github" /> My GitHub</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer-container {
  margin-top: auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .links {
    display: flex;

    width: 100%;
    place-content: space-evenly;
    a {
      text-decoration: none;
      font-family: "Poppins";
      font-weight: 300;
      color: white;
      display: flex;
      align-items: center;
      column-gap: 5px;
    }
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      font-size: 1.2em;
      row-gap: 10px;
    }
  }
}

hr {
  width: 50%;
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 10px 0;
}
</style>
