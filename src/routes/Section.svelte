<script>
    import Header from "./Header.svelte";

    export let icon = "./favicon.png";
    export let iconAlt = "";
    export let iconSize = "size-24 lg:size-28 2xl:size-32";

    export let headerFlipped = false;

    export let maxWidth = "max-w-[56rem]";

    export let styleColor = "";
    export let styleLayout = "flex-col";
    export let styleShape = "";
    export let styleSpacing = "p-4 lg:p-6 2xl:p-8";
</script>

<div class="flex mx-auto w-full {maxWidth} {styleColor} {styleLayout} {styleShape} {styleSpacing}">
    <!-- <header class="flex items-center mb-4 {styleHeader}">
        {#if icon != ""}
            <div class="size-32 {styleIconDiv}">
                <img src={icon} alt={iconAlt} class="size-full {styleIcon}" />
            </div>
        {/if}
        <slot name="header" />
    </header> -->

    <Header
        flipped={headerFlipped}
        {icon}
        {iconAlt}
        {iconSize}
        stylePadding="pb-4 lg:pb-6 2xl:pb-8"
    >
        <slot name="header" />
    </Header>

    <slot name="content" />
</div>
