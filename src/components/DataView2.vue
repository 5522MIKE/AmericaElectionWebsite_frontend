<template>
    <div class="bg">
        <div class="container">
            <!-- 导航栏 -->
            <navigation />
            <!-- 数据可视化 -->
            <div class="main">
                <!-- 地图组件 -->
                <div class="row">
                    <map-chart v-on:clickstate="clickstate"></map-chart>
                </div>
                <!-- 条形图组件 -->
                <div class="row">
                    <div class="col-sm-12 col-lg-6">
                        <bar-chart-2 v-bind:state="state"></bar-chart-2>
                    </div>
                    <div class="col-sm-12 col-lg-6">
                        <pie-chart v-bind:state="state"></pie-chart>
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
    // 引入数据可视化组件
    import MapChart from './MapChart.vue'
    import BarChart2 from './BarChart2.vue';
    import PieChart from './PieChart.vue';
    // 引入导航栏
    import navigation from './Navigation.vue'

    export default {
        name: "main",
        data(){
            return {
                state: 'Alabama'
            }
        },
        components: {
            // 'map-chart': MapChart,    //地图组件
            'map-chart': MapChart,
            'pie-chart': PieChart,
            'bar-chart-2': BarChart2,    //条形图
            navigation                //导航栏
        },
    
        methods: {
            clickstate(val){
                this.state = val;
                // console.log(this.state);
            }
        },
        mounted() {
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