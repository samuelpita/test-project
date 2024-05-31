<script>
    import Cover from "$lib/components/Cover.svelte";
    import CoverCard from "$lib/components/CoverCard.svelte";
    import Frame from "$lib/components/Frame.svelte";
    import HeaderBasic from "$lib/components/HeaderBasic.svelte";
    import ImageTooltip from "$lib/components/ImageTooltip.svelte";
    import VisibilityBasic from "$lib/components/VisibilityBasic.svelte";
</script>

<Cover contentColor="bg-gradient-to-tl from-primary-800 to-secondary-600">
    <VisibilityBasic slot="content">
        <div class="max-w-3xl mb-1 xl:mb-2 mx-auto">
            <img src="home-title-anim.png" alt="" class="size-full object-contain" />
        </div>
        <h3 class="text-center">Programmer & Graphics Designer</h3>
    </VisibilityBasic>

    <div class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-main" slot="graphic">
        <img src="./home-title-0.jpeg" alt="" class="size-full object-cover" />
        <img src="./home-title-1.jpeg" alt="" class="size-full object-cover" />
        <img src="./home-title-2.jpeg" alt="" class="size-full object-cover" />
        <img src="./home-title-3.jpeg" alt="" class="size-full object-cover" />
    </div>
</Cover>

<main class="w-full flex flex-col items-center">
    <article class="m-main-y">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic icon="./about-me.svg" iconSize="w-16 lg:w-20 2xl:w-24">
                    <h2>About Me</h2>
                </HeaderBasic>
                <p>
                    My name is Samuel Pita, and I am a Filipino local in Whistler, and have been for
                    almost a decade at this point. I like programming, as well as computers &
                    technology in general. I also like doing media and web design, and I'm a strong
                    advocate for better urbanism. I was born in the Philippines in 2006, and I've
                    moved several times before my family and I settled in Whistler in the summer of
                    2014. I'm currently in Whistler Secondary as a Grade 12 student, and I hope to
                    be in Vancouver, studying Computer Science in BCIT or Douglas College next year.
                </p>
            </VisibilityBasic>
        </Frame>
    </article>

    <article class="m-main-y">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic flipped={true}>
                    <h2 class="text-right">Works & Stuff</h2>
                </HeaderBasic>
            </VisibilityBasic>

            <!-- Capstone Portfolio -->
            <VisibilityBasic>
                <CoverCard contentColor="bg-gradient-to-t from-cyan-800 to-emerald-600">
                    <svelte:fragment slot="content">
                        <h2 class="text-center mb-2">
                            <a href="/portfolio">My Capstone Portfolio</a>
                        </h2>
                        <p class="text-center">
                            My life & learning journey, compiled in a webpage.
                        </p>
                    </svelte:fragment>

                    <ImageTooltip
                        slot="graphic"
                        image="./home-portfolio.jpeg"
                        imageAlt="River near Nairn Falls B.C."
                    />
                </CoverCard>
            </VisibilityBasic>

            <!-- Programming Projects -->
            <VisibilityBasic>
                <CoverCard
                    contentColor="bg-gradient-to-t from-purple-800 to-sky-600"
                    flipped={true}
                >
                    <svelte:fragment slot="content">
                        <h2 class="text-center mb-2">
                            <a href="/code">Programming Projects</a>
                        </h2>
                        <p class="text-center">Includes neatly-written source code.</p>
                    </svelte:fragment>

                    <div
                        class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-main"
                        slot="graphic"
                    >
                        <ImageTooltip image="./code/js-logo.png" imageAlt="JavaScript logo" />
                        <ImageTooltip image="./code/python-logo.png" imageAlt="Python logo" />
                    </div>
                </CoverCard>
            </VisibilityBasic>

            <!-- Arts & Media -->
            <VisibilityBasic>
                <CoverCard contentColor="bg-gradient-to-t from-orange-700 to-fuchsia-600">
                    <svelte:fragment slot="content">
                        <h2 class="text-center mb-2">
                            <a href="/art">Arts & Media</a>
                        </h2>
                        <p class="text-center">C#t Design by Samuel Pita.</p>
                    </svelte:fragment>

                    <div
                        class="size-full grid grid-cols-2 auto-rows-fr bg-white gap-main"
                        slot="graphic"
                    >
                        <ImageTooltip
                            image="./art/ma-night-tempo.png"
                            imageAlt="My Ma as a Japanese pop singer from the 80s"
                            styleImage="object-contain"
                        />
                        <ImageTooltip
                            image="./art/student-planner-2023-2024.png"
                            imageAlt="Student planner cover for Whistler Secondary, year 2023-2024"
                            style="size-full row-span-2"
                            styleImage="object-contain"
                        />
                        <ImageTooltip
                            image="./art/tanay.png"
                            imageAlt="Tanay, Philippines"
                            styleImage="object-contain"
                        />
                    </div>
                </CoverCard>
            </VisibilityBasic>
        </Frame>
    </article>
</main>
