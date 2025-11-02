<script lang="ts">
  import type { ALine } from './store.svelte';

  let { line, hidden }: { line: ALine; hidden?: boolean } = $props();
</script>

{#if hidden}
  <h1 class={`invisible text-3xl font-bold max-w-4/5 text-center ${line.style || ''}`}>{line.t}</h1>
{:else}
  <h1 class={`text-3xl font-bold max-w-4/5 text-center ${line.style || ''}`}>{line.t}</h1>
{/if}
