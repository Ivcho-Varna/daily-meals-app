<template>
    <div class="container">
        <SectionMeals :type="type" :name="name" :key="route.query" />
    </div>
</template>

<script setup>
import SectionMeals from '@/components/SectionMeals.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { name, type } = route.query
</script>
