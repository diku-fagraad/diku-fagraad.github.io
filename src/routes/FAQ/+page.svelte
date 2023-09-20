<script lang="ts">
    export let data : {data:{question: string, answer: string}[]};
</script>


<div class="w-[100%] h-[100%] flex flex-row justify-center ">
    <div class="flex flex-col">
        <h1 class="text-5xl text-center">FAQ</h1>
        <div class="w-80 m-5">
            {#each data.data as FA }
            <details>
                <summary class="font-bold">
                  {FA.question}
                </summary>
                <p>
                  {FA.answer}
                </p>
              </details>
            {/each}
        </div>
    </div>

</div>

