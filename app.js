var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};


//for oxygen lower
var gaugeOptionsOxygen = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#DF5353'], // red
            [0.3, '#DDDF0D'], // yellow
            [0.5, '#55BF3B'],
            [0.7, '#DDDF0D'], // red
            [0.9, '#DF5353']// yellow
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};



// The Humidity gauge
var chartHumi = Highcharts.chart('container-humi', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Humidity'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Humidity',
        data: [80],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">%</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]

}));
//The temperature Gauge
var chartTemp = Highcharts.chart('container-temp', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 60,
        title: {
            text: 'Temperature'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Temperature',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">C</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: 'C'
        }
    }]

}));
//The Methane Gauge

var chartMeth = Highcharts.chart('container-meth', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 630,
        title: {
            text: 'Methane'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Methane',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4"></span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ''
        }
    }]

}));

//The Oxygen(Lower) Gauge

var chartOxyLower = Highcharts.chart('container-oxy-low', Highcharts.merge(gaugeOptionsOxygen, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Oxygen'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Oxygen',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4"></span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ''
        }
    }]

}));

//The Smoke Gauge

var chartSmo = Highcharts.chart('container-smo', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Smoke'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Smoke',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4"></span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ''
        }
    }]

}));

//The Carbon Gauge

var chartCar = Highcharts.chart('container-car', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'Carbon'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Carbon',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4"></span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ''
        }
    }]

}));


// Bring life to the dials
    // Speed
    var point,
        newVal,
        inc;

       
            
            
           
       
    if (chartHumi) {
        firebase.database().ref('DHT11').on('value',function(dat){
     
        point = chartHumi.series[0].points[0];
        inc= dat.val().Humidity;
        
        newVal =  inc;
       

        point.update(newVal);
        
       
    })   
}
    
if (chartTemp) {
    firebase.database().ref('DHT11').on('value',function(dat){
 
    point = chartTemp.series[0].points[0];
    inc= dat.val().Temperature;
    
    
    newVal =  inc;
   

    point.update(newVal);
    
   
})   
}

if (chartMeth) {
    firebase.database().ref('DHT11').on('value',function(dat){
 
    point = chartMeth.series[0].points[0];
    inc= dat.val().Methane;
    
    
    newVal =  inc;
   

    point.update(newVal);
    
   
})   
}

if (chartOxyLower) {
    firebase.database().ref('DHT11').on('value',function(dat){
 
    point = chartOxyLower.series[0].points[0];
    inc= dat.val().Oxygen;
    
    
    newVal =  inc;
   

    point.update(newVal);
    
   
})   
}


if (chartCar) {
    firebase.database().ref('DHT11').on('value',function(dat){
 
    point = chartCar.series[0].points[0];
    inc= dat.val().Carbon;
    
    
    newVal =  inc;
   

    point.update(newVal);
    
   
})   
}

if (chartSmo) {
    firebase.database().ref('DHT11').on('value',function(dat){
 
    point = chartSmo.series[0].points[0];
    inc= dat.val().Smoke;
    
    
    newVal =  inc;
   

    point.update(newVal);
    
   
})   
}

