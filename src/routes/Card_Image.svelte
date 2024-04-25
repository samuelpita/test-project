<script>
    import Card from "./Card.svelte";
    import ImageTooltip from "./ImageTooltip.svelte";

    export let flipped = false;

    export let image = "./favicon.png";
    export let imageAlt = "Lorem ipsum dolor sit amet";

    export let styleCard = "";
    export let styleCardSpacing = "mb-6 xl:mb-8";

    export let styleContentColor = "bg-neutral-900";
    export let styleContentLayout = "flex flex-col justify-center";
    export let styleContentSpacing = "p-6 xl:p-8";

    export let styleImage = "object-cover";
    export let styleImageRatio = "aspect-square";
    export let styleImageSize = "h-64 w-full sm:h-full sm:w-80";
</script>

<!-- <div class={styleCard}>
    {#if flipped}
        <div class="flex flex-col-reverse md:flex-row-reverse">
            <div class="md:shrink-0">
                <img src={image} alt={imageAlt} class={styleImage} />
            </div>
            <div class="w-full {styleContentLayout}">
                <slot />
            </div>
        </div>
    {:else}
        <div class="flex flex-col md:flex-row">
            <div class="md:shrink-0">
                <img src={image} alt={imageAlt} class={styleImage} />
            </div>
            <div class="w-full {styleContentLayout}">
                <slot />
            </div>
        </div>
    {/if}
</div> -->

<Card
    {flipped}
    {styleCard}
    {styleCardSpacing}
    {styleContentColor}
    {styleContentLayout}
    {styleContentSpacing}
>
    <ImageTooltip
        slot="graphic"
        {image}
        {imageAlt}
        style="{styleImageRatio} {styleImageSize}"
        {styleImage}
    />
    <svelte:fragment slot="content">
        <slot>
            <p class="font-sans">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptatibus,
                illum quam reprehenderit corrupti culpa eaque dicta laboriosam quasi. Non, cum?
                Optio recusandae molestias, omnis dicta obcaecati similique fugiat aperiam!
            </p>
        </slot>
    </svelte:fragment>
</Card>
