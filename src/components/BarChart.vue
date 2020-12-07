<template>
        <div id="barChart" ref="barChart" autoresize:true style="width: 100%;height: 300px"></div>
</template>

<script>
import echarts from "echarts";

export default {
    name: "barChart",
    
    methods: {
        myEcharts(){
            let myChart = echarts.init(document.getElementById("barChart"));

            // let seiesData = [];             
            // let nameData = [];



            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {                         //图例
                    data: ['Trump', 'Biden', 'Other']
                },
                grid: {                       //绘制网格
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {                           //y轴，州名
                    type: 'category',
                    data: ['Alaska', 'California', 'Oregen','Washington','Utah']
                },
                series: [                       //数据
                    {
                        name: 'Trump',      
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]        //每个州Trump的票数
                    },
                    {
                        name: 'Biden',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Other',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    
                ]
            };
            
            
            window.addEventListener("resize",function(){
                myChart.resize()
            });
            myChart.setOption(option)
        }
        
    },
    mounted(){
        this.myEcharts();
    }


}
</script>