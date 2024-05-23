<script>
    import { glob } from "./Global.svelte";
    import { screenTypeValue } from "$lib/scripts/functions";

    export let flipped = false;
    export let forceVertical = false;

    export let cardHeight = "";

    export let contentColor = "bg-gradient-to-tl from-primary-800 to-secondary-800";
    export let contentLayout = "flex flex-col justify-center";
    export let contentMaxHeight = "max-h-[50%]";
    export let contentMaxWidth = "max-w-[50%]";

    export let graphic = "bg-white border-white border-8";
    export let graphicLayout = "";

    export let margin = glob.margin.main.b;

    export let verticalAt = "sm";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<section class="{cardHeight} w-full {margin}">
    {#if innerWidth <= screenTypeValue(verticalAt) || forceVertical}
        <!-- Vertical Mode -->

        <div class="size-full flex flex-col">
            <div class="size-full overflow-hidden rounded-t-lg {graphic} {graphicLayout}">
                <slot name="graphic">
                    <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                </slot>
            </div>

            <!-- prettier-ignore -->
            <div
                class="size-full overflow-hidden rounded-b-lg {glob.padding.cover.v} {contentColor} {contentLayout} {contentMaxHeight}"
            >
                <slot name="content">
                    <h1>Hello World!</h1>
                    <h4>Lorem ipsum dolor sit</h4>
                </slot>
            </div>
        </div>
    {:else}
        <!-- Horizontal Mode -->

        <div class="size-full flex">
            {#if flipped}
                <!-- Graphic | Content -->

                <div class="w-full overflow-hidden rounded-l-lg {graphic} {graphicLayout}">
                    <slot name="graphic">
                        <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                    </slot>
                </div>

                <!-- prettier-ignore -->
                <div
                    class="w-full overflow-hidden rounded-r-lg {glob.padding.cover.h} {contentColor} {contentLayout} {contentMaxWidth}"
                >
                    <slot name="content">
                        <h1>Hello World!</h1>
                        <h4>Lorem ipsum dolor sit</h4>
                    </slot>
                </div>
            {:else}
                <!-- Content | Graphic -->

                <!-- prettier-ignore -->
                <div
                    class="w-full overflow-hidden rounded-l-lg {glob.padding.cover.h} {contentColor} {contentLayout} {contentMaxWidth}"
                >
                    <slot name="content">
                        <h1>Hello World!</h1>
                        <h4>Lorem ipsum dolor sit</h4>
                    </slot>
                </div>

                <div class="w-full overflow-hidden rounded-r-lg {graphic} {graphicLayout}">
                    <slot name="graphic">
                        <img src="./home-other-0.jpeg" alt="" class="size-full object-cover" />
                    </slot>
                </div>
            {/if}
        </div>
    {/if}
</section>
