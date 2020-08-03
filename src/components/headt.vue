<template>
  <div id="headert" :style="{'position':customFixed?'fixed':'absolute'}">
      <slot name='fh'></slot>
      <span>{{headtTxl}}</span>
      <slot name='zy'></slot>
       </div>  
</template>

<script>
export default {
    name:'headert',
    data(){
        return{
       

        }
    },
    props:{
        'headtTxl':{
            type:String,
            default:'标题'
        },
        'customFixed':{
            type:Boolean,
            default:'默认'
        }
    }
}
</script>

<style scoped>
#headert{
    display:flex;display:-webkit-flex;background:#ccc;height:40px;line-height:40px;
    position:fixed;top:0;width:100%;z-index:333;
}
#headert button{height:40px;width:80px;}
#headert button:nth-of-type(1){margin-right:auto;}
#headert button:nth-of-type(2){margin-left:auto;}
#headert span{display:block;}
</style>
