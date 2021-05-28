<template>
<div>
    <h1>test rating 2</h1>
    <div v-for="star in maxStarts" :key="star" class="star"></div>
</div>  
</template>

<script>
export default {
    props: {
        maxStarts: {
            type: Number
        }
    }
}
</script>

<style>

</style>