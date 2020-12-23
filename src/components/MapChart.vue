// 地图组件
<template>
    <div class="col-lg-12 col-ms-12" id="map" style="width: 100%; height: 450px"></div>
</template>

<script>
    import echarts from "echarts";
    import usaJson from "../assets/json/usa.json"  //美国地图的geojson数据
    import axios from "axios";

    export default {
        name: "mapChart",
        data(){
            return {
                toolTipData: [],
                clickName: 'Alabama'
            }
            
        },
        methods: {  
            myEcharts() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById("map"));     //echarts初始化
                
                echarts.registerMap('USA', usaJson, {
                    Alaska: {              // 把阿拉斯加移到美国主大陆左下方
                        left: -131,
                        top: 25,
                        width: 15
                    },
                    Hawaii: {
                        left: -110,        // 夏威夷
                        top: 28,
                        width: 5
                    },
                    'Puerto Rico': {       // 波多黎各
                        left: -76,
                        top: 26,
                        width: 2
                    }
                });

                // 指定图表的配置项和数据
                var option = {
                    title: {                       //标题
                        text: '2020 American Election',
                        subtext: '',
                        sublink: '',
                        left: 'right'
                    },
                    tooltip: {                  //鼠标滑过显示的提示标签
                        trigger: 'item',
                        showDelay: 0,
                        transitionDuration: 0.2,
                        formatter: params=>{
                            
                            if (typeof(params.value)[2] == "undefined") {
                                var toolTiphtml = '';
                                for (let i in this.toolTipData) {
                                    if (params.name == this.toolTipData[i].name) {
                                        toolTiphtml += this.toolTipData[i].name + ':<br>'
                                        for (let j in this.toolTipData[i].value) {
                                            toolTiphtml += this.toolTipData[i].value[j].name + ':' + this.toolTipData[i].value[j].value + "<br>"
                                        }
                                    }
                                }
                                return toolTiphtml;
                            } else {
                                toolTiphtml = '';
                                for (let i in this.toolTipData) {
                                    if (params.name == this.toolTipData[i].name) {
                                        toolTiphtml += this.toolTipData[i].name + ':<br>'
                                        for (let j in this.toolTipData[i].value) {
                                            toolTiphtml += this.toolTipData[i].value[j].name + ':' + this.toolTipData[i].value[j].value + "<br>"
                                        }
                                    }
                                }
                                
                                // console.log(convertData(data))
                                return toolTiphtml;
                            }
                        }
                    },
                    toolbox: {               //工具栏，好像没用上
                        show: true,
                        //orient: 'vertical',
                        left: 'left',
                        top: 'top',
                        feature: {
                            // dataView: {readOnly: false},
                            // restore: {},
                            // saveAsImage: {}
                        }
                    },
                    series: [
                        { 
                            name: 'USA',
                            type: 'map',
                            roam: false,          //鼠标滚动缩放
                            map: 'USA',
                            emphasis: {
                                label: {
                                    show: true
                                }
                            },
                            // 文本位置修正
                            textFixed: {
                                Alaska: [20, -20]
                            },
                            itemStyle: {               //地图的样式设置
                                normal: {
                                    // !
                                    color: params=>{
                                        // console.log(params)
                                        for (let i in this.toolTipData) {
                                            if (params.name == this.toolTipData[i].name) {
                                                if(this.toolTipData[i].value[0].value < this.toolTipData[i].value[1].value){
                                                    return 'blue'
                                                }else{
                                                    return '#ff0000'
                                                }
                                            }
                                        }
                                        
                                    }      
                                }
                                
                            }
                        }
                    ],
                    data: this.toolTipData                                 
                };
                
                window.addEventListener("resize",function(){            //窗口变化是重新渲染，响应式布局
                    myChart.resize()
                });
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);

                // click事件，点击更新barhcart和piechart
                myChart.on('click',(params)=>{
                    // this.clickName = params.name;
                    // console.log(params.dataIndex+1)
                    // // console.log(this.clickName);
                    // this.$emit('click-state',params.name);
                    this.clickName = params.name;
                    // console.log(this.clickName)
                    // console.log(this.clickName);
                    this.$emit('clickstate',params.name);

                });
            },
            
            
        },

        created(){
            
            const instance = axios.create({
                    baseURL: 'http://127.0.0.1:8000/vote/state',
                    method: 'get',
                    timeout: 1000,
                })
            instance.get('/').then(res=>{
                
                for(let i in res.data.data){
                    let temp = res.data.data[i];
                    let person = {
                            name:temp.state.name    
                        }
                    let value = [];
                    for(let j in temp.vote){
                        let candidate = {
                            name: temp.vote[j].candidate_name,
                            value: temp.vote[j].vote_num
                        }
                        value.push(candidate);
                    }
                    person.value = value;
                    this.toolTipData.push(person);
                }
                this.myEcharts();              //读取数据后渲染图表
            }).catch(function(error){
                console.log(error);
            });
            
        },
        mounted() {
            // this.myEcharts();
            
        }
        
    };
</script>
