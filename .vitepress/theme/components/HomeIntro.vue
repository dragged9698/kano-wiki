<template>
  <header>
    <img src="/public/kano_full.png" alt="Kano Logo" class="logo" />
    
    <p> <I>
      Explore the best RuneScape private server on the market.</I>
    </p>
  </header>
</template>

<style scoped lang="scss">
header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 20px 60px;
  text-align: center;

  @media (min-width: 960px) {
    padding-top: 40px;
    padding-bottom: 100px;
  }
}

.logo {
  width: 1252px;
  height: auto;
  margin-bottom: 20px;
}

header .icon {
  width: 160px;
  height: 160px;
  color: var(--sb-foreground-highlight);
  mask-image: linear-gradient(to bottom, #fff9 10%, #fffa 30%, #fff0 74%);

  @media (prefers-contrast: more) {
    display: none;
  }

  @media (min-width: 680px) {
    width: 200px;
    height: 200px;
  }
}

header h1 {
  margin-top: -15px;
  margin-bottom: 0;
  font-family: Gilroy, var(--vp-font-family-base);
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;

  @media (min-width: 960px) {
    margin-top: -25px;
    font-size: 48px;
    line-height: 1;
  }
}

header p {
  margin: 0.75em 0 0;
  font-size: 16px;
  line-height: 1.4;

  @media (min-width: 960px) {
    font-size: 18px;
  }
}
</style>
