<template>
        <div id="barChart" ref="barChart" style="width: 100%;height: 1800px"></div>
</template>

<script>
import echarts from "echarts";
import axios from "axios";


export default {
    name: "barChart",    
    data(){
        return {
            seriesData: [],      
            nameData: [],
            stateData: []
        }
    },
    methods: {
        myEcharts(){
            let myChart = echarts.init(document.getElementById("barChart"));
            
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {                         //图例
                    data: this.nameData
                    
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
                    data: this.stateData
                },
                
                // series: this.seriesData
                series: this.seriesData
            };
            window.addEventListener("resize",function(){
                myChart.resize()
            });
            myChart.setOption(option,true)
        }
    },
    created(){
        const instance = axios.create({
                baseURL: 'http://127.0.0.1:8000/vote/state',
                method: 'get',
                timeout: 1000,
            })
        instance.get('/').then(res=>{
            var nData = new Set();
            for(let i in res.data.data){
                let temp = res.data.data[i];
                this.stateData.push(temp.state.name);       //stateData   州名
                for(let j of temp.vote){
                    nData.add(j.candidate_name);      // 选举人名
                }
            }
            this.nameData = Array.from(nData)
            for(let x of this.nameData){
                let person = {
                    type: 'bar',
                    stack: '总量',
                    // label: {                         //在条形图里面显示具体数字
                    //     show: true,
                    //     position: ''
                    // },
                    data:[]
                };
                person.name = x;
                this.seriesData.push(person) 
            }
            for(let i in res.data.data){
                let temp = res.data.data[i];      //stateData   州名
                for(let j of temp.vote){
                    for(let x of this.seriesData){
                        if(j.candidate_name == x.name){
                            x.data.push(j.vote_num);
                        }
                    }
                }
                
            }
            this.myEcharts();
        }).catch(function(error){
            console.log(error);
        });
        
    },
    mounted(){
        // this.myEcharts();
    },
}
</script>