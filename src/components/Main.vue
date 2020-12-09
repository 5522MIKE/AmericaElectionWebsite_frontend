<template>
<div class="bg">
<div class="container">
    <!-- 悬浮组件 -->
    <vote :show="show" @submit="submit" />
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" replace>
    <a class="navbar-brand" href="#">2020 American Election</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                candidates
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/introduction">川建国</a>
                <a class="dropdown-item" href="/introductionb">乔振华</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/introductiono">其他</a>
                </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    </nav>

    <!-- 投票页面 -->
    <div class="jumbotron">
        <h1>CAST YOUR SACRED VOTE</h1>
        <p>...</p>
        <p><button id="vote" @click='showVote'  class="btn btn-success btn-lg" href="#" role="button">VOTE!</button></p>
        <!-- 点击后调用apiTest函数 -->
        <p><button @click="apiTest">apitest</button></p>
    </div>

    <!-- 新闻栏&总统候选人介绍 -->
    <div class="row">
        <!-- 新闻栏目 -->
        <div class="col">
            <!-- 新闻列表 -->
            <ul id="newList" class="list-group list-group-flush">
                <li class="list-group-item">NEWS</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
            </ul>
        </div>
        <!-- 图片轮播候选人 -->
        <div class="col">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="imgSrc1" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                        <div class="carousel-item">
                            <img :src="imgSrc2" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    <div class="carousel-item">
                        <img :src="imgSrc3" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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

    <!-- 脚注 -->
    <div>
        <footer class="mastfoot mt-auto">
            <div class="inner">
                <p>© 2020-2021 </p>
            </div>
        </footer>
    </div>
</div>
</div>
</template>

<script>
// 导入vote组件
import vote from './Vote.vue'
// 导入axios
import axios from 'axios'
export default {
    name:"main",
    data(){
        return {
            imgSrc1:require('../assets/tump.jpg'),
            imgSrc2:require('../assets/tump.jpg'),
            imgSrc3:require('../assets/tump.jpg'),
            show: false,
        }
    },
    methods: {
        // api调用函数
        apiTest(){
            axios({
                method:'get',
                url:'http://127.0.0.1:8000/news/',
                // 传递参数
                params: {
                },
                // 设置请求头信息，可以传递空值
                headers: {
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
            this.show = false
        },

        showVote(){
            this.show = true
        }
    },
    components: {
        vote
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
#carouselExampleCaptions {
    box-shadow: 3px 3px 5px #fffefe;
}
#newList {
    box-shadow: 3px 3px 5px #fffefe;
}
#vote {
    width: 30%;
}
</style>