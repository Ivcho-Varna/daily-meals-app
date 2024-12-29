<template>
    <h1 class="mb-4" v-if="type !== 'ingredient'">{{ name }} recipes</h1>
    <h1 class="mb-4" v-else>Recipes with {{ name }}</h1>
    <ItemList
        :items="items"
        type="meal"
        :place-holders-count="isLoading ? 24 : 0"
    />
</template>

<script setup>
import ItemList from '@/components/ItemList.vue'
import { onMounted, ref } from 'vue'
let items = ref([])
const isLoading = ref(true)

const props = defineProps({
    name: {
        required: true,
        type: String,
    },

    type: {
        required: true,
        type: String,
    },
})

const fetchData = async () => {
    try {
        isLoading.value = true

        let data = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?${props.type.substr(0, 1)}=${props.name}`
        )

        items.value = (await data.json()).meals.map(
            ({ strMeal, strMealThumb, idMeal }) => {
                return {
                    title: strMeal,
                    thumbnail: strMealThumb,
                    id: idMeal,
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
