<template>
    <div class="bg">
        <div class="container">
            <!-- 导航栏 -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">2020 America Election</a>
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
                        <a class="dropdown-item" href="#">川建国</a>
                        <a class="dropdown-item" href="#">乔振华</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">其他</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
            <div class="main">
                <!-- 地图组件 -->
                <div class="row">
                    <map-chart></map-chart>    
                </div>
                <!-- 条形图组件 -->
                <div class="row">
                    <bar-chart></bar-chart>
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
    import MapChart from './MapChart.vue';
    import BarChart from './BarChart.vue';



    export default {
        name: "main",
        components: {
            'map-chart': MapChart,    //地图组件
            'bar-chart': BarChart,    //条形图
        },
    
        methods: {
         
        },
        mounted() {
            // MapChart.methods.myEcharts(),          //这里是为了能够在改变窗口大小时刷新，响应式布局
            // BarChart.methods.myEcharts()
        }
        
    };
    
</script>
<style scoped>
.bg {
    background-image:url('../assets/bg4.png');
    background-repeat:no-repeat;
    background-size: 100%;
    background-attachment:fixed;
    background-position:center;
}

</style>