<script setup>
import Nav from '@/Nav.vue'
import Footer from '@/Footer.vue'
</script>

<template>
    <div class="d-flex flex-column h-100">
        <Nav />

        <main class="py-5 flex-shrink-0">
            <router-view></router-view>
        </main>

        <footer class="mt-auto">
            <Footer />
        </footer>
    </div>
</template>
