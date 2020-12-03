<template>
        <div id="pieChart" ref="pieChart" style="width: 100%;height: 300px"></div>
</template>

<script>
import echarts from "echarts";

export default {
    name: "pieChart",
    methods: {
        myEcharts(){
            let myChart = echarts.init(document.getElementById("pieChart"));

            var option = {
                title: {
                    text: '',
                    subtext: '',
                    left: 'center'
                },
                tooltip: {
                    // trigger: 'item',
                    formatter: '{b} : {c} ({d}%)'
                },
                legend: {
                    // orient: 'vertical',
                    // top: 'middle',
                    bottom: 10,
                    left: 'center',
                    data: ['特朗普', '拜登', 'other']
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {
                                value: 1548,
                                name: '特朗普'
                                
                            },
                            {value: 535, name: '拜登'},
                            {value: 510, name: 'other'},
                            
                        ],
                    }
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