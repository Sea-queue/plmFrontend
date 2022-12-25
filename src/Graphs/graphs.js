import Plot from 'react-plotly.js'

export const clustering = (boxKsap, allNames) => {
    var data = [{
                x: boxKsap[0],
                y: boxKsap[1],
                z: boxKsap[2],
                // x: [0, 1, 2, 3],
                // y: [1, 3, 4, 5],
                // z: [2, 3, 4, 5],
                mode: 'markers',
                text: allNames,
                type: 'scatter3d',
                marker: {
                color: 'rgb(23, 190, 207)',
                // color: "black",
                size: 2,
                
                }
            },{
                alphahull: 7,
                opacity: 0.1,
                type: 'mesh3d',
                // x: [0, 1, 2, 3],
                // y: [1, 3, 4, 5],
                // z: [2, 3, 4, 5],
                x: boxKsap[0],
                y: boxKsap[1],
                z: boxKsap[2],
            }];
        
    var layout = {
        autosize: true,
        width: 800,
        height: 500,
        margin: {t:0, b:0, l:0, r:0},
        scene: {
            aspectratio: {x: 1, y: 1, z: 1},
            camera: {
                center: {x: 0, y: 0, z: 0},
                eye: {x: 1.25, y: 1.25, z: 1.25},
                up: {x: 0, y: 0, z: 1}
            },
            xaxis: {
                type: 'linear',
                title: "Knowledge",
                zeroline: false
            },
            yaxis: {
                type: 'linear',
                title: "Skills",
                zeroline: false
            },
            zaxis: {
                type: 'linear',
                title: "Attitude",
                zeroline: false
            }
        },
        // title: '学员空间分布图',
    };

    return (<Plot data={data} layout={layout} config={{displayModeBar: false}}/>)
}

export const radar = (radarKsap, name1, name2) => {
    var data = [
        {
            type: 'scatterpolar',
            r: [radarKsap[4], radarKsap[5], radarKsap[6], radarKsap[7], 5],
            theta: ['Knowledge','Skills','Attitude',
                    'Psychology', 'Other_parameters'],
            fill: 'toself',
            name: name2
        },
        {
            type: 'scatterpolar',
            r: [radarKsap[0], radarKsap[1], radarKsap[2], radarKsap[3], 5],
            theta: ['Knowledge','Skills','Attitude',
                'Psychology', 'Other_parameters'],
            fill: 'toself',
            name: name1
        }
        ]

    return (
        <Plot
            data={data}
            layout={{width: 800, height: 500, polar: {radialaxis: {visible: true, range: [-5, 10]}}, showlegend: true}}
            config={{displayModeBar: false}}
        />
    )
}


export const radar_single = (radarKsap, name1) => {
    var data = [
        {
            type: 'scatterpolar',
            r: [radarKsap[0], radarKsap[1], radarKsap[1], radarKsap[3], 5],
            theta: ['Knowledge','Skills','Attitude',
                    'Psychology', 'Other_parameters'],
            fill: 'toself',
            name: name1
        }]

    return (
        <Plot
            data={data}
            layout={{width: 300, height: 350, margin: {t:10, b:10, l:60, r:80}, polar: {radialaxis: {visible: true, range: [-5, 10]}}, showlegend: true}}
            config={{displayModeBar: false}}
        />
    )
}


export const box = (boxKsap) => {
    var trace1 = {
        y: boxKsap[0],
        type: 'box',
        name: 'Knowledge',
        jitter: 0.3,
        pointpos: -1.8,
        marker: {
            color: 'rgb(7,40,89)'
        },
        boxpoints: 'all'
    };

    var trace2 = {
        y: boxKsap[1],
        type: 'box',
        name: 'Skills',
        marker: {
            color: 'rgb(9,56,125)'
        },
        boxpoints: false
    };

    var trace3 = {
        y: boxKsap[2],
        type: 'box',
        name: 'Attitude',
        marker: {
            color: 'rgb(8,81,156)',
            outliercolor: 'rgba(219, 64, 82, 0.6)',
            line: {
            outliercolor: 'rgba(219, 64, 82, 1.0)',
            outlierwidth: 2
            }
        },
        boxpoints: 'suspectedoutliers'
    };

    var trace4 = {
        y: boxKsap[3],
        type: 'box',
        name: 'Psychology',
        marker: {
            color: 'rgb(107,174,214)'
        },
        boxpoints: 'Outliers'
    };

    var data = [trace1, trace2, trace3, trace4];
    var layout = {
        title: ' ',
        width: 800,
        height: 500,
    };
    return(<Plot data={data} layout={layout} config={{displayModeBar: false}}/>)
}


export const area = () => {
    var data = [{
        x: [1,2,3,4],
        y: [0,2,3,5],
        fill: 'tozeroy',
        type: 'scatter',
        name: 'Vendor'
    },
    {
        x: [1,2,3,4],
        y: [3,5,1,7],
        fill: 'tonexty',
        type: 'scatter',
        name: 'Provider'
    }]

    return (
        <Plot
            data={data}
            layout={{width: 500, height: 500, title: 'Area Chart'}}
        />
    )
}


export const groupedBarChart = () =>{
    var plot1 = {
        x: ["Microwave", "Washing Machine", "Tv", "Vacuum Cleaner", "Hair Dryer"],
        y: [4, 5, 6, 1, 4],
        name: "2016",
        type: "bar",
    };

    var plot2 = {
        x: ["Microwave", "Washing Machine", "Tv", "Vacuum Cleaner", "Hair Dryer"],
        y: [12, 3, 5, 6, 2, 5],
        name: "2017",
        type: "bar",
    };

    var data = [plot1, plot2];
    return(
        <Plot
            data={data}
            layout={ {width: 500, height: 500, title: 'Electronics Prices 2016/2017'} } 
        />
    )
}
