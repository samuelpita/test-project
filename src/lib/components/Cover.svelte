<script>
    import { screenTypeValue } from "$lib/scripts/functions";

    export let flipped = false;
    export let forceOverlay = false;

    export let contentColor = "bg-gradient-to-tl from-primary-800 to-secondary-800";
    export let contentColorOverlay = "bg-gradient-to-t from-black to-transparent";
    export let contentLayout = "flex flex-col justify-center";
    export let contentMaxWidth = "max-w-[50%]";

    export let graphic = "bg-white border-white border-main";
    export let graphicOverlay = "bg-white border-white border-main-t border-main-x";
    export let graphicLayout = "";

    export let margin = "m-main-b";

    export let overlayAt = "sm";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<header class="h-svh w-full {margin}">
    {#if innerWidth <= screenTypeValue(overlayAt) || forceOverlay}
        <!-- Overlay Mode -->

        <div class="size-full {graphicOverlay} {graphicLayout}">
            <slot name="graphic">
                <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
            </slot>
        </div>

        <!-- prettier-ignore -->
        <div class="absolute bottom-0 w-full p-cover-v {contentColorOverlay} {contentLayout}">
            <slot name="content">
                <h1>Hello World!</h1>
                <h4>Lorem ipsum dolor sit</h4>
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

                <!-- prettier-ignore -->
                <div class="size-full p-cover-h {contentColor} {contentLayout} {contentMaxWidth}">
                    <slot name="content">
                        <h1>Hello World!</h1>
                        <h4>Lorem ipsum dolor sit</h4>
                    </slot>
                </div>
            {:else}
                <!-- Content | Graphic -->

                <!-- prettier-ignore -->
                <div class="size-full p-cover-h {contentColor} {contentLayout} {contentMaxWidth}">
                    <slot name="content">
                        <h1>Hello World!</h1>
                        <h4>Lorem ipsum dolor sit</h4>
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
