<template>
    <div id="demo4" >
        <span v-for = "item in list[0]">您的性别是：{{item}}</span><br>
        <span v-for = "item in list[1]">您的爱好是：{{item.join('、')}}</span><br>
        <span v-for = "item in list[2]">个人简介：{{item}}</span><br>
    </div>
</template>

<script>
    export default {
        name: "my-page4",
        data(){
            return{
                list:this.$store.state.list
            }
        }
    }
</script>

<style scoped>
    p{margin-top: 50px;}
    span{margin-right: 15px; color: darkgreen ; font-weight: 500;line-height: 2em;}
</style>