<template>
    <Hero />

    <div class="b-example-divider"></div>

    <div class="container">
        <div class="my-5">
            <SectionCategories />
        </div>
    </div>

    <div class="b-example-divider b-example-divider--small"></div>

    <div class="container">
        <div class="my-5">
            <SectionAreas />
        </div>
    </div>
</template>

<script setup>
import SectionCategories from '@/components/SectionCategories.vue'
import SectionAreas from '@/components/SectionAreas.vue'
import Hero from '@/components/Hero.vue'
import Features from '@/components/Features.vue'
</script>

<style lang="scss">
.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.1);
    border: solid rgba(0, 0, 0, 0.15);
    border-width: 1px 0;
    box-shadow:
        inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
        inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);

    &--small {
        height: 0.5rem;
    }
}
</style>
