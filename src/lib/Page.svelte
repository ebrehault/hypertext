<script lang="ts">
  import Line from './Line.svelte';
  import { currentLineIndex, type APage } from './store.svelte';

  let { page }: { page: APage } = $props();
</script>

<section
  class={`w-screen h-screen fixed flex justify-center align-items flex-col cursor-pointer font-[Rubik] bg-black transition-[background-color] duration-1500 text-white ${page.style || ''}`}
>
  {#each page.lines as line, index}
    {#if !line.override || index === currentLineIndex()}
      <div class="flex justify-center align-items">
        <Line
          {line}
          hidden={index > currentLineIndex()}
        ></Line>
      </div>
    {/if}
  {/each}
</section>
