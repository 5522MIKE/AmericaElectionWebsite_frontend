<template>
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
        <div class="row">
            <map-chart></map-chart>    
        </div>

        <ul class="nav nav-tabs border-0" id="myTab" >
            <li class="nav-item">
                <button class="nav-link active" data-toggle="tab" href="#admin" v-on:click="tab1()" >
                    <h6>各州投票情况</h6>
                </button>
            </li>
            <li class="nav-item">
                <button class="nav-link" data-toggle="tab" href="#edit" v-on:click="tab2()">
                    <h6>所有投票情况</h6>
                </button>
            </li>
        </ul>
        <!-- 总体数据可视化 -->
        <div class="tab-content border-top-0" id="myTabContent" >
            <div  id="admin" v-show="see">
                <div class="row">
                    <div class="col-lg-6 col-ms-12" >
                        <bar-chart></bar-chart>
                    </div>
                    <div class="col-lg-6 col-ms-12" >
                        <pie-chart></pie-chart>
                    </div>
                </div>
            </div>
            <div id="edit" v-show="!see">
                <div class="row">
                    <div class="col-lg-12 col-ms-12" >
                        <bar-chart-2></bar-chart-2>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
    import MapChart from './MapChart.vue';
    import BarChart from './BarChart.vue';
    import PieChart from './PieChart.vue';
    import BarChart2 from './BarChart2.vue';


    export default {
        name: "main",
        components: {
            'map-chart': MapChart,
            'bar-chart': BarChart,
            'pie-chart': PieChart,
            'bar-chart-2': BarChart2  
        },
        data(){
            return {
                see: true
            }
            
        },
        methods: {
            tab1: function(){
                this.see = true  
            },
            tab2: function(){
                this.see = false
            }
        },
        mounted() {
            MapChart.methods.myEcharts(),
            PieChart.methods.myEcharts(),
            BarChart.methods.myEcharts(),
            BarChart2.methods.myEcharts()
            
        }
        
    };
    
</script>