<template>
    <h1 class="mb-4">Ingredients</h1>

    <ItemList
        :items="list"
        type="ingredient"
        :place-holders-count="isLoading ? 24 : 0"
    />

    <button
        class="btn btn-primary btn-lg w-100 mt-5"
        @click="page++"
        v-if="!isLoading"
    >
        Load more
    </button>
</template>

<script setup>
import ItemList from '@/components/ItemList.vue'
import { computed, onMounted, ref } from 'vue'

let items = ref([])
const isLoading = ref(true)
const page = ref(1)
const perPage = 24

const list = computed(() => {
    return items.value.slice(0, page.value * perPage)
})

const fetchData = async () => {
    try {
        isLoading.value = true

        let data = await fetch(
            'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
        )

        items.value = (await data.json()).meals.map(({ strIngredient }) => {
            return {
                title: strIngredient,
                thumbnail: `https://www.themealdb.com/images/ingredients/${strIngredient}.png`,
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
