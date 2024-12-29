<template>
    <RecipePlaceholder v-if="isLoading" />

    <div class="row g-5" v-else>
        <div class="col-12 col-md-6 col-lg-4">
            <img :src="meal.strMealThumb" class="img-thumbnail" alt="..." />

            <div v-if="meal.strYoutube" class="d-none d-md-block">
                <h5 class="mt-5">Video instructions:</h5>

                <div class="ratio ratio-16x9">
                    <iframe
                        :src="generateEmbedLink(meal.strYoutube)"
                        title="YouTube video"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-8">
            <section>
                <h1>{{ meal.strMeal }}</h1>

                <router-link
                    :to="`/category/?name=${meal.strCategory}&type=category`"
                    class="col badge rounded-pill text-bg-secondary"
                >
                    {{ meal.strCategory }}
                </router-link>

                <router-link
                    :to="`/category/?name=${meal.strArea}&type=area`"
                    class="col badge rounded-pill text-bg-secondary mx-2"
                >
                    {{ meal.strArea }}
                </router-link>
            </section>

            <section>
                <h6 class="h3 my-4">Ingredients</h6>

                <div class="row row-cols-1 row-cols-lg-2">
                    <template
                        v-if="
                            Array.isArray(meal.ingredients) &&
                            meal.ingredients.length
                        "
                    >
                        <template v-for="{ name, measure } in meal.ingredients">
                            <div class="col">
                                <img
                                    class="img-thumbnail m-1"
                                    :src="`https://www.themealdb.com/images/ingredients/${name}-Small.png`"
                                    alt=""
                                    height="50"
                                    width="50"
                                />

                                <span
                                    ><span class="fw-medium"
                                        ><router-link
                                            :to="`/category?name=${name}&type=ingredient`"
                                            >{{ name }}:</router-link
                                        ></span
                                    >
                                    {{ measure }}</span
                                >
                            </div>
                        </template>
                    </template>
                </div>
            </section>

            <section class="mt-4">
                <h6 class="h3 mb-4">Instructions</h6>

                <p>{{ meal.strInstructions }}</p>

                <p class="mt-2">
                    <span>Source: </span>
                    <a :href="meal.strSource" target="_blank">Link</a>
                </p>
            </section>

            <section v-if="meal.strYoutube" class="d-block d-md-none">
                <h5 class="mt-5">Video instructions:</h5>

                <div class="ratio ratio-16x9">
                    <iframe
                        :src="generateEmbedLink(meal.strYoutube)"
                        title="YouTube video"
                        allowfullscreen
                    ></iframe>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import RecipePlaceholder from '@/components/RecipePlaceholder.vue'

const props = defineProps({
    id: {
        required: false,
        type: [String, Number],
    },

    random: {
        required: false,
        default: false,
        type: Boolean,
    },
})

let meal = ref({})
const isLoading = ref(true)

function generateEmbedLink(youtubeUrl) {
    // Regular expression to extract the video ID
    const regex = /(?:v=|\/)([0-9A-Za-z_-]{11})/
    const match = youtubeUrl.match(regex)

    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}?si=ARtVhki5de2CzzY5`
    } else {
        return 'Invalid YouTube URL'
    }
}

const getIngredients = (jsonData) => {
    return Object.keys(jsonData)
        .filter((key) => key.startsWith('strIngredient') && !!jsonData[key])
        .map((key) => {
            return {
                name: jsonData[key],
                measure: jsonData[key.replace('Ingredient', 'Measure')] || '',
            }
        })
}

const fetchData = async () => {
    try {
        isLoading.value = true

        let data = await fetch(
            props.random
                ? 'https://www.themealdb.com/api/json/v1/1/random.php'
                : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`
        )

        meal.value = (await data.json()).meals[0]
        meal.value.ingredients = getIngredients(meal.value)
    } catch (e) {
        isLoading.value = false
    } finally {
        isLoading.value = false
    }
}

onMounted(fetchData)
</script>
