<script>
    export let flipped = false;

    export let icon = "";
    export let iconAlt = "";
    export let iconSize = "size-24 lg:size-28 2xl:size-32";

    export let id = "";

    export let style = "";
    export let styleSize = "max-w-[56rem] w-full";
    export let styleSpacing = "p-6 xl:p-8";
</script>

{#if flipped}
    <header
        class="flex flex-row-reverse items-center mx-auto {style} {styleSpacing} {styleSize}"
        {id}
    >
        {#if icon != ""}
            <div class="{iconSize} ml-4">
                <img src={icon} alt={iconAlt} class="size-full object-contain" />
            </div>
        {/if}
        <slot />
    </header>
{:else}
    <header class="flex items-center mx-auto {style} {styleSpacing} {styleSize}" {id}>
        {#if icon != ""}
            <div class="{iconSize} mr-4">
                <img src={icon} alt={iconAlt} class="size-full object-contain" />
            </div>
        {/if}
        <slot />
    </header>
{/if}
