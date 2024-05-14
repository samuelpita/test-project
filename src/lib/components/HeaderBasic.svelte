<script>
    import { glob } from "./Global.svelte";

    export let flipped = false;

    export let icon = "./favicon.svg";
    export let iconAlt = "About Me";
    export let iconSize = "size-24 lg:size-28 2xl:size-32";

    export let id = "About Me";

    export let border = "border-white border-b-2";
    export let margin = glob.margin.main.b;
    export let padding = glob.padding.header;
</script>

<header class="w-full {border} {margin} {padding}" {id}>
    {#if flipped}
        <!-- Right -->

        <div class="flex flex-row-reverse items-center">
            {#if icon != ""}
                <div class="{iconSize} ml-6">
                    <img src={icon} alt={iconAlt} class="size-full object-contain" />
                </div>
            {/if}

            <div class="flex flex-col">
                <slot>
                    <h1>Hello World!</h1>
                    <h4>Lorem ipsum dolor sit</h4>
                </slot>
            </div>
        </div>
    {:else}
        <!-- Left -->

        <div class="flex items-center">
            {#if icon != ""}
                <div class="{iconSize} mr-6">
                    <img src={icon} alt={iconAlt} class="size-full object-contain" />
                </div>
            {/if}

            <div class="flex flex-col">
                <slot>
                    <h1>Hello World!</h1>
                    <h4>Lorem ipsum dolor sit</h4>
                </slot>
            </div>
        </div>
    {/if}
</header>
