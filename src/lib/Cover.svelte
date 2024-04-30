<script>
    import { valueInnerWidthType } from "./scripts/functions";

    export let flipped = false;
    export let forceOverlay = false;

    export let contentColor = "bg-gradient-to-tl from-primary-800 to-secondary-800";
    export let contentColorOverlay = "bg-gradient-to-t from-black to-transparent";
    export let contentMaxWidth = "max-w-[50%]";
    export let contentLayout = "flex flex-col justify-center";

    export let graphic = "bg-white border-white border-8";
    export let graphicOverlay = "bg-white border-white border-t-8 border-x-8";
    export let graphicLayout = "";

    export let overlayAt = "sm";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<header class="h-svh w-full">
    {#if innerWidth <= valueInnerWidthType(overlayAt) || forceOverlay}
        <!-- Overlay Mode -->
        <div class="size-full {graphicOverlay} {graphicLayout}">
            <slot name="graphic">
                <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
            </slot>
        </div>
        <div class="absolute bottom-0 w-full px-8 py-16 {contentColorOverlay} {contentLayout}">
            <slot name="content">
                <h1 class="font-sans">Hello World</h1>
                <p class="font-sans">Lorem ipsum dolor sit</p>
            </slot>
        </div>
    {:else}
        <!-- Horizontal Mode -->

        <div class="size-full flex">
            {#if flipped}
                <!-- Graphic | Content -->

                <div class="size-full {graphic} {graphicLayout}">
                    <slot name="graphic">
                        <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                    </slot>
                </div>
                <div class="size-full px-8 {contentColor} {contentMaxWidth} {contentLayout}">
                    <slot name="content">
                        <h1 class="font-sans">Hello World</h1>
                        <p class="font-sans">Lorem ipsum dolor sit</p>
                    </slot>
                </div>
            {:else}
                <!-- Content | Graphic -->

                <div class="size-full px-8 {contentColor} {contentMaxWidth} {contentLayout}">
                    <slot name="content">
                        <h1 class="font-sans">Hello World</h1>
                        <p class="font-sans">Lorem ipsum dolor sit</p>
                    </slot>
                </div>
                <div class="size-full {graphic} {graphicLayout}">
                    <slot name="graphic">
                        <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                    </slot>
                </div>
            {/if}
        </div>
    {/if}
</header>
