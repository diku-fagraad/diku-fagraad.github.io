<script lang="ts">
    import { onMount } from "svelte";
    import { getCalendar } from "./getCalendar";

    onMount(() => {
        getCalendar();
    });
 
</script>


<div class="w-[100%] h-[100%] flex flex-row justify-center ">
    <div class="flex flex-col">
        <title class="text-5xl text-center">Begivenheder</title>
        {#await getCalendar()}
            <p>loading...</p>
        {:then data}
            {#each data as event}
                <div class="w-80 m-5">
                    <details class="event">
                        <summary class="font-bold">
                        {event.summary}
                        {event.start.date.getDate()}/{event.start.date.getMonth()}/{event.start.date.getFullYear()}
                        </summary>

                        <p>
                        {@html event.description?.replaceAll(/\\,/g, ",").replaceAll(/\\n/g, "<\/p><p>")}
                        </p>
                    </details>
                </div>
            {/each}          
        {/await}
    </div>

</div>

<style global>
  :global(.event a) {
    color:blue;
  }
</style>

