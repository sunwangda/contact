<template>
  <div class="hello">
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>					
        </div>
        
	</div>
   <!-- <headt headtTxl='通讯录' customFixed>
     <button slot='fh'>返回</button>
      <button slot='zy'>主页</button>
   </headt> -->
   
   <list :userData='userData'></list>
   <FloatBall :text="'+'"></FloatBall>
   
   
   </div>
</template>
<script>
import FloatBall from '@/components/FloatBall';
import headt from '@/components/headt'
import list from '@/components/list'
import * as index from '@/api/index.js'
export default {
  name: 'HelloWorld',
  name: 'Search',
  components:{headt,list,FloatBall},
  data () {
    return {
        param: '',
        message: '',
        info:{'username':''},
      msg: 'Welcome to Your Vue.js App',
      userData:[
        {
            'index':'A',
            'user':[
                {'name':'a1','phone':'123456789'},
            ]
        },
        // {
        //     'index':'B',
        //     'user':[
        //         {'name':'b1','tel':'123456789'},
        //         {'name':'b2','tel':'123456789'},
        //         {'name':'b3','tel':'123456789'},
        //     ]
        // },
        // {
        //     'index':'C',
        //     'user':[
        //         {'name':'c1','tel':'123456789'},
        //         {'name':'c2','tel':'123456789'},
        //         {'name':'c3','tel':'123456789'},
        //     ]
        // },
        // {
        //     'index':'D',
        //     'user':[
        //         {'name':'d1','tel':'123456789'},
        //         {'name':'d2','tel':'123456789'},
        //         {'name':'d3','tel':'123456789'},
        //     ]
        // },
        // {
        //     'index':'E',
        //     'user':[
        //         {'name':'e1','tel':'123456789'},
        //         {'name':'e2','tel':'123456789'},
        //         {'name':'e3','tel':'123456789'},
        //     ]
        // },
        // {
        //     'index':'F',
        //     'user':[
        //         {'name':'f1','tel':'123456789'},
        //         {'name':'f2','tel':'123456789'},
        //         {'name':'f3','tel':'123456789'},
        //     ]
        // },
    ]
    }
  },
   watch: {
        message(newVal) {
          this.info.username = this.message
          console.log(this.username)
          // console.log(this.message)
          index.fetchData(this.info).then(res => {
                        console.log(res)
                        this.userData = res.data
                        
                    })
        }
    },
    mounted:function(){
        this.createcode();//需要触发的函数
      },
  methods: {
  //下面是createcode函数
   createcode(){
       
           index.fetchData(this.param).then(res => {
                        console.log(res)
                        this.userData = res.data
                        
                    })
        
       },
    },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>
