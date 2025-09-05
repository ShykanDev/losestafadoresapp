<style scoped>
  .spinner {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .spinner::before,
  .spinner::after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  .spinner::before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #ff00009a 0%, #2121 50%);
    animation: spin .5s infinite linear;
  }

  .spinner::after {
    width: 85%;
    height: 85%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>

<template>
  <div class="spinner"></div>
</template>
