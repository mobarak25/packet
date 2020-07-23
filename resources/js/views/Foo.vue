<template>
    <div>
        <h1>Content from Foo <span v-text="foodata"></span></h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            foodata:'Data Foo',
        }
    }
}
</script>