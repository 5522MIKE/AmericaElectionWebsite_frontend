// 地图组件
<template>
    <div class="col-lg-12 col-ms-12" id="map" style="width: 100%; height: 450px"></div>
</template>

<script>
    import echarts from "echarts";
    import usaJson from "../assets/json/usa.json"  //美国地图的geojson数据
    
    var toolTipData=[{                             //数据
                            name:'Alaska',         //州名
                            value: [{
                                name: 'T',         //选举人
                                value: 1101        //票数
                            },{
                                name: 'B',
                                value: 1221
                            }]
                        },{
                            name:'New York', 
                            value: [{
                                name: 'T',
                                value: 1332,
                            },{
                                name: 'B',
                                value: 2222,
                            }]}                    
                        ]

    export default {
        name: "mapChart",
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
                    text: 'USA ',
                    subtext: '',
                    sublink: '',
                    left: 'right'
                },
                tooltip: {                  //鼠标滑过显示的提示标签
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2,
                    formatter: function (params) {
                        if (typeof(params.value)[2] == "undefined") {
                            var toolTiphtml = ''
                            for (var i = 0; i < toolTipData.length; i++) {
                                if (params.name == toolTipData[i].name) {
                                    toolTiphtml += toolTipData[i].name + ':<br>'
                                    for (var j = 0; j < toolTipData[i].value.length; j++) {
                                        toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                                    }
                                }
                            }
                            console.log(toolTiphtml)
                            // console.log(convertData(data))
                            return toolTiphtml;
                        } else {
                            toolTiphtml = ''
                            for (i = 0; i < toolTipData.length; i++) {
                                if (params.name == toolTipData[i].name) {
                                    toolTiphtml += toolTipData[i].name + ':<br>'
                                    for (j = 0; j < toolTipData[i].value.length; j++) {
                                        toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                                    }
                                }
                            }
                            console.log(toolTiphtml)
                            // console.log(convertData(data))
                            return toolTiphtml;
                        }
                        // var value = (params.value + '').split('.')
                        // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                        // return params.seriesName + '<br/>' + params.name + ': ' + value;
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
                                color: function(params){
                                    for (var i = 0; i < toolTipData.length; i++) {
                                        if (params.name == toolTipData[i].name) {
                                            if(toolTipData[i].value[0].value < toolTipData[i].value[1].value){
                                                return 'blue'
                                            }else{
                                                return '#ff0000'
                                            }
                                        }
                                    }
                                    
                                }      
                            }
                            
                        },
                        data:[]
                    }
                ]
            };
                
            window.addEventListener("resize",function(){            //窗口变化是重新渲染，响应式布局
                myChart.resize()
            });
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            },
            
            
        },
        mounted() {
            this.myEcharts();
            
        },
        
    };
</script>
