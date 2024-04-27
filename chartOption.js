const chartOption = {
  Basic_Line_Chart: {
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
  Smoothed_Line_Chart: {
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
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  },
  Basic_area_chart: {
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
};
module.exports = {
  chartOption,
};
