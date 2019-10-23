<template>
    <div id="index">
        <p>1.请问您的性别是：</p>
        <input type="radio" name="gender" value="男" v-model="radio"/><label>男</label>
        <input type="radio" name="gender" value="女" v-model="radio"/><label>女</label>
        <input type="radio" name="gender" value="保密" v-model="radio"/><label>保密</label><br>
        <span @click="doNext()">下一步</span>
        <span @click="doRest()">重置</span>
    </div>
</template>

<script>
    export default {
        name: "my-page1",
        data(){
            return{
                radio:'保密'
            }
        },
        methods:{
            doNext(){
               this.$router.push('/page2') ;
               this.$store.commit("addList",{sex:this.radio});
            },
            doRest(){
                this.radio='保密';
            }
        }
    }
</script>

<style scoped>
*{margin: 0px;padding: 0px; line-height: 2em;}
    p{margin-top: 50px;}
    label{margin-right: 5px;}
    span{margin-right: 15px; color: darkgreen ; font-weight: 500;}
</style>