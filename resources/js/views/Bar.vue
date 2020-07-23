<template>
    <div>
        <h1>Content from Bar <span v-text="bardata"></span></h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bardata:'Data Bar',
        }
    }
}
</script>
