<script>
    import { determineInnerWidthType } from "$lib";

    export let flipped = false;
    export let forceVertical = false;
    export let overlayContent = false;

    export let styleContentColor = "bg-gradient-to-tl from-primary-800 to-secondary-700";
    export let styleContentColorOverlay = "bg-gradient-to-t from-black to-transparent";
    export let styleContentLayout = "flex flex-col items-center justify-center px-8 py-16";

    export let styleCover = "w-full h-svh";
    export let styleGraphic = "border-8 border-white";
    export let styleGraphicOverlay = "border-x-8 border-t-8 border-white";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if forceVertical || determineInnerWidthType(innerWidth) == "sm"}
    <!-- <div class="size-full relative {styleCover}">
        <div class="z-10 w-full absolute bottom-0 {styleContentLayoutFV} {styleContentColorFV}">
            <slot name="content" />
        </div>
        <div class="z-0 size-full relative {styleGraphic}">
            <slot name="graphic" />
        </div>
    </div> -->

    <div class="flex flex-col relative {styleCover}">
        {#if overlayContent}
            <div class="size-full relative {styleGraphicOverlay}">
                <slot name="graphic" />
            </div>
            <div class="w-full absolute bottom-0 {styleContentLayout} {styleContentColorOverlay}">
                <slot name="content" />
            </div>
        {:else}
            <div class="size-full {styleGraphic}">
                <slot name="graphic" />
            </div>
            <div class="w-full {styleContentLayout} {styleContentColor}">
                <slot name="content" />
            </div>
        {/if}
    </div>
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

    <div class="grid grid-cols-2 grid-rows-1 {styleCover}">
        {#if flipped}
            <div class="size-full {styleGraphic}">
                <slot name="graphic" />
            </div>
            <div class="size-full {styleContentLayout} {styleContentColor}">
                <slot name="content" />
            </div>
        {:else}
            <div class="size-full {styleContentLayout} {styleContentColor}">
                <slot name="content" />
            </div>
            <div class="size-full {styleGraphic}">
                <slot name="graphic" />
            </div>
        {/if}
    </div>
{/if}
