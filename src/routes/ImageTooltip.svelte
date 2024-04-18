<script>
    import HoverDetect from "./HoverDetect.svelte";

    export let image = "./favicon.png";
    export let imageAlt = "";

    export let style = "size-full";
    export let styleAlt = "font-sans px-3 py-2";

    export let styleImage = "object-cover";
    export let styleImageHover = {
        enter: "scale-110",
        leave: "scale-100",
    };

    export let styleTooltipColor = "bg-black/70";
    export let styleTooltipShape = "max-w-[28rem] mx-2 mb-2 rounded-xl";
    export let styleTooltipHover = {
        enter: "opacity-100 transform-y-0",
        leave: "opacity-0 -transform-y-6",
    };

    let _styleImage = styleImage + " " + styleImageHover.leave;
    let _styleTooltip = styleTooltipColor + " " + styleTooltipShape + " " + styleTooltipHover.leave;
</script>

<HoverDetect
    style="flex flex-col items-center {style}"
    onHoverEnter={() => {
        _styleImage = styleImage + " " + styleImageHover.enter;
        _styleTooltip = styleTooltipColor + " " + styleTooltipShape + " " + styleTooltipHover.enter;
    }}
    onHoverLeave={() => {
        _styleImage = styleImage + " " + styleImageHover.leave;
        _styleTooltip = styleTooltipColor + " " + styleTooltipShape + " " + styleTooltipHover.leave;
    }}
>
    <div class="size-full">
        <img src={image} alt={imageAlt} class="size-full transition-all {_styleImage}" />
    </div>
    <div class="absolute bottom-0 transition-all {_styleTooltip}">
        <p class={styleAlt}>{imageAlt}</p>
    </div>
</HoverDetect>
