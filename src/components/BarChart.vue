<template>
        <div id="barChart" ref="barChart" style="width: 100%;height: 300px"></div>
</template>

<script>
import echarts from "echarts";

export default {
    name: "barChart",
    // data(){
    //     return{

    //     }
    // },
    methods: {
        myEcharts(){
            let myChart = echarts.init(document.getElementById("barChart"));

            var seriesLabel = {
                normal: {
                    show: true,
                    textBorderColor: '#333',
                    textBorderWidth: 2
                }
            }
            var option = {

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    left: "right" ,
                    data: ['Tramp', 'Bi','other']
                },
                grid: {
                    left: 100
                },
                toolbox: {
                    show: false,
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'value',
                    name: 'votes',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    data: ['New York'],
                    
                },
                series: [
                    {
                        name: 'Tramp',
                        type: 'bar',
                        data: [165],
                        label: seriesLabel,
                    },
                    {
                        name: 'Bi',
                        type: 'bar',
                        label: seriesLabel,
                        data: [150]
                    },
                    {
                        name: 'other',
                        type: 'bar',
                        label: seriesLabel,
                        data: [220]
                    }
                ]
            }
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