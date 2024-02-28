<script>
    export let icon = "";
    export let iconAlt = "";

    export let styleHeader = "items-center mb-4";
    export let styleIconDiv = "size-24 mr-4";
    export let styleSectionColor = "";
    export let styleSectionLayout = "flex-col max-w-[40rem] xl:max-w-[56rem] min-w-0 mx-auto p-8";
</script>

<section class="flex {styleSectionLayout} {styleSectionColor}">
    <header class="flex {styleHeader}">
        <div class={styleIconDiv}>
            <img src={icon} alt={iconAlt} class="size-full object-cover" />
        </div>
        <slot name="header" />
    </header>
    <slot name="content" />
</section>
