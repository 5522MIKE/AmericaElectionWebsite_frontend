<template>
        <div id="pieChart" ref="pieChart" style="width: 100%;height: 300px"></div>
</template>

<script>
import echarts from "echarts";
import axios from 'axios';
export default {
    name: "pieChart",
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
                        let person = {};
                        person.name = this.totalData[i].vote[j].candidate_name;
                        person.value = [this.totalData[i].vote[j].vote_num];
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
            let myChart = echarts.init(document.getElementById("pieChart"));
            var option = {
                title: {
                    text: this.state,
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
                    data: this.nameData
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: this.stateData
                        // [
                        //     {
                        //         value: 1548,
                        //         name: '特朗普'
                                
                        //     },
                        //     {value: 535, name: '拜登'},
                        //     {value: 510, name: 'other'},
                            
                        // ],
                    }
                ]
            };
            window.addEventListener("resize",function(){
                myChart.resize()
            });
            myChart.setOption(option)
        }
        
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
    mounted(){
        this.myEcharts();
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