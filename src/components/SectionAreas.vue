<template>
    <h1 class="mb-4">Recipes by Nationality</h1>
    <ItemList
        :items="items"
        type="area"
        :place-holders-count="isLoading ? 12 : 0"
    />
</template>

<script setup>
import ItemList from '@/components/ItemList.vue'
import { onMounted, ref } from 'vue'
let items = ref([])
const isLoading = ref(true)

const fetchData = async () => {
    try {
        isLoading.value = true

        let data = await fetch(
            'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        )

        items.value = (await data.json()).meals.map(({ strArea }) => {
            return {
                title: strArea,
            }
        })
    } catch (e) {
        isLoading.value = false
    } finally {
        isLoading.value = false
    }
}

onMounted(fetchData)
</script>
