<template>
    <h1 class="mb-4">Recipes by Category</h1>
    <ItemList
        :items="items"
        type="category"
        :place-holders-count="isLoading ? 12 : 0"
        :image-width="320"
        :image-height="200"
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
            'https://www.themealdb.com/api/json/v1/1/categories.php'
        )

        items.value = (await data.json()).categories.map(
            ({ strCategory, strCategoryThumb }) => {
                return {
                    title: strCategory,
                    thumbnail: strCategoryThumb,
                }
            }
        )
    } catch (e) {
        isLoading.value = false
    } finally {
        isLoading.value = false
    }
}

onMounted(fetchData)
</script>
