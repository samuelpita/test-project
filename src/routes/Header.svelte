<script>
    export let flipped = false;

    export let icon = "./favicon.png";
    export let iconAlt = "";
    export let iconSize = "size-24 lg:size-28 2xl:size-32";

    export let stylePadding = "p-4 lg:p-6 2xl:p-8";
    export let styleSize = "max-w-[56rem]";
</script>

{#if flipped}
    <header class="flex flex-row-reverse items-center mx-auto w-full {stylePadding} {styleSize}">
        <div class="{iconSize} ml-4">
            <img src={icon} alt={iconAlt} class="size-full object-contain" />
        </div>
        <slot />
    </header>
{:else}
    <header class="flex items-center mx-auto w-full {stylePadding} {styleSize}">
        <div class="{iconSize} mr-4">
            <img src={icon} alt={iconAlt} class="size-full object-contain" />
        </div>
        <slot />
    </header>
{/if}
