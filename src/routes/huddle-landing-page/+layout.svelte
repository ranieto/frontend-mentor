<div class="app">
  <slot />
</div>

<style>
  @font-face {
    font-family: Poppins;
    font-weight: 400;
    src:
      local("Poppins Regular"),
      url("/src/lib/assets/fonts/Poppins-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: Poppins;
    font-weight: 600;
    src:
      local("Poppins Semi Bold"),
      url("/src/lib/assets/fonts/Poppins-SemiBold.woff2") format("woff2");
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 400;
    src:
      local("Open Sans Regular"),
      url("/src/lib/assets/fonts/OpenSans-Regular.woff2") format("woff2");
  }

  .app {
    --violet: hsl(257deg 40% 49%);
    --soft-magenta: hsl(300deg 69% 71%);
    --white: #fff;

    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    min-height: 100dvh;
    display: grid;
    color: var(--white);
    background: no-repeat url("./bg-desktop.svg");
    background-color: var(--violet);
    background-size: auto 100vh;
  }
</style>
