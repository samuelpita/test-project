<script>
    import { glob } from "./Global.svelte";

    export let border = "";
    export let color = "bg-gradient-to-tl from-primary-800 to-secondary-600";
    export let layout = "flex flex-col items-center";
    export let margin = glob.margin.main.b;
    export let padding = glob.padding.card;
    export let round = "rounded-lg";
    export let sizing = "w-full";
</script>

<section class="{border} {color} {layout} {margin} {padding} {round} {sizing}">
    <slot>
        <h2>Hello World!</h2>
        <p>Lorem ipsum dolor sit</p>
    </slot>
</section>
