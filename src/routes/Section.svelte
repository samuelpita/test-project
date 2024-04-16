<script>
    export let icon = "";
    export let iconAlt = "";

    export let styleHeader = "";
    export let styleIcon = "object-contain";
    export let styleIconDiv = "mr-4";
    export let styleSectionColor = "";
    export let styleSectionLayout = "flex-col min-w-0 mx-auto p-8";
    export let styleSectionSize = "max-w-[56rem]";
</script>

<section class="flex {styleSectionSize} {styleSectionLayout} {styleSectionColor}">
    <header class="flex items-center mb-4 {styleHeader}">
        {#if icon != ""}
            <div class="size-32 {styleIconDiv}">
                <img src={icon} alt={iconAlt} class="size-full {styleIcon}" />
            </div>
        {/if}
        <slot name="header" />
    </header>
    <slot name="content" />
</section>
