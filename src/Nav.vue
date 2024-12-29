<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchTerm = ref('')
const categories = ref([])
const countries = ref([])

const handleSearch = async () => {
    await router.push(`/search?q=${searchTerm.value}`)
}

const fetchData = async () => {
    try {
        const [categoriesRequest, countriesRequest] = await Promise.all([
            fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
            fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list'),
        ])

        const [categoriesJson, countriesJson] = await Promise.all([
            categoriesRequest.json(),
            countriesRequest.json(),
        ])

        categories.value = categoriesJson.categories.map(({ strCategory }) => {
            return {
                title: strCategory,
            }
        })

        countries.value = countriesJson.meals.map(({ strArea }) => {
            return {
                title: strArea,
            }
        })
    } catch (e) {
        //
    } finally {
        //
    }
}

onMounted(fetchData)
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link to="/" class="navbar-brand">Daily meals</router-link>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Categories
                        </a>

                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li v-for="category in categories">
                                <router-link
                                    class="dropdown-item"
                                    :to="`/category?name=${category.title}&type=category`"
                                    :exact-active-class="''"
                                    :active-class="''"
                                    >{{ category.title }}</router-link
                                >
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Countries
                        </a>

                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li v-for="country in countries">
                                <router-link
                                    class="dropdown-item"
                                    :to="`/category?name=${country.title}&type=area`"
                                    :exact-active-class="''"
                                    :active-class="''"
                                    >{{ country.title }}</router-link
                                >
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/ingredients" class="nav-link"
                            >Ingredients</router-link
                        >
                    </li>

                    <li class="nav-item">
                        <router-link to="/send-recipe" class="nav-link"
                            >Send us your recipe</router-link
                        >
                    </li>
                </ul>

                <form class="d-flex me-2" @submit="handleSearch">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search recipes..."
                        aria-label="Search"
                        v-model="searchTerm"
                    />

                    <button class="btn btn-outline-primary" type="submit">
                        Search
                    </button>
                </form>

                <div class="d-flex">
                    <router-link
                        to="/random-meal"
                        class="btn btn-outline-primary"
                        >Find a random recipe</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
</template>
