<script>
    import Header from "./Header.svelte";

    export let icon = "./favicon.png";
    export let iconAlt = "";
    export let iconSize = "size-24 lg:size-28 2xl:size-32";

    export let id = "";

    export let headerFlipped = false;
    export let maxWidth = "max-w-[56rem]";

    export let styleHeader = "border-b-2 border-white mb-6 lg:mb-8";
    export let styleHeaderSize = "max-w-[56rem] w-full";
    export let styleHeaderSpacing = "pb-6 lg:pb-8";

    export let styleColor = "";
    export let styleLayout = "flex-col";
    export let styleShape = "";
    export let styleSpacing = "px-6 lg:px-8 pb-6 lg:pb-8";
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
        style={styleHeader}
        styleSize={styleHeaderSize}
        styleSpacing={styleHeaderSpacing}
    >
        <slot name="header" />
    </Header>

    <slot name="content" />
</div>
