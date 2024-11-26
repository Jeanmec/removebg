<template>
  <div class="navbar">
    <nav>
      <NuxtLink to="/" class="logo" @click="closeMenu">
        <Icon name="ph:house-bold" /> Home
      </NuxtLink>
      <div class="menu" :class="{ 'menu-active': isMenuActive }">
        <NuxtLink to="/encode-image-base64" @click="closeMenu">
          <Icon name="bx:barcode-reader" /> Encode Base64 image
        </NuxtLink>
        <NuxtLink to="/convert-base64-to-image" @click="closeMenu">
          <Icon name="iconoir:scan-barcode" /> Decode Base64 image
        </NuxtLink>
        <NuxtLink to="/remove-background" @click="closeMenu">
          <Icon name="fluent:video-background-effect-20-filled" /> Remove image
          background
        </NuxtLink>
      </div>
      <button @click="toggleMenu" class="hamburger-icon">
        <Icon name="material-symbols:menu" />
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    closeMenu() {
      this.isMenuActive = false; // Ferme le menu en le désactivant
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 1;

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
    z-index: 1;

    @media (max-width: 1200px) {
      width: calc(100vw - 10vw);
    }

    @media (max-width: 768px) {
      width: calc(100vw - 20vw);
      justify-content: space-between;
    }

    .logo {
      font-size: 1.2em;
      font-weight: bold;
      color: black;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;

      svg {
        width: 30px;
        height: 30px;
      }
    }

    .menu {
      display: flex;
      gap: 30px;
      transition: 0.3s ease-in-out;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        gap: 5px;
        transition: 0.3s;
        font-weight: bold;

        svg {
          width: 35px;
          height: 35px;
        }

        &:hover {
          color: #715aff;
        }

        &.router-link-active {
          color: #715aff;
        }
      }

      @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 10px;
        right: 0;
        background-color: rgba(255, 255, 255, 0.9);
        position: absolute;
        top: 75px;
        padding: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        a {
          justify-content: center;
        }
      }

      &.menu-active {
        display: flex;
      }
    }

    .hamburger-icon {
      display: none;
      background: transparent;
      border: none;
      font-size: 2em;
      cursor: pointer;
      z-index: 2;
      color: black;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }
}
</style>
