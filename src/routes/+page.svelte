<script>
    import { determineInnerWidthType } from "$lib";

    import Card from "./Card.svelte";
    import CardImage from "./Card_Image.svelte";
    import Cover from "./Cover.svelte";
    import Section from "./Section.svelte";
    import Video from "./Video.svelte";
    import Visibility from "./Visibility.svelte";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<!-- Intro -->
<div class="w-full h-svh">
    <Cover>
        <svelte:fragment slot="content">
            <Video
                poster="./home-title-anim.png"
                src={{ mov: "./home-title-anim.mov", webm: "./home-title-anim.webm" }}
                style="max-w-[32rem] min-w-0 mx-auto transition duration-300"
                styleObserving="opacity-100 translate-y-0"
                styleNotObserving="opacity-0 -translate-y-8"
                threshold={1}
            >
                <p class="font-sans text-center text-xl">Programmer & Graphics Designer</p>
            </Video>
        </svelte:fragment>
        <div slot="graphic" class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-2">
            <img src="./home-title-0.jpeg" alt="" class="size-full object-cover" />
            <img src="./home-title-1.jpeg" alt="" class="size-full object-cover" />
            <img src="./home-title-2.jpeg" alt="" class="size-full object-cover" />
            <img src="./home-title-3.jpeg" alt="" class="size-full object-cover" />
        </div>
    </Cover>
</div>

<!-- About Me -->
<Visibility
    once={true}
    style="transition duration-300"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.5}
>
    <Section icon="./favicon.png">
        <h2 slot="header" class="font-sans">About Me</h2>
        <p slot="content" class="font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi ut libero,
            labore molestias doloribus neque provident nisi aliquid. Tempore minima numquam nam
            dicta possimus corrupti doloremque. Cumque, pariatur tenetur.
        </p>
    </Section>
</Visibility>

<!-- Capstone Project -->
<Visibility
    style="transition duration-300 pb-4 md:pb-0"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.25}
>
    <div class="w-full h-[60svh]">
        <Cover flipped={true}>
            <svelte:fragment slot="content">
                <h2 class="font-sans text-center">
                    <a href="/portfolio">My Capstone Portfolio</a>
                </h2>
                <p class="font-sans text-center text-xl">Check it out!</p>
            </svelte:fragment>
            <img src="./home-portfolio.jpeg" alt="" class="size-full object-cover" slot="graphic" />
        </Cover>
    </div>
</Visibility>

<!-- Programming -->
<Visibility
    style="transition duration-300 pb-4 md:pb-0"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.25}
>
    <div class="w-full h-[60svh]">
        <Cover>
            <svelte:fragment slot="content">
                <h2 class="font-sans text-center">
                    <a href="/code">Programming Projects</a>
                </h2>
                <p class="font-sans text-center text-xl">Includes neatly written source code.</p>
            </svelte:fragment>
            <img src="./home-portfolio.jpeg" alt="" class="size-full object-cover" slot="graphic" />
        </Cover>
    </div>
</Visibility>

<!-- Arts -->
<Visibility
    style="transition duration-300 pb-4 md:pb-0"
    styleObserving="opacity-100 translate-y-0"
    styleNotObserving="opacity-0 translate-y-8"
    threshold={0.25}
>
    <div class="w-full h-[80svh]">
        <Cover flipped={true}>
            <svelte:fragment slot="content">
                <h2 class="font-sans text-center">
                    <a href="/art">C#t Design</a>
                </h2>
                <p class="font-sans text-center text-xl">Digital arts & illustrations I made</p>
            </svelte:fragment>
            <div slot="graphic" class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-2">
                <img src="./home-title-0.jpeg" alt="" class="size-full object-cover" />
                <img src="./home-title-1.jpeg" alt="" class="size-full object-cover" />
                <img src="./home-title-2.jpeg" alt="" class="size-full object-cover" />
                <img src="./home-title-3.jpeg" alt="" class="size-full object-cover" />
            </div>
        </Cover>
    </div>
</Visibility>
