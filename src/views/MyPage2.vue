<template>
    <div id="demo2">
       <p>请选择您的兴趣爱好</p>
        <input type="checkbox"  value="看书" v-model="hobby"/><label>看书</label>
        <input type="checkbox"  value="游泳"v-model="hobby"/><label>游泳</label>
        <input type="checkbox"  value="跑步" v-model="hobby"/><label>跑步</label>
        <input type="checkbox"  value="看电影" v-model="hobby"/><label>看电影</label>
        <input type="checkbox"  value="听音乐" v-model="hobby"/><label>听音乐</label>
        <input type="checkbox"  value="动漫" v-model="hobby"/><label>动漫</label><br/>
        <span @click="doNext()">下一步</span>
        <span @click="doBack()">上一步</span>
       <span type="reset" @click="doClear()" v-model="output">重置</span>
    </div>
</template>

<script>
    export default {
        name: "my-page2",
        data(){
            return{
                output:false,
                hobby:[],
            }
        },
        methods:{
            doClear(){
                if(!this.output)
                    this.hobby=[]
            },
            doNext(){
                this.$router.push("/page3");
                this.$store.commit("addList",{hobby:this.hobby});
            },
            doBack(){
                this.$router.push("/page1");
            }
            }
    }
</script>

<style scoped>
    p{margin-top: 50px;line-height: 2em;}
    span{margin-right: 15px; color: darkgreen ; font-weight: 500;}
</style>