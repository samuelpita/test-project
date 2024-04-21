<script>
    import Header from "./Header.svelte";

    export let icon = "./favicon.png";
    export let iconAlt = "";
    export let iconSize = "size-24 lg:size-28 2xl:size-32";

    export let id = "";

    export let headerFlipped = false;
    export let headerSize = "max-w-[56rem] w-full";
    export let headerSpacing = "pb-6 xl:pb-8";

    export let maxWidth = "max-w-[56rem]";

    export let styleColor = "";
    export let styleLayout = "flex-col";
    export let styleShape = "";
    export let styleSpacing = "p-6 xl:p-8";
</script>

<div
    class="flex mx-auto w-full {maxWidth} {styleColor} {styleLayout} {styleShape} {styleSpacing}"
    {id}
>
    <Header
        flipped={headerFlipped}
        {icon}
        {iconAlt}
        {iconSize}
        styleSize={headerSize}
        styleSpacing={headerSpacing}
    >
        <slot name="header" />
    </Header>

    <slot name="content" />
</div>
