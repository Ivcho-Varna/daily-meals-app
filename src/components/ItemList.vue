<template>
    <div class="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-4">
        <template v-if="placeHoldersCount">
            <template v-for="item in placeHoldersCount" :key="item.title">
                <div class="col">
                    <ItemCardPlaceholder />
                </div>
            </template>
        </template>

        <template v-else>
            <template v-for="item in items" :key="item.title">
                <div class="col">
                    <ItemCard
                        v-bind="{ ...item }"
                        :type="type"
                        :image-height="imageHeight"
                        :image-width="imageWidth"
                    />
                </div>
            </template>
        </template>
    </div>
</template>

<script setup>
import ItemCard from '@/components/ItemCard.vue'
import ItemCardPlaceholder from '@/components/ItemCardPlaceholder.vue'

defineProps({
    items: {
        required: true,
        type: Array,
    },

    type: {
        required: true,
        type: String,
    },

    placeHoldersCount: {
        required: true,
        type: Number,
    },

    imageHeight: {
        required: false,
        type: Number,
        default: 200,
    },

    imageWidth: {
        required: false,
        type: Number,
        default: 200,
    },
})
</script>
