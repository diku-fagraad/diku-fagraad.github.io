<script lang="ts">

  export let isOpen = false;

  function onClick(this: HTMLDivElement, ev: MouseEvent) {
    console.log("onClick");
    isOpen = !isOpen;
  }

  const genericHamburgerLine = `h-1 w-8 my-1 bg-neutral-100 transition ease transform duration-300`;
</script>

<button
  class="flex flex-col h-12 w-12 justify-center items-center group"
  on:click={onClick}
  aria-label="Main menu"
>
  <div
    class={`${genericHamburgerLine} ${
      isOpen
        ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-70"
        : "opacity-100 group-hover:opacity-70"
    }`}
  />
  <div
    class={`${genericHamburgerLine} ${
      isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-70"
    }`}
  />
  <div
    class={`${genericHamburgerLine} ${
      isOpen
        ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-70"
        : "opacity-100 group-hover:opacity-70"
    }`}
  />
</button>
