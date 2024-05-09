<script>
    import { screenTypeValue } from "$lib/scripts/functions";

    export let flipped = false;
    export let forceVertical = false;

    export let cardHeight = "h-[28rem]";

    export let contentColor = "bg-gradient-to-tl from-primary-800 to-secondary-800";
    export let contentLayout = "flex flex-col justify-center";
    export let contentMaxHeight = "max-h-[50%]";
    export let contentMaxWidth = "max-w-[50%]";

    export let graphic = "bg-white border-white border-8";
    export let graphicLayout = "";

    export let margin = "mb-8 lg:mb-10 2xl:mb-12";

    export let verticalAt = "sm";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<section class="{cardHeight} w-full {margin}">
    {#if innerWidth <= screenTypeValue(verticalAt) || forceVertical}
        <!-- Vertical Mode -->
        <div class="size-full flex flex-col">
            <div class="size-full overflow-hidden rounded-t-2xl {graphic} {graphicLayout}">
                <slot name="graphic">
                    <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                </slot>
            </div>
            <div
                class="size-full overflow-hidden rounded-b-2xl px-8 py-16 {contentColor} {contentLayout} {contentMaxHeight}"
            >
                <slot name="content">
                    <h1 class="font-sans">Hello World!</h1>
                    <h4 class="font-sans">Lorem ipsum dolor sit</h4>
                </slot>
            </div>
        </div>
    {:else}
        <!-- Horizontal Mode -->
        <div class="size-full flex">
            {#if flipped}
                <!-- Graphic | Content -->
                <div class="size-full overflow-hidden rounded-l-2xl {graphic} {graphicLayout}">
                    <slot name="graphic">
                        <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                    </slot>
                </div>
                <div
                    class="size-full overflow-hidden rounded-r-2xl px-8 {contentColor} {contentLayout} {contentMaxWidth}"
                >
                    <slot name="content">
                        <h1 class="font-sans">Hello World!</h1>
                        <h4 class="font-sans">Lorem ipsum dolor sit</h4>
                    </slot>
                </div>
            {:else}
                <!-- Content | Graphic -->
                <div
                    class="size-full overflow-hidden rounded-l-2xl px-8 {contentColor} {contentLayout} {contentMaxWidth}"
                >
                    <slot name="content">
                        <h1 class="font-sans">Hello World!</h1>
                        <h4 class="font-sans">Lorem ipsum dolor sit</h4>
                    </slot>
                </div>
                <div class="size-full overflow-hidden rounded-r-2xl {graphic} {graphicLayout}">
                    <slot name="graphic">
                        <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                    </slot>
                </div>
            {/if}
        </div>
    {/if}
</section>
