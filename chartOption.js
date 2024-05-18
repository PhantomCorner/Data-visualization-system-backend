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
  Bar_graph: {
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: null,
    },
    series: [
      {
        data: null,
        type: "bar",
      },
    ],
  },
};
module.exports = {
  chartOption,
};
