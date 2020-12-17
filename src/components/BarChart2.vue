<template>
        <div id="barChart2" ref="barChart2" style="width: 100%;height: 300px"></div>
</template>

<script>
import echarts from "echarts";
import axios from 'axios';
export default {
    name: "barChart2",
    props: ['state'],
    data(){
        return {
            totalData: [],
            stateData: [],
            nameData: []
        }
    },
    methods: {
        updateStateData(){                 //更新图表的显示数据
            for(let i in this.totalData){
                if(this.state == this.totalData[i].state.name){
                    this.stateData = [];
                    for(let j in this.totalData[i].vote){
                        var seriesLabel = {
                            normal: {
                                show: true,
                                textBorderColor: '#333',
                                textBorderWidth: 2
                            }
                        }
                        let person = {
                            type: 'bar',
                            label: seriesLabel,
                        };
                        person.name = this.totalData[i].vote[j].candidate_name;
                        person.data = [this.totalData[i].vote[j].vote_num];
                        this.stateData.push(person);
                    }
                    
                    // console.log(this.stateData)
                }
            }
            for(let i in this.stateData){
                this.nameData.push(this.stateData[i].name);
            }
            // console.log(this.nameData);
        },
        myEcharts(){
            let myChart = echarts.init(document.getElementById("barChart2"));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {            //图例
                    left: "right" ,    
                    data: this.nameData
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
                    data: [this.state],
                    
                },
                series: this.stateData
                    // [
                    //     {
                    //         name: 'Tramp',
                    //         type: 'bar',
                    //         data: [165],
                    //         label: seriesLabel,
                    //     },
                    //     {
                    //         name: 'Bi',
                    //         type: 'bar',
                    //         label: seriesLabel,
                    //         data: [150]
                    //     },
                    //     {
                    //         name: 'other',
                    //         type: 'bar',
                    //         label: seriesLabel,
                    //         data: [220]
                    //     }
                    // ]
            }
            window.addEventListener("resize",function(){
                myChart.resize()
            });
            myChart.setOption(option,true)
        }
        
    },
    mounted(){
        
    },
    created(){
        const instance = axios.create({
                baseURL: 'http://10.252.64.119:8000/vote/state/',
                method: 'get',
                timeout: 1000,
            })
        instance.get('/').then(res=>{
            // console.log(res.data.data);
            this.totalData = res.data.data;
            this.updateStateData();
            this.myEcharts();
            // this.myEcharts();
            // console.log(this.totalData);
        }).catch(function(error){
            console.log(error);
        });
    },
    watch: {                    //检测state的值是否变化，如果变了就改变显示数据
        state: {
            handler(){
                this.updateStateData();
                this.myEcharts();
            }
            
        }
    }
}
</script> 