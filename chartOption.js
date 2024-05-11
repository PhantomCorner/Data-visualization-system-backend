const chartOption = {
  Line_chart: {
    xAxis: {
      type: "category",
      data: null,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: null,
        type: "line",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  },
  Area_chart: {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: null,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: null,
        type: "line",
        areaStyle: {},
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  },
  Histogram: {
    xAxis: {
      type: "category",
      data: null,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: null,
        type: "bar",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  },
  Rectangular_tree_diagram: {
    series: [
      {
        type: "treemap",
        data: null,
        // [
        //   {
        //     name: "nodeA",
        //     value: 10,
        //   },
        // ],
      },
    ],
  },
  Pie_chart: {
    // title: {
    //   text: "Referer of a Website",
    //   subtext: "Fake Data",
    //   left: "center",
    // },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        data: null,
        type: "pie",
        radius: "50%",
        // name: "Access From",
        // data: [
        //   { value: 1048, name: "Search Engine" },
        //   { value: 735, name: "Direct" },
        //   { value: 580, name: "Email" },
        //   { value: 484, name: "Union Ads" },
        //   { value: 300, name: "Video Ads" },
        // ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  },
  Scatter_chart: {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 15,
        data: null,
        // data: [
        //   [10.0, 8.04],
        //   [8.07, 6.95],
        //   [13.0, 7.58],
        //   [9.05, 8.81],
        //   [11.0, 8.33],
        //   [14.0, 7.66],
        //   [13.4, 6.81],
        //   [10.0, 6.33],
        //   [14.0, 8.96],
        //   [12.5, 6.82],
        //   [9.15, 7.2],
        //   [11.5, 7.2],
        //   [3.03, 4.23],
        //   [12.2, 7.83],
        //   [2.02, 4.47],
        //   [1.05, 3.33],
        //   [4.05, 4.96],
        //   [6.03, 7.24],
        //   [12.0, 6.26],
        //   [12.0, 8.84],
        //   [7.08, 5.82],
        //   [5.02, 5.68],
        // ],
        type: "scatter",
      },
    ],
  },
};
module.exports = {
  chartOption,
};
