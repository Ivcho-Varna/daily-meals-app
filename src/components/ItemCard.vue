<template>
    <router-link class="card" :to="getUrl()" :title="title">
        <div class="card-header p-0" v-if="thumbnail">
            <img
                :src="`${thumbnail}${type === 'meal' ? '/preview' : ''}`"
                class="img-thumbnail bg-transparent border-none border-0 rounded-0 p-0"
                :alt="title"
                v-if="thumbnail"
                :height="imageHeight"
                :width="imageWidth"
            />
        </div>

        <div class="card-body" v-if="title">
            <h6
                class="card-title d-inline-block text-truncate w-100 text-center m-0"
            >
                {{ title }}
            </h6>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    id: {
        required: true,
        type: [String, Number],
    },

    title: {
        required: true,
        type: String,
    },

    type: {
        required: true,
        type: String,
    },

    thumbnail: {
        required: false,
        type: String,
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

const getUrl = () => {
    switch (props.type) {
        case 'category':
            return `/category?name=${props.title}&type=${props.type}`
        case 'area':
            return `/category?name=${props.title}&type=${props.type}`
        case 'ingredient':
            return `/category?name=${props.title}&type=${props.type}`
        case 'meal':
            return `/meal?id=${props.id}`
        default:
            return ''
    }
}
</script>

<style lang="scss">
.card {
    &:hover {
        opacity: 0.8;
    }
}
</style>
