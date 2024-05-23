<script>
    let show = false;

    const styleAltText = "px-3 py-2";
    const styleAlt = "bg-black/70 max-w-md mx-2 mb-2 rounded";
    const styleAltShow = {
        true: "opacity-100 translate-y-0",
        false: "opacity-0 -translate-y-4",
    };
    const styleImageShow = {
        true: "scale-105",
        false: "scale-100",
    };

    const onHide = () => {
        _styleImage = styleImage + " " + styleImageShow.false;
        _styleAlt = styleAlt + " " + styleAltShow.false;
    };
    const onShow = () => {
        _styleImage = styleImage + " " + styleImageShow.true;
        _styleAlt = styleAlt + " " + styleAltShow.true;
    };

    export let image = "./favicon.svg";
    export let imageAlt = "Lorem ipsum dolor sit";

    export let style = "size-full";
    export let styleImage = "object-cover";

    let _styleImage = styleImage + " " + styleImageShow.false;
    let _styleAlt = styleAlt + " " + styleAltShow.false;
</script>

<button
    class="min-h-0 min-w-0 overflow-hidden relative flex flex-col items-center {style}"
    on:click={() => {
        show = !show;
        if (show) onShow();
        else onHide();
    }}
    on:mouseenter={() => {
        if (show) return;
        show = true;
        onShow();
    }}
    on:mouseleave={() => {
        if (!show) return;
        show = false;
        onHide();
    }}
>
    <div class="size-full">
        <img src={image} alt={imageAlt} class="size-full transition-all {_styleImage}" />
    </div>
    <div class="absolute bottom-0 transition-all {_styleAlt}" role="tooltip">
        <p class={styleAltText}>{imageAlt}</p>
    </div>
</button>
