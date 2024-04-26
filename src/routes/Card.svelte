<script>
    export let flipped = false;

    export let style = "";
    export let styleSpacing = "mb-6 lg:mb-8";

    export let styleContentColor = "bg-neutral-900";
    export let styleContentLayout = "flex flex-col justify-center";
    export let styleContentSpacing = "p-6 lg:p-8";
</script>

<div class="{style} {styleSpacing}">
    {#if flipped}
        <div class="flex flex-col sm:flex-row-reverse">
            <div class="sm:shrink-0">
                <slot name="graphic" />
            </div>
            <div class="w-full {styleContentColor} {styleContentLayout} {styleContentSpacing}">
                <slot name="content" />
            </div>
        </div>
    {:else}
        <div class="flex flex-col sm:flex-row">
            <div class="sm:shrink-0">
                <slot name="graphic" />
            </div>
            <div class="w-full {styleContentColor} {styleContentLayout} {styleContentSpacing}">
                <slot name="content" />
            </div>
        </div>
    {/if}
</div>
