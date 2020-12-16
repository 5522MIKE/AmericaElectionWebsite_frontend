<template>
    <div class="bg">
        <div class="container">
            <!-- 导航栏 -->
            <navigation />
            <!-- 数据可视化 -->
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
            <div class="card-footer text-muted">
                © 2020-2021
            </div>
        </div>
    </div>
</template>

<script>
    // 引入数据可视化组件
    import MapChart from './MapChart.vue';
    import BarChart from './BarChart.vue';
    // 引入导航栏
    import navigation from './Navigation.vue'

    export default {
        name: "main",
        components: {
            'map-chart': MapChart,    //地图组件
            'bar-chart': BarChart,    //条形图
            navigation                //导航栏
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