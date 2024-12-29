<template>
    <div class="container">
        <SectionSearch :query="route.query.q" :key="route.query.q" />
    </div>
</template>

<script setup>
import SectionSearch from '@/components/SectionSearch.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
