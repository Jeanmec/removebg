<template>
  <div class="text-presentation-container">
    <h1>
      <span>Image</span>
      <span class="bg-transparent-animation">background</span>
      <span>remover</span>
    </h1>
    <span class="description">
      Remove the background of your images <b>online</b> for <b>free</b> in one
      click
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes changeColor {
  0% {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
  }
  50% {
    -webkit-text-stroke: 2px transparent;
    color: #fff;
  }
  100% {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
  }
}
.text-presentation-container {
  width: 100%;
  img {
    width: 100%;
  }
  h1 {
    font-size: 5rem;
    margin: 0;
    font-weight: 700;
    line-height: 1.2em;
    color: #fff;
    font-family: "Poppins";

    span {
      display: block;
    }

    .bg-transparent-animation {
      animation: changeColor 2s infinite;
    }

    @media screen and (max-width: 1200px) {
      font-size: 4em;
      text-align: center;
    }
  }
  .description {
    font-family: "Poppins";
    font-size: 1.2rem;
    margin: 0;
    font-weight: 400;
    color: #fff;
    b {
      font-weight: 700;
      border-bottom: 4px solid #715aff;
    }
    @media screen and (max-width: 1200px) {
      text-align: center;
      display: flex;
      column-gap: 5px;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 35px;
  }
}
</style>
