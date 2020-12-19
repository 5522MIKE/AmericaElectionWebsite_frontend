<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" replace="/">
                <a class="navbar-brand" href="#">2020 American Election</a>
            </router-link>
            <!-- 候选人按钮 -->
            <ul class="navbar-nav mr-auto">
                <div class="d-flex p-2 bd-highlight">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="btn btn-outline-info dropdown-toggle my-2 my-lg-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            candidates
                            </a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="/introduction">Trump</a>
                            <a class="dropdown-item" href="/introductionb">Biden</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/introductiono">Other</a>
                            </div>
                        </li>
                    </ul>
                    &nbsp;&nbsp;
                    <!-- 数据可视化 数据地图-->
                        <router-link to="/DataView2" replace="/">
                            <a class="btn btn-outline-danger my-2 my-lg-0 mr-sm-2">Election Map</a> 
                        </router-link>
                    <!-- 数据可视化 数据条形图-->
                        <router-link to="/DataView" replace="/">
                            <a class="btn btn-outline-danger my-2 my-lg-0 mr-sm-2">Election Results</a> 
                        </router-link>
                </div>
            </ul>

            <!-- 查询 -->
            <ul class="navbar-nav mr-auto">
                <div class="d-flex p-2 bd-highlight">
                    <ul>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="keyword" aria-label="Search">
                        </ul>
                        <ul>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="lodedata">Search</button>
                        </ul> 
                </div>
            </ul>
            <!-- <nav class="navbar navbar-light bg-light"> -->
                <!-- <form class="form-inline my-2 my-lg-0"> -->
                        <!-- <ul>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="keyword" aria-label="Search">
                        </ul>
                        <ul>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="lodedata">Search</button>
                        </ul> -->
                <!-- </form> -->
            <!-- </nav> -->
        </nav>
    </div>
    <div class="container" v-show="search_show">
        <button class="btn btn-link btn-sm" @click="back">收起</button>
        <!-- <div>
            <h3>{{title}}</h3>
            <p class="text-center">{{author}}</p>
            <p class="text-justify">{{content}}</p>
        </div> -->
        <div class="content-card" v-for="(item ,index) in resultList" :key="index">
            <span v-html="item.title"></span><br>
            <span v-html="item.author"></span><br>
            <span v-html="item.content"></span>
        </div>
    </div>
</template>

<style scoped>
.container {
    background: linear-gradient(to left, #ebd0d0, #becddf);
    position: absolute;
    /* position: relative; */
    top: 35%;
    left: 50%;
    width: 100%;
    max-width: 1110px;
    padding: 0 30px;
    z-index:10;
    text-align: center;
    -webkit-transform: translate(-50%, 50vh);
    transform: translate(-50%, 50vh);
    opacity: 0;
    -webkit-animation: 0.75s 0.75s forwards slide_in;
    animation: 0.75s 0.75s forwards slide_in;
}
@-webkit-keyframes slide_in {
    100% {
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}
@keyframes slide_in {
    100% {
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}
@media (max-width: 640px) {
    .container {
        top: 50%;
    }
}
</style>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            keyword: '',
            title: '',
            author: '',
            content: '',
            deviceList: [],  // 调用json文件获取的全部数据
            resultList: [],   //真正展示的数据，也就是筛选后的数据
            search_show: false
        }
    },
    methods: {
        lodedata(){
            this.search_show = true
            axios({
                method:'get',
                url:'http://10.252.64.119:8000/news/search/'+this.keyword+'/',
                // 传递参数
                params: {
                },
                // 设置请求头信息，可以传递空值
                headers: {
                }
            }).then(response => {
                // 请求成功
                let res = response.data;
                this.deviceList = res.data;
                if(res.data.length == 0){
                    console.log(res.data.length)
                    alert("Sorry!There is no query record!")
                    this.search_show = false
                    this.keyword = ''
                }
                this.resultList = [];
                // console.log(this.deviceList)
                this.deviceList.forEach((item) => {
                    // console.log("sdd  d "+item.title)
                    // console.log(item.title.indexOf("of"))
                    if (item.title.indexOf(this.keyword) > -1 ||
                        item.author.indexOf(this.keyword) > -1 ||
                        item.content.indexOf(this.keyword) > -1) {
                    this.resultList.push(item)
                    }
                })
                this.resultList.map((item) => {
                    console.log(item.content)
                    item.title = this.brightKeyword(item.title)
                    item.author = this.brightKeyword(item.author)
                    item.content = this.brightKeyword(item.content)
                })
            }).catch(error => {
                // 请求失败，
                console.log(error);
            });
        },
        back(){
            this.search_show = false
            this.keyword = ''
        },
        brightKeyword(val) {
            let keyword = this.keyword   //获取输入框输入的内容
            // console.log(val.indexOf("of"))
            if (val.indexOf(keyword) !== -1) {  //判断这个字段中是否包含keyword
                //如果包含的话，就把这个字段中的那一部分进行替换成html字符
                return val.replace(keyword, `<font color='#f8f403'>${keyword}</font>`)
            } else {
                return val
            }
        }
    }
}
</script>