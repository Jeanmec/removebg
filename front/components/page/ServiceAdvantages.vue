<template>
  <div class="advantages">
    <div class="advantage">
      <Icon name="tdesign:cloud-upload" />

      <div class="text">
        <span>Upload images</span>
        <p>
          Upload your images and we will remove the background for you in one
          click
        </p>
      </div>
    </div>
    <div class="advantage">
      <Icon name="fluent:video-background-effect-20-filled" />
      <div class="text">
        <span>Remove background</span>
        <p>
          Upload your image to automatically remove the background in an
          instant.
        </p>
      </div>
    </div>
    <div class="advantage">
      <Icon name="mingcute:download-2-line" />
      <div class="text">
        <span>Download image</span>
        <p>Download your image with the background removed for free.</p>
      </div>
    </div>

    <div class="advantage demi">
      <Icon name="ooui:user-anonymous" />
      <div class="text">
        <span>Anonymous and secure</span>
        <p>
          We do not store your images and we do not require any personal
          information.
        </p>
      </div>
    </div>

    <div class="advantage demi">
      <Icon name="icon-park-outline:compression" />
      <div class="text">
        <span>Optional compression</span>
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
  margin: 50px 0;

  .advantage {
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    &.demi {
      width: calc(50% - 0.66rem);
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }
    width: calc(33% - 0.66rem);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    padding: 15px 5px;
    border-radius: 8px;
    transition: 0.3s;
    background: rgba(255, 255, 255, 0.25);

    svg {
      width: 75px;
      margin: 0 10px;
      height: auto;
      transition: 0.3s;
    }

    .text {
      display: flex;
      flex-direction: column;
      span {
        transition: 0.3s;
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
}
</style>
