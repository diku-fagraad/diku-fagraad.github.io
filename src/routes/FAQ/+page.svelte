<script lang="ts">
  export let data: { data: { question: string; answer: string }[] };
</script>

<div>
  <div class="w-[100%] h-[100%] flex flex-row justify-center">
    <div class="w-text m-5">
      <h1 class="text-5xl text-center">FAQ</h1>

      {#each data.data as FA}
        <details open class="p-2">
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
