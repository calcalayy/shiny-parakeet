<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let ready = false;
  onMount(async () => {
    ready = true;
  });
</script>

<svelte:head>
  <title>calcal.space</title>
</svelte:head>
{#if ready}
  <div>
    <div class="flex justify-center p-2 px-1">
      <div class="md:flex">
        <div class="flex-col blue-border">
          <img src="/zumo.gif" class="px-1 pt-1 rounded-md w-96 h-64" alt="zumo my beloved" />
          <p class="font-bold px-2">i love zumo</p>
        </div>
        <div class="p-4" />
        <div class="flex-col blue-border">
          <img src="/mrshitty.png" class="px-1 pt-1 rounded-md w-96 h-64" alt="kys" />
          <p class="font-bold px-2">mr shitty</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center p-2 px-1">
      <div class="md:flex">
        <div class="flex-col blue-border">
          <img src="/gayassfemboy.jpg" class="px-1 pt-1 rounded-md w-96 h-64" alt="zumo my beloved" />
          <p class="font-bold px-2">daddy salsa (best femboy)</p>
        </div>
        <div class="p-4" />
        <div class="flex-col blue-border">
          <video width="384" height="256" class="px-1 pt-1 rounded-md w-96 h-64" controls autoplay playsinline muted>
            <source src="/zumorr.mp4" type="video/mp4" />
          </video>
          <p class="font-bold px-2">zuot (lov u no homo)</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center p-2 px-1">
      <div class="md:flex">
        <div class="flex-col blue-border">
          <img src="/reptile.jpg" class="px-1 pt-1 rounded-md w-96 h-64" alt="zumo my beloved" />
          <p class="font-bold px-2">reptilian</p>
        </div>
        <div class="p-4" />
        <div class="flex-col blue-border">
          <img src="/razrcar.jpg" class="px-1 pt-1 rounded-md w-96 h-64" alt="zumo my beloved" />
          <p class="font-bold px-2">racar</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  @import url("https://fonts.cdnfonts.com/css/sf-ui-text-2");

  :global(html) {
    background-color: theme(colors.blue.400);
    font-family: "SF UI Text", sans-serif;
  }
</style>
