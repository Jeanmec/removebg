<template>
  <div class="advantages">
    <div class="advantage">
      <Icon name="tdesign:cloud-upload" color="black" />

      <div class="text">
        <h3>Upload images</h3>
        <p>
          Upload your images and we will remove the background for you in one
          click
        </p>
      </div>
    </div>
    <div class="advantage">
      <Icon name="fluent:video-background-effect-20-filled" color="black" />
      <div class="text">
        <h3>Remove background</h3>
        <p>
          Upload your image to automatically remove the background in an
          instant.
        </p>
      </div>
    </div>
    <div class="advantage">
      <Icon name="mingcute:download-2-line" color="black" />
      <div class="text">
        <h3>Download image</h3>
        <p>Download your image with the background removed for free.</p>
      </div>
    </div>

    <div class="advantage demi">
      <Icon name="ooui:user-anonymous" color="black" />
      <div class="text">
        <h3>Anonymous and secure</h3>
        <p>
          We do not store your images and we do not require any personal
          information.
        </p>
      </div>
    </div>

    <div class="advantage demi">
      <Icon name="icon-park-outline:compression" color="black" />
      <div class="text">
        <h3>Optional compression</h3>
        <p>
          Compress your image to reduce its weight and make it easier to share.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceAdvantages",
};
</script>

<style lang="scss" scoped>
.advantages {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;

  .advantage {
    &.demi {
      width: calc(50% - 0.66rem);
    }
    width: calc(33% - 0.66rem);
    border: 2px solid black;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    padding: 15px 5px;
    border-radius: 8px;

    svg {
      width: 75px;
      margin: 0 10px;
      height: auto;
    }

    .text {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
}
</style>
