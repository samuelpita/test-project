<script>
    export let flipped = false;

    export let icon = "./favicon.png";
    export let iconAlt = "";

    export let stylePadding = "p-4";
    export let styleSize = "max-w-[56rem]";
</script>

{#if flipped}
    <header class="flex flex-row-reverse items-center mx-auto {stylePadding} {styleSize}">
        <div class="size-32 ml-4">
            <img src={icon} alt={iconAlt} class="size-full object-cover" />
        </div>
        <slot />
    </header>
{:else}
    <header class="flex items-center mx-auto {stylePadding} {styleSize}">
        <div class="size-32 mr-4">
            <img src={icon} alt={iconAlt} class="size-full object-cover" />
        </div>
        <slot />
    </header>
{/if}
