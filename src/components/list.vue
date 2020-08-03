<template>
 <div id="list">
     <ul  class="list_user" ref='listUser'>
        <li v-for="item in userData">
            <p>{{item.index}}</p>
            <ul>
                <li v-for="item in item.user">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>{{item.phone}}</small></li>
                
            </ul>
        </li>
     </ul>
     <ul class="list_index" ref="Po">
         <li v-for="item in userIndex" @touchstart='setScroll'>{{item}}</li>
        
     </ul>
     </div>   
</template>

<script>
export default {
   name:'list',
   data(){
      return{

      }
   }, 
   props:{
       'userData':{
           type:Array,
           default:function(){
               return []
           }
           
       }
   },
   //计算属性
   computed:{
       userIndex:function(){
          return this.filterIndex(this.userData);
          console.log(this.filterIndex());
       }  
   },
   //右侧导航数据的调取
   methods:{
       filterIndex:function(data){
        var result=[];
        for(var i=0;i<data.length;i++){
            if(data[i].index){
                console.log(data[i].index)
                result.push(data[i].index)
            }
        }
        return result;
       },
       //右侧导航的距离位置
       diweiPo:function(){
           var dw=this.$refs.Po.offsetHeight;
            this.$refs.Po.style.marginTop=-dw/2+'px'
       },
       //设置点击位置的值
       setScroll:function(ev){
           var setzhi=this.$refs.listUser.getElementsByTagName('p');
           console.log(setzhi);
           for(var i=0;i<setzhi.length;i++){
               if(setzhi[i].innerHTML == ev.target.innerHTML){
                   document.documentElement.scrollTop = setzhi[i].offsetTop;
               }
           }
       }
   },
  mounted:function(){
      this.diweiPo();
  }

}
</script>

<style scoped>
*{padding:0;margin:0;}
li{list-style-type:none;}
#list{position:relative;top:40px;}
#list .list_user p,#list .list_user ul{padding:0 10px;}
#list .list_user p{height:40px;background:#999;line-height:40px;font-size:20px;}
#list .list_user ul li{height:40px;height:40px;line-height:40px;}
#list .list_index{position:fixed;top:50%;right:20px;}
</style>
