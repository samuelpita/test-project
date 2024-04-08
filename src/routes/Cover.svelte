<script>
    export let flipped = false;
    export let forceVertical = false;

    export let styleContentColor =
        "bg-gradient-to-t from-black to-transparent md:bg-gradient-to-tl md:from-primary-800 md:to-secondary-700";
    export let styleContentLayout = "flex flex-col align-center justify-center px-8 py-16";

    export let styleContentColorFV = "bg-gradient-to-t from-black to-transparent";
    export let styleContentLayoutFV = "flex flex-col align-center justify-center px-8 py-16";

    export let styleCover = "";
    export let styleGraphic = "border-x-8 border-t-8 md:border-b-8 border-white";
</script>

{#if forceVertical}
    <div class="size-full relative {styleCover}">
        <div class="z-10 w-full absolute bottom-0 {styleContentLayoutFV} {styleContentColorFV}">
            <slot name="content" />
        </div>
        <div class="z-0 size-full relative {styleGraphic}">
            <slot name="graphic" />
        </div>
    </div>
{:else}
    <div class="size-full relative md:grid md:grid-cols-2 md:grid-rows-1 {styleCover}">
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
    </div>
{/if}
