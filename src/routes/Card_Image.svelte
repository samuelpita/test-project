<script>
    export let flipped = false;

    export let image = "";
    export let imageAlt = "";

    export let styleCard = "";
    export let styleContent = "flex flex-col align-center justify-center p-8";
    export let styleImage = "object-cover h-48 md:h-full w-full md:w-64";
</script>

<div class="overflow-hidden {styleCard}">
    {#if flipped}
        <div class="flex flex-col-reverse md:flex-row-reverse">
            <div class="md:shrink-0">
                <img src={image} alt={imageAlt} class={styleImage} />
            </div>
            <div class="w-full {styleContent}">
                <slot />
            </div>
        </div>
    {:else}
        <div class="flex flex-col md:flex-row">
            <div class="md:shrink-0">
                <img src={image} alt={imageAlt} class={styleImage} />
            </div>
            <div class="w-full {styleContent}">
                <slot />
            </div>
        </div>
    {/if}
</div>
