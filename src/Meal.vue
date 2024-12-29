<template>
    <div class="container">
        <Recipe :id="id" />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Recipe from '@/components/Recipe.vue'

const route = useRoute()
const { id } = route.query
</script>
