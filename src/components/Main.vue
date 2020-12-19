<template>
<div class="bg">
<!-- <div class="container-fluid"> -->
<div class="container">
    <!-- 悬浮组件 -->
    <vote :show="show" @submit="submit" />
    <!-- 登录组件 -->
    <login :login_show="login_show" @submit="signIn"/>
    <!-- 导航栏 -->
    <navigation />
    <!-- 投票页面 -->
    <div class="jumbotron">
        <h1>CAST YOUR SACRED VOTE</h1>
        <p><button id="vote" @click='showVote'  class="btn btn-success btn-lg" href="#" role="button">VOTE!</button></p>
        <!-- 点击后调用apiTest函数 -->
        <!-- <p><button @click="apiTest">apitest</button></p> -->
    </div>
    <!-- 新闻栏&总统候选人介绍 -->
    <div class="row row-cols-sm-2 row-cols-1">
        <!-- 新闻栏目 -->
        <div class="col">
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <!-- 新闻列表 -->
            <ul id="newList" class="list-group list-group-flush">
                <a class="text-muted" href="/"><li class="list-group-item">Election</li></a>
                <a class="text-muted" href="/NewsPage"><li class="list-group-item">US</li></a>
                <a class="text-muted" href="/NewsPage2"><li class="list-group-item">Politics</li></a>
                <li class="list-group-item">Business</li>
                <li class="list-group-item">Health</li>
                <li class="list-group-item">Opinion</li>
                <li class="list-group-item">Sports</li>
            </ul>
        </div>
        </div>
        <!-- 图片轮播候选人 -->
        <div class="col">
        <div class="shadow-lg">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="imgSrc1" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block" style="word-break:normal">
                            <h5>Trump probably can't pardon himself</h5>
                            <p>(CNN)President Donald Trump, has acknowledged -- sort of and without admitting defeat -- that Joe Biden will be taking over on January 20 at noon.</p>
                        </div>
                    </div>
                        <div class="carousel-item">
                            <img :src="imgSrc2" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block" style="word-break:normal">
                                <h5>Trump's case of coronavirus changed the conversation</h5>
                                <p>(CNN)Coronavirus remains the most prominent thing Americans have seen.</p>
                            </div>
                        </div>
                    <div class="carousel-item">
                        <img :src="imgSrc3" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block" style="word-break:normal">
                            <h5>Electoral College set to seal Trump's fate</h5>
                            <p>(CNN)A constitutional ritual that is normally a little-noticed curiosity will Monday turn into a symbol of the US political system's durability.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>  
        </div>
        </div>
    </div>
    <!-- 脚注 -->
    <div class="card-footer text-muted">
        © 2020-2021
    </div>
</div>
</div>
</template>

<script>
// 引入vote和login组件
import vote from './Vote.vue'
import login from './Login.vue'
// 引入导航栏
import navigation from './Navigation.vue'
// 导入axios
import axios from 'axios'
export default {
    name:"main",
    data(){
        return {
            imgSrc1:require('../assets/tump.jpg'),
            imgSrc2:require('../assets/trump2.jpg'),
            imgSrc3:require('../assets/trump3.jpg'),
            show: false,
            login_show: false,
        }
    },
    methods: {
        // api调用函数
        apiTest(){
            axios({

                method:'get',
                url:'http://10.252.64.119:8000/news/',
                // 传递参数
                params: {

                },
                // 设置请求头信息，可以传递空值
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }).then(response => {
                // 请求成功
                let res = response.data;
                console.log(res);
            }).catch(error => {
                // 请求失败，
                console.log(error);
            });
        },

        submit() {
            // 确认弹窗回调
            alert("success"),
            this.show = false
        },

        showVote(){
            this.login_show = true
            // this.show = true
        },

        signIn(){
            this.login_show = false,
            this.show = true
        }
    },
    components: {
        vote,
        login,
        navigation
    }
}
</script>

<style scoped>
#demo_div { 
    bottom: 0; 
    width: 100%;
    left: 0;
    /* background-color: blue; */
} 
.bg {
    background-image:url('../assets/bg4.png');
    background-repeat:no-repeat;
    background-size: 100%;
    background-attachment:fixed;
    background-position:center;
}
.jumbotron {
    box-shadow: 3px 0px 5px #fffefe;
}

#newList {
    box-shadow: 3px 3px 5px #fffefe;
}
#vote {
    width: 30%;
}
</style>