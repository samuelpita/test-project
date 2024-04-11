<script>
    import { determineInnerWidthType } from "$lib";

    export let flipped = false;
    export let forceVertical = false;
    export let overlayContent = false;

    export let styleContentColor = "bg-gradient-to-tl from-primary-800 to-secondary-700";
    export let styleContentColorOverlay = "bg-gradient-to-t from-black to-transparent";
    export let styleContentLayout = "flex flex-col align-center justify-center px-8 py-16";

    export let styleCover = "";
    export let styleGraphic = "border-8 border-white";
    export let styleGraphicOverlay = "border-x-8 border-t-8 border-b-8 border-white";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if forceVertical}
    <!-- <div class="size-full relative {styleCover}">
        <div class="z-10 w-full absolute bottom-0 {styleContentLayoutFV} {styleContentColorFV}">
            <slot name="content" />
        </div>
        <div class="z-0 size-full relative {styleGraphic}">
            <slot name="graphic" />
        </div>
    </div> -->
{:else}
    <!-- <div class="size-full relative md:grid md:grid-cols-2 md:grid-rows-1 {styleCover}">
        {#if flipped}
            <div class="size-full relative {styleGraphic}">
                <slot name="graphic" />
            </div>
            <div
                class="w-full absolute bottom-0 md:size-full md:relative {styleContentLayout} {styleContentColor}"
            >
                <slot name="content" />
            </div>
        {:else}
            <div
                class="z-10 w-full absolute bottom-0 md:size-full md:relative {styleContentLayout} {styleContentColor}"
            >
                <slot name="content" />
            </div>
            <div class="z-0 size-full relative {styleGraphic}">
                <slot name="graphic" />
            </div>
        {/if}
    </div> -->
{/if}
