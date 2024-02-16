<script>
    export const flipped = false;

    export let styleCard = "";
    export let styleContent = "flex flex-col align-center justify-center p-8";
</script>

<div class="overflow-hidden {styleCard}">
    {#if flipped}
        <div class="flex flex-col-reverse md:flex-row-reverse">
            <div class="md:shrink-0">
                <slot name="graphic" />
            </div>
            <div class="w-full {styleContent}">
                <slot name="content" />
            </div>
        </div>
    {:else}
        <div class="flex flex-col md:flex-row">
            <div class="md:shrink-0">
                <slot name="graphic" />
            </div>
            <div class="w-full {styleContent}">
                <slot name="content" />
            </div>
        </div>
    {/if}
</div>
