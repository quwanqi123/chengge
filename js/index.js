//获取url中的参数
var getEcharts = function(carname){
    var _this = this;
    var arr4 = [];
    var arr6 = [];
    for(var i = 0;i<carData.length;i++){
        var name = carData[i].name;
        var linearMaximumVelocity = carData[i].slist.linearMaximumVelocity;
        var linear180RequiredTime = carData[i].slist.linear180RequiredTime;
        var turningToMaximumSpeed = carData[i].slist.turningToMaximumSpeed;
        var uBendFitForMaximumSpeed = carData[i].slist.uBendFitForMaximumSpeed;
        var uBendingDoubleSpray = carData[i].slist.uBendingDoubleSpray;
        var maximumSpeedOfBrokenDoubleJet = carData[i].slist.maximumSpeedOfBrokenDoubleJet;
        var smallSprayedTime = carData[i].slist.smallSprayedTime;
        var nitrogenMaximumSpeed = carData[i].slist.nitrogenMaximumSpeed;
        var nitrogenLongTime = carData[i].slist.nitrogenLongTime;
        var CWWSprayMaximumSpeed = carData[i].slist.CWWSprayMaximumSpeed;
        var f1 = (linearMaximumVelocity/(xsCarData.slist.linearMaximumVelocity/60)).toFixed(2);
        var linear180Required = 180/linear180RequiredTime
        var xsLinear180Required = 180/xsCarData.slist.linear180RequiredTime
        var f2 = (linear180Required/(xsLinear180Required/60)).toFixed(2);
        var f3 = (turningToMaximumSpeed/(xsCarData.slist.turningToMaximumSpeed/60)).toFixed(2);
        var f4 = (uBendFitForMaximumSpeed/(xsCarData.slist.uBendFitForMaximumSpeed/60)).toFixed(2);
        var f5 = (uBendingDoubleSpray/(xsCarData.slist.uBendingDoubleSpray/60)).toFixed(2);
        var f6 = (maximumSpeedOfBrokenDoubleJet/(xsCarData.slist.maximumSpeedOfBrokenDoubleJet/60)).toFixed(2);
        var f7 = (smallSprayedTime/(xsCarData.slist.smallSprayedTime/60)).toFixed(2);
        var f8 = (nitrogenMaximumSpeed/(xsCarData.slist.nitrogenMaximumSpeed/60)).toFixed(2);
        var f9 = (nitrogenLongTime/(xsCarData.slist.nitrogenLongTime/60)).toFixed(2);
        var f10 = (CWWSprayMaximumSpeed/(xsCarData.slist.CWWSprayMaximumSpeed/60)).toFixed(2);
        var f = (1*f1 + 1*f2 + 1*f3 + 1*f4 + 1*f5 + 1*f6 + 1*f7 + 1*f8 + 1*f9 + 1*f10).toFixed(2);
        if(carname == name){
            arr4.push(1*f1,1*f2,1*f3,1*f4,1*f5,1*f6,1*f7,1*f8,1*f9,1*f10)
            arr6.push(linearMaximumVelocity,linear180RequiredTime,turningToMaximumSpeed,uBendFitForMaximumSpeed,uBendingDoubleSpray,maximumSpeedOfBrokenDoubleJet,smallSprayedTime,nitrogenMaximumSpeed,nitrogenLongTime,CWWSprayMaximumSpeed)
            var option1 = {
                title: {
                    text: carData[i].name+'(满天赋,0改装)',
                    subtext: '各项分数',
                    left:'center'
                },
                radar: [
                    {
                        indicator: [
                            { text: '直线最高速度', max: 100 },
                            { text: '直线0-180加速', max: 100 },
                            { text: '转向最高速度', max: 100 },
                            { text: 'U弯贴合最低速度', max: 100 },
                            { text: 'U弯双喷最高速度', max: 100 },
                            { text: '断位双喷最高速度', max: 100 },
                            { text: '小喷时长', max: 100 },
                            { text: '氮气最高速度', max: 100 },
                            { text: '氮气时长', max: 100 },
                            { text: 'CWW喷最高速度', max: 100 },
                        ],
                        name: {
                            formatter:'【{value}】',
                            textStyle: {
                                color:'#666'
                            }
                        },
                        radius: 150, 

                    }
                ],
                series: [
                    {
                        name: '各项分数',
                        type: 'radar',
                        data: [
                            {
                                value: arr4,
                                name: '图一',
                                itemStyle: {
                                    normal: {
                                        color: '#72ACD1',
                                        lineStyle: {
                                            color: '#72ACD1',
                                        },
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        formatter: function params(any){
                                            return params.value
                                        },
                                    },
                                },
                            },
                            {
                                value: [60,60,60,60,60,60,60,60,60,60],
                                name: '图二',
                                areaStyle: {
                                    normal: {
                                        opacity: 0.8,
                                        color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                            {
                                                color: '#B8D3E4',
                                                offset: 0
                                            },
                                            {
                                                color: '#72ACD1',
                                                offset: 1
                                            }
                                        ])
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#72ACD1',
                                        lineStyle: {
                                            color: '#FF8800',
                                        },
                                    },
                                },
                            }
                        ],
                        
                    },
                ]
            }
            _this.myChart1.setOption(option1);
            var strtd = '';
            for(var j = 0;j<arr6.length;j++){
                strtd += '<td>'+arr6[j]+'</td>'
            }
            var str1 = '<tr><td>新手赛车</td><td>183</td><td>4.23</td><td>164.2</td><td>62.4</td><td>220.6</td><td>220.6</td><td>0.58</td><td>252.5</td><td>3</td><td>282.6</td></tr>'
            var str2 = '<tr><td>'+carname+'</td>'+strtd+'</tr>'
            $("#cont").html(str1+str2)
        }
    }
}
var myChart = echarts.init(document.getElementById('main'));
var carData = carData["carAarr"];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr5 = [];
var name1 = ""
var linearMaximumVelocityArr = [];
var linear180RequiredTimeArr = [];
var turningToMaximumSpeedArr = [];
var uBendFitForMaximumSpeedArr = [];
var uBendingDoubleSprayArr = [];
var maximumSpeedOfBrokenDoubleJetArr = [];
var smallSprayedTimeArr = [];
var nitrogenMaximumSpeedArr = [];
var nitrogenLongTimeArr = [];
var CWWSprayMaximumSpeedArr = [];
for(var i = 0;i<carData.length;i++){
    var name = carData[i].name;
    var linearMaximumVelocity = carData[i].slist.linearMaximumVelocity;
    linearMaximumVelocityArr.push(linearMaximumVelocity)
    var linear180RequiredTime = carData[i].slist.linear180RequiredTime;
    var linear180Required = (180/linear180RequiredTime).toFixed(1);
    linear180RequiredTimeArr.push(linear180Required)
    var turningToMaximumSpeed = carData[i].slist.turningToMaximumSpeed;
    turningToMaximumSpeedArr.push(turningToMaximumSpeed)
    var uBendFitForMaximumSpeed = carData[i].slist.uBendFitForMaximumSpeed;
    uBendFitForMaximumSpeedArr.push(uBendFitForMaximumSpeed)
    var uBendingDoubleSpray = carData[i].slist.uBendingDoubleSpray;
    uBendingDoubleSprayArr.push(uBendingDoubleSpray)
    var maximumSpeedOfBrokenDoubleJet = carData[i].slist.maximumSpeedOfBrokenDoubleJet;
    maximumSpeedOfBrokenDoubleJetArr.push(maximumSpeedOfBrokenDoubleJet)
    var smallSprayedTime = carData[i].slist.smallSprayedTime;
    smallSprayedTimeArr.push(smallSprayedTime)
    var nitrogenMaximumSpeed = carData[i].slist.nitrogenMaximumSpeed;
    nitrogenMaximumSpeedArr.push(nitrogenMaximumSpeed)
    var nitrogenLongTime = carData[i].slist.nitrogenLongTime;
    nitrogenLongTimeArr.push(nitrogenLongTime)
    var CWWSprayMaximumSpeed = carData[i].slist.CWWSprayMaximumSpeed;
    CWWSprayMaximumSpeedArr.push(CWWSprayMaximumSpeed)
    var f1 = (linearMaximumVelocity/(xsCarData.slist.linearMaximumVelocity/60)).toFixed(2);
    var linear180Required = 180/linear180RequiredTime
    var xsLinear180Required = 180/xsCarData.slist.linear180RequiredTime
    var f2 = (linear180Required/(xsLinear180Required/60)).toFixed(2);
    var f3 = (turningToMaximumSpeed/(xsCarData.slist.turningToMaximumSpeed/60)).toFixed(2);
    var f4 = (uBendFitForMaximumSpeed/(xsCarData.slist.uBendFitForMaximumSpeed/60)).toFixed(2);
    var f5 = (uBendingDoubleSpray/(xsCarData.slist.uBendingDoubleSpray/60)).toFixed(2);
    var f6 = (maximumSpeedOfBrokenDoubleJet/(xsCarData.slist.maximumSpeedOfBrokenDoubleJet/60)).toFixed(2);
    var f7 = (smallSprayedTime/(xsCarData.slist.smallSprayedTime/60)).toFixed(2);
    var f8 = (nitrogenMaximumSpeed/(xsCarData.slist.nitrogenMaximumSpeed/60)).toFixed(2);
    var f9 = (nitrogenLongTime/(xsCarData.slist.nitrogenLongTime/60)).toFixed(2);
    var f10 = (CWWSprayMaximumSpeed/(xsCarData.slist.CWWSprayMaximumSpeed/60)).toFixed(2);
    f = (1*f1 + 1*f2 + 1*f3 + 1*f4 + 1*f5 + 1*f6 + 1*f7 + 1*f8 + 1*f9 + 1*f10).toFixed(1);
    arr1.push(name)
    arr2.push(f)
    if(i == 0){
        arr3.push(1*f1,1*f2,1*f3,1*f4,1*f5,1*f6,1*f7,1*f8,1*f9,1*f10)
        arr5.push(linearMaximumVelocity,linear180RequiredTime,turningToMaximumSpeed,uBendFitForMaximumSpeed,uBendingDoubleSpray,maximumSpeedOfBrokenDoubleJet,smallSprayedTime,nitrogenMaximumSpeed,nitrogenLongTime,CWWSprayMaximumSpeed)
        name1 = name
    }
    
}
linearMaximumVelocityArr.sort(function(a, b){return b - a})
linear180RequiredTimeArr.sort(function(a, b){return b - a})
turningToMaximumSpeedArr.sort(function(a, b){return b - a})
uBendFitForMaximumSpeedArr.sort(function(a, b){return b - a})
uBendingDoubleSprayArr.sort(function(a, b){return b - a})
maximumSpeedOfBrokenDoubleJetArr.sort(function(a, b){return b - a})
smallSprayedTimeArr.sort(function(a, b){return b - a})
nitrogenMaximumSpeedArr.sort(function(a, b){return b - a})
nitrogenLongTimeArr.sort(function(a, b){return b - a})
CWWSprayMaximumSpeedArr.sort(function(a, b){return b - a})
var option = {
    title : {
        text: 'qq飞车手游24辆A车基础性能数据评分'+'(满天赋,0改装)',
        subtext: '作者：闲暇^(游戏id)；数据来源：官方基础测评数据',
        left:'center'
    },
    xAxis: [
        {
            type: 'category',
            data: arr1,
            axisLabel: {
               interval:0,
               rotate:45
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '总分数',
            min: 500,
            max: 700,
            axisLabel: {
                formatter: '{value}'
            },
        }
    ],
    series: [
        {
            name:'综合评分',
            type:'bar',
            data:arr2,
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        position:"top",
                    }
                }
            }
        },
    ]
};
myChart.on('click', function(param) {
    getEcharts(param.name);
});
myChart.setOption(option);
var myChart1 = echarts.init(document.getElementById('main1'));
var option1 = {
    title: {
        text: arr1[0]+'(满天赋,0改装)',
        subtext: '各项分数',
        left:'center'
    },
    radar: [
        {
            indicator: [
                { text: '直线最高速度', max: 100 },
                { text: '直线0-180加速', max: 100 },
                { text: '转向最高速度', max: 100 },
                { text: 'U弯贴合最低速度', max: 100 },
                { text: 'U弯双喷最高速度', max: 100 },
                { text: '断位双喷最高速度', max: 100 },
                { text: '小喷时长', max: 100 },
                { text: '氮气最高速度', max: 100 },
                { text: '氮气时长', max: 100 },
                { text: 'CWW喷最高速度', max: 100 },
            ],
            name: {
                formatter:'【{value}】',
                textStyle: {
                    color:'#666'
                }
            },
            radius: 150, 

        }
    ],
    series: [
        {
            name: '各项分数',
            type: 'radar',
            data: [
                {
                    value: arr3,
                    name: '图一',
                    itemStyle: {
                        normal: {
                            color: '#72ACD1',
                            lineStyle: {
                                color: '#72ACD1',
                            },
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: function params(any){
                                return params.value
                            },
                        },
                    },
                },
                {
                    value: [60,60,60,60,60,60,60,60,60,60],
                    name: '图二',
                    areaStyle: {
                        normal: {
                            opacity: 0.8,
                            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                {
                                    color: '#B8D3E4',
                                    offset: 0
                                },
                                {
                                    color: '#72ACD1',
                                    offset: 1
                                }
                            ])
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#72ACD1',
                            lineStyle: {
                                color: '#FF8800',
                            },
                        },
                    },
                }
            ],
            
        },
    ]
}
//myChart1.setOption(option1);
var str2 = ''
for(var i = 0;i<carData.length;i++){
    var name = carData[i].name;
    var linearMaximumVelocity = carData[i].slist.linearMaximumVelocity;
    var s1 = contains(linearMaximumVelocityArr,linearMaximumVelocity)
    var linear180RequiredTime = carData[i].slist.linear180RequiredTime;
    var linear180Required = (180/linear180RequiredTime).toFixed(1);
    var s2 = contains(linear180RequiredTimeArr,linear180Required)
    var turningToMaximumSpeed = carData[i].slist.turningToMaximumSpeed;
    var s3 = contains(turningToMaximumSpeedArr,turningToMaximumSpeed)
    var uBendFitForMaximumSpeed = carData[i].slist.uBendFitForMaximumSpeed;
    var s4 = contains(uBendFitForMaximumSpeedArr,uBendFitForMaximumSpeed)
    var uBendingDoubleSpray = carData[i].slist.uBendingDoubleSpray;
    var s5 = contains(uBendingDoubleSprayArr,uBendingDoubleSpray)
    var maximumSpeedOfBrokenDoubleJet = carData[i].slist.maximumSpeedOfBrokenDoubleJet;
    var s6 = contains(maximumSpeedOfBrokenDoubleJetArr,maximumSpeedOfBrokenDoubleJet)
    var smallSprayedTime = carData[i].slist.smallSprayedTime;
    var s7 = contains(smallSprayedTimeArr,smallSprayedTime)
    var nitrogenMaximumSpeed = carData[i].slist.nitrogenMaximumSpeed;
    var s8 = contains(nitrogenMaximumSpeedArr,nitrogenMaximumSpeed)
    var nitrogenLongTime = carData[i].slist.nitrogenLongTime;
    var s9 = contains(nitrogenLongTimeArr,nitrogenLongTime)
    var CWWSprayMaximumSpeed = carData[i].slist.CWWSprayMaximumSpeed;
    var s10 = contains(CWWSprayMaximumSpeedArr,CWWSprayMaximumSpeed)
    arr5 = [];
    arr6 = [];
    arr6.push(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10)
    arr5.push(linearMaximumVelocity,linear180Required,turningToMaximumSpeed,uBendFitForMaximumSpeed,uBendingDoubleSpray,maximumSpeedOfBrokenDoubleJet,smallSprayedTime,nitrogenMaximumSpeed,nitrogenLongTime,CWWSprayMaximumSpeed)
    var strtd = '';
    for(var j = 0;j<arr5.length;j++){
        if(arr6[j]<=3){
            strtd += '<td>'+arr5[j]+'</td>'+'<td style="color:red;">'+arr6[j]+'</td>'
        }else if(arr6[j]>=32){
            strtd += '<td>'+arr5[j]+'</td>'+'<td style="color:#009688;">'+arr6[j]+'</td>'
        }else{
            strtd += '<td>'+arr5[j]+'</td>'+'<td>'+arr6[j]+'</td>'
        }
    }
    str2 += '<tr><td>'+(1*i+1)+'</td><td>'+name+'</td>'+strtd+'</tr>'
    
}
function contains(arrays, obj) {
    var i = arrays.length;
    for(var i = 0;i<arrays.length;i++){
        if(arrays[i] == obj){
            return i+1
        }
    }
    return false;
}
$("#cont").html(str2)
//var str1 = '<tr><td>新手赛车</td><td>183</td><td>4.23</td><td>164.2</td><td>62.4</td><td>220.6</td><td>220.6</td><td>0.58</td><td>252.5</td><td>3</td><td>282.6</td></tr>'
var arr = ['a','b','c','a','a','d','b','d','f','c'];
Array.prototype.sortToReaddObj = function(){
    var arr = this;
    var sortArr = [];
    sortArr = arr.slice(0)
    sortArr.sort();
    var obj = {};
    for(var i = 0;i<sortArr.length;i++){
        var num = 1;
        for(j = i + 1;j<sortArr.length; j++){
           if(sortArr[i] == sortArr[j]){
                j = ++i;
                num++
            }
        }
        obj[sortArr[i]] = num
    }
    return obj
}
var a = arr.sortToReaddObj();

var rows = [0,1,2,3,4,5,6,7,8,9]
rows.splice(0,1,100)
//console.log(rows)

function fn(x){
    var a = 0
    var b = [];
    var c = function(){
        b.push(a)
        a++
        if(a<x){
            c()
        } 
    }
    c()
    return b
}
console.log(fn(20))