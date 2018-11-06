<template>
    <div class="tab">
        <div class="tab-nav">
            <div class="together" :class="{'active':tab === 1}" @click="toTab(1)">热门排行</div>
            <div class="together" :class="{'active':tab === 2}" @click="toTab(2)">推荐更多</div>
         </div>
         <div class="tab-content">
             <app-hot v-if="tab === 1"></app-hot>
             <app-more v-else></app-more>
         </div>
    </div>
</template>

<script>
import Hot from '@/components/hot/Hot'
import More from '@/components/more/More'
export default {
    data(){
        return{
            tab: 1
        }
    },
    components:{
        "app-hot":Hot,
        "app-more":More
    },
    methods:{
        toTab(index){
            this.tab = index
            // console.log(index)
        }
        
    }
}
</script>

<style scoped>
.tab-nav{
    height: 34px;
    line-height: 34px;
    margin: 0 12px;
    border: 1px solid #00a0fd;
    border-radius: 4px;
    margin-top: 12px;
    display: flex;
}
/* .tab-nav .tab-left{
    
} */
.tab-nav .together{
    flex: 1;
    text-align: center;
    color: #00a0fd;
    letter-spacing: 2px;
    font-size: 15px;
}
.active{
    color: #fff !important;
    background-color: #00a0fd;
}
</style>
