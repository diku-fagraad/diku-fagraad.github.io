<script lang="ts">
  import "../app.css";
  import MenuIcon from "../component/MenuIcon.svelte";

  let isMenuOpen: boolean = false;
</script>



<div class="flex flex-col h-screen w-screen">
  <div class="w-screen h-12 bg-ku flex content-center">
    <MenuIcon bind:isOpen={isMenuOpen} />
  </div>
  <div class="flex-1 w-screen">
    <div
      style={`display:${isMenuOpen ? "flex" : "none"};`}
      class="fixed top-12 left-0 w-[80%] max-w-sm h-[100%] bg-group flex-nowrap flex-col text-center"
    >
      <div class="flex flex-nowrap flex-col  text-2xl my-6">
        <a class="hover:text-ku" href="/">Om fagrådet</a>
        <a class="hover:text-ku" href="FAQ">FAQ</a>
        <a class=" hover:text-ku" href="Begivenheder">Begivenheder</a>
      </div>

      <div class="justify-self-end my-10">
        <p class="pt-2">
          <span class="font-bold">Email:</span> dikufagraad@srku.dk
        </p>
        <h2 class="text-xl pt-5">Eller find os på</h2>
        <div class="flex flex-row justify-center gap-5 m-3">
          <a target="_blank" href="https://discord.gg/7gjU3zgg7s"
            ><img
              class="w-12 aspect-square"
              src="discord-logo.svg"
              alt="discord"
            /></a
          >
          <a target="_blank" href="https://www.facebook.com/dikufagraad"
            ><img
              class="w-12 aspect-square"
              src="facebook-logo.png"
              alt="facebook"
            /></a
          >
          <a target="_blank" href="https://github.com/diku-fagraad"
            ><img
              class="w-12 aspect-square"
              src="github-logo.svg"
              alt="github"
            /></a
          >
        </div>
      </div>
    </div>
    <div class="w-[100vw] h-[calc(100vh-3rem)] overflow-y-scroll">
      <slot />
    </div>
  </div>
</div>
