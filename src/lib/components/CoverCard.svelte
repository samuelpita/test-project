<script>
    import { screenTypeValue } from "$lib/scripts/functions";

    export let flipped = false;
    export let forceVertical = false;

    export let cardHeight = "";

    export let contentColor = "bg-gradient-to-tl from-primary-800 to-secondary-800";
    export let contentLayout = "flex flex-col justify-center";
    export let contentMaxHeight = "max-h-[50%]";
    export let contentMaxWidth = "max-w-[50%]";

    export let graphic = "bg-white border-white border-main";
    export let graphicLayout = "";

    export let margin = "mb-main";

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
                class="size-full overflow-hidden rounded-b-lg pv-cover {contentColor} {contentLayout} {contentMaxHeight}"
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
                    class="w-full overflow-hidden rounded-r-lg ph-cover {contentColor} {contentLayout} {contentMaxWidth}"
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
                    class="w-full overflow-hidden rounded-l-lg ph-cover {contentColor} {contentLayout} {contentMaxWidth}"
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
