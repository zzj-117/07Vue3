<template>
    <div id="demo3">
        <p>3.请介绍一下自己</p>
        <textarea rows="6" cols="20"  v-model="content" ></textarea><br>
        <span @click="addContent()">提交</span>
        <span @click="doBack()">上一页</span>
        <span @click="doRst()">重置</span>
    </div>
</template>

<script>
    export default {
        name: "my-page3",
        data(){
            return{
                content:''
            }
        },
        methods:{
            doBack(){
               this.$router.push("/page2");

            },
            doRst(){
                  this.content='';
            },
            addContent(){
                this.$store.commit("addList",{content:this.content});
                this.$router.push('/page4');
            }
        }
    }

</script>

<style scoped>
    p{margin-top: 50px;line-height: 2em;}
    span{margin-right: 25px; color: darkgreen ; font-weight: 500;}
</style>