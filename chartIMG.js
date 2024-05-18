const chartIMG = {
  RECTANGULAR_TREE_DIAGRAM: {
    content: "Rectangular tree diagram",
    link: `<svg t="1714903855650" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="923" width="200" height="200"><path d="M42.666667 128h512v426.666667H42.666667z" fill="#333333" p-id="924"></path><path d="M46.933333 640h512v256h-512z" fill="#5C6BC0" p-id="925"></path><path d="M640 469.333333h341.333333v426.666667H640z" fill="#333333" p-id="926"></path><path d="M640 128h341.333333v256H640z" fill="#5C6BC0" p-id="927"></path></svg>`,
  },
  BAR_GRAPH: {
    content: "Bar graph",
    link: '<svg t="1715994121943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="931" width="200" height="200"><path d="M234.666667 168.533333h578.133333v125.866667H234.666667z" fill="#5C6BC0" p-id="932"></path><path d="M234.666667 768h450.133333v125.866667H234.666667z" fill="#333333" p-id="933"></path><path d="M234.666667 567.466667h236.8v125.866666H234.666667z" fill="#5C6BC0" p-id="934"></path><path d="M234.666667 366.933333h704v125.866667H234.666667zM85.333333 85.333333h64v853.333334H85.333333z" fill="#333333" p-id="935"></path></svg>',
  },
  LINE_CHART: {
    content: "Line chart",
    link: '<svg t="1714903936596" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1232" width="200" height="200"><path d="M149.333333 874.666667V85.333333H85.333333v853.333334h853.333334v-64z" fill="#333333" p-id="1233"></path><path d="M851.2 298.666667l-215.466667 204.8-140.8-132.266667c-10.666667-10.666667-32-10.666667-42.666666 0L213.333333 599.466667l44.8 40.533333 217.6-209.066667 140.8 132.266667c10.666667 10.666667 32 10.666667 42.666667 0L896 339.2 851.2 298.666667z" fill="#5C6BC0" p-id="1234"></path></svg>',
  },
  HISTOGRAM: {
    content: "Histogram",
    link: '<svg t="1714903958516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1385" width="200" height="200"><path d="M168.533333 426.666667h125.866667v362.666666H168.533333z" fill="#333333" p-id="1386"></path><path d="M768 384h125.866667v405.333333H768z" fill="#5C6BC0" p-id="1387"></path><path d="M567.466667 298.666667h125.866666v490.666666h-125.866666z" fill="#333333" p-id="1388"></path><path d="M366.933333 85.333333h125.866667v704h-125.866667z" fill="#5C6BC0" p-id="1389"></path><path d="M85.333333 874.666667h853.333334v64H85.333333z" fill="#333333" p-id="1390"></path></svg>',
  },
  // SCATTER_CHART: {
  //   content: "Scatter chart",
  //   link: '<svg t="1714903989588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1541" width="200" height="200"><path d="M753.066667 778.666667c-42.666667 0-81.066667-38.4-81.066667-78.933334 0-42.666667 38.4-81.066667 81.066667-81.066666 42.666667 0 78.933333 38.4 78.933333 81.066666 0 40.533333-38.4 78.933333-78.933333 78.933334zM430.933333 512c-42.666667 0-78.933333-38.4-78.933333-81.066667 0-42.666667 38.4-78.933333 78.933333-78.933333 42.666667 0 81.066667 38.4 81.066667 78.933333 0 44.8-38.4 81.066667-81.066667 81.066667z" fill="#5C6BC0" p-id="1542"></path><path d="M672 298.666667C640 298.666667 618.666667 277.333333 618.666667 245.333333S640 192 672 192s53.333333 21.333333 53.333333 53.333333-21.333333 53.333333-53.333333 53.333334zM885.333333 458.666667c-32 0-53.333333-21.333333-53.333333-53.333334s21.333333-53.333333 53.333333-53.333333 53.333333 21.333333 53.333334 53.333333-21.333333 53.333333-53.333334 53.333334zM245.333333 352C213.333333 352 192 330.666667 192 298.666667s21.333333-53.333333 53.333333-53.333334 53.333333 21.333333 53.333334 53.333334-21.333333 53.333333-53.333334 53.333333zM512 725.333333c-32 0-53.333333-21.333333-53.333333-53.333333s21.333333-53.333333 53.333333-53.333333 53.333333 21.333333 53.333333 53.333333-21.333333 53.333333-53.333333 53.333333zM672 512C640 512 618.666667 490.666667 618.666667 458.666667s21.333333-53.333333 53.333333-53.333334 53.333333 21.333333 53.333333 53.333334-21.333333 53.333333-53.333333 53.333333zM298.666667 778.666667c-32 0-53.333333-21.333333-53.333334-53.333334s21.333333-53.333333 53.333334-53.333333 53.333333 21.333333 53.333333 53.333333-21.333333 53.333333-53.333333 53.333334z" fill="#333333" p-id="1543"></path><path d="M149.333333 874.666667V85.333333H85.333333v853.333334h853.333334v-64z" p-id="1544"></path></svg>',
  // },
  PIE_CHART: {
    content: "Pie chart",
    link: '<svg t="1714904009916" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1699" width="200" height="200"><path d="M925.866667 529.066667c-8.533333-10.666667-23.466667-17.066667-38.4-17.066667H526.933333c-8.533333 0-14.933333-6.4-14.933333-14.933333V136.533333c0-14.933333-6.4-27.733333-17.066667-38.4-10.666667-8.533333-25.6-14.933333-40.533333-12.8C230.4 117.333333 68.266667 317.866667 87.466667 546.133333c17.066667 204.8 185.6 373.333333 390.4 390.4 12.8 2.133333 23.466667 2.133333 36.266666 2.133334 213.333333 0 394.666667-157.866667 424.533334-369.066667 2.133333-17.066667-4.266667-29.866667-12.8-40.533333zM482.133333 874.666667C307.2 859.733333 164.266667 716.8 149.333333 541.866667 134.4 352 264.533333 183.466667 448 149.333333v345.6c0 42.666667 34.133333 76.8 76.8 76.8h345.6c-29.866667 187.733333-198.4 317.866667-388.266667 302.933334z m0 0" fill="#333333" p-id="1700"></path><path d="M629.333333 448h243.2c14.933333 0 32-8.533333 40.533334-21.333333 8.533333-12.8 12.8-29.866667 8.533333-46.933334-42.666667-132.266667-145.066667-236.8-277.333333-277.333333-14.933333-4.266667-34.133333-2.133333-46.933334 8.533333-14.933333 8.533333-21.333333 23.466667-21.333333 40.533334v243.2c0 27.733333 25.6 53.333333 53.333333 53.333333zM640 168.533333c100.266667 36.266667 177.066667 115.2 215.466667 215.466667H640V168.533333z m0 0" fill="#5C6BC0" p-id="1701"></path></svg>',
  },
  AREA_CHART: {
    content: "Area chart",
    link: '<svg t="1714904042231" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1852" width="200" height="200"><path d="M149.333333 874.666667V85.333333H85.333333v853.333334h853.333334v-64z" fill="#333333" p-id="1853"></path><path d="M644.266667 369.066667l-128 100.266666c-4.266667 2.133333-8.533333 4.266667-12.8 0L362.666667 394.666667c-4.266667-2.133333-10.666667-2.133333-12.8 2.133333L213.333333 520.533333v138.666667l136.533334-121.6c4.266667-4.266667 8.533333-4.266667 12.8-2.133333l162.133333 87.466666c4.266667 2.133333 8.533333 2.133333 10.666667 0l132.266666-83.2s2.133333-2.133333 4.266667-2.133333L938.666667 471.466667v-174.933334l-288 70.4c-4.266667 0-6.4 2.133333-6.4 2.133334z m0 0" fill="#5C6BC0" p-id="1854"></path><path d="M665.6 586.666667l-130.133333 83.2c-4.266667 2.133333-8.533333 2.133333-10.666667 0l-164.266667-87.466667c-4.266667-2.133333-10.666667-2.133333-12.8 2.133333 0 0-136.533333 121.6-136.533333 123.733334v100.266666h725.333333V518.4l-266.666666 68.266667h-4.266667z m0 0" fill="#8E99F3" p-id="1855"></path></svg>',
  },
  // SCHEDULE: {
  //   content: "Schedule",
  //   link: '<svg t="1715304121709" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2163" width="200" height="200"><path d="M192 85.333333C132.266667 85.333333 85.333333 134.4 85.333333 194.133333v633.6C85.333333 889.6 132.266667 938.666667 192 938.666667h640c59.733333 0 106.666667-49.066667 106.666667-108.8V194.133333C938.666667 134.4 891.733333 85.333333 832 85.333333m6.4 64c19.2 0 36.266667 17.066667 36.266667 38.4v125.866667H149.333333V187.733333C149.333333 166.4 166.4 149.333333 185.6 149.333333m652.8 725.333334H185.6c-19.2 0-36.266667-17.066667-36.266667-38.4V377.6h725.333334v460.8c0 19.2-17.066667 36.266667-36.266667 36.266667z" fill="#333333" p-id="2164"></path><path d="M260.266667 556.8h74.666666c17.066667 0 34.133333-14.933333 32-34.133333v-4.266667c0-17.066667-14.933333-34.133333-34.133333-34.133333h-72.533333c-17.066667 0-34.133333 14.933333-34.133334 34.133333v4.266667c2.133333 19.2 14.933333 34.133333 34.133334 34.133333z" fill="#333333" p-id="2165"></path><path d="M484.266667 556.8h72.533333c17.066667 0 34.133333-14.933333 34.133333-34.133333v-4.266667c0-17.066667-14.933333-34.133333-34.133333-34.133333h-72.533333c-17.066667 0-34.133333 14.933333-34.133334 34.133333v4.266667c0 19.2 14.933333 34.133333 34.133334 34.133333z" fill="#5C6BC0" p-id="2166"></path><path d="M708.266667 556.8h72.533333c17.066667 0 34.133333-14.933333 34.133333-34.133333v-4.266667c0-17.066667-14.933333-34.133333-34.133333-34.133333h-72.533333c-17.066667 0-34.133333 14.933333-34.133334 34.133333v4.266667c0 19.2 12.8 34.133333 34.133334 34.133333zM260.266667 699.733333h74.666666c17.066667 0 34.133333-17.066667 32-34.133333V661.333333c0-17.066667-14.933333-34.133333-34.133333-34.133333h-72.533333c-17.066667 0-34.133333 14.933333-34.133334 34.133333v4.266667c2.133333 17.066667 14.933333 34.133333 34.133334 34.133333zM708.266667 699.733333h72.533333c17.066667 0 34.133333-17.066667 34.133333-34.133333V661.333333c0-17.066667-14.933333-34.133333-34.133333-34.133333h-72.533333c-17.066667 0-34.133333 14.933333-34.133334 34.133333v4.266667c0 17.066667 12.8 34.133333 34.133334 34.133333z" fill="#333333" p-id="2167"></path><path d="M484.266667 699.733333h72.533333c17.066667 0 34.133333-17.066667 34.133333-34.133333V661.333333c0-17.066667-14.933333-34.133333-34.133333-34.133333h-72.533333c-17.066667 0-34.133333 14.933333-34.133334 34.133333v4.266667c0 17.066667 14.933333 34.133333 34.133334 34.133333z" fill="#5C6BC0" p-id="2168"></path></svg>',
  // },
  // lineCharts: [
  //   {
  //     content: "Basic Line Chart",
  //     link: `<svg t="1714902518753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1076" width="200" height="200"><path d="M512 128C253.866667 128 42.666667 337.066667 42.666667 595.2c0 104.533333 34.133333 204.8 98.133333 288 10.666667 14.933333 32 17.066667 46.933333 6.4 14.933333-10.666667 17.066667-32 6.4-46.933333-55.466667-70.4-85.333333-157.866667-85.333333-245.333334C108.8 375.466667 290.133333 194.133333 512 194.133333c221.866667 0 403.2 179.2 403.2 401.066667 0 89.6-29.866667 174.933333-85.333333 245.333333-6.4 6.4-8.533333 14.933333-6.4 25.6 2.133333 8.533333 6.4 17.066667 12.8 21.333334 6.4 6.4 14.933333 8.533333 25.6 6.4 8.533333-2.133333 17.066667-6.4 21.333333-12.8 64-81.066667 98.133333-183.466667 98.133333-288C981.333333 337.066667 770.133333 128 512 128z m0 0" fill="#333333" p-id="1077"></path><path d="M512 362.666667c19.2 0 34.133333-14.933333 34.133333-34.133334v-66.133333c0-19.2-14.933333-34.133333-34.133333-34.133333-19.2 0-34.133333 14.933333-34.133333 34.133333v66.133333c0 19.2 14.933333 34.133333 34.133333 34.133334zM228.266667 435.2c-8.533333-8.533333-21.333333-8.533333-32-4.266667s-19.2 14.933333-19.2 27.733334c0 12.8 4.266667 23.466667 14.933333 29.866666l55.466667 38.4c6.4 4.266667 17.066667 6.4 25.6 4.266667 8.533333-2.133333 17.066667-6.4 21.333333-14.933333 10.666667-14.933333 6.4-36.266667-8.533333-46.933334l-57.6-34.133333zM825.6 437.333333c-6.4-6.4-14.933333-10.666667-23.466667-10.666666-8.533333 0-17.066667 2.133333-23.466666 8.533333l-51.2 44.8c-14.933333 12.8-14.933333 34.133333-4.266667 46.933333 12.8 14.933333 34.133333 14.933333 46.933333 4.266667l51.2-44.8c6.4-6.4 10.666667-14.933333 10.666667-23.466667 2.133333-10.666667-2.133333-19.2-6.4-25.6zM612.266667 763.733333v-8.533333l-66.133334-266.666667c0-2.133333-2.133333-2.133333-2.133333-4.266666s-2.133333-4.266667-2.133333-6.4l-4.266667-4.266667c-4.266667-2.133333-4.266667-4.266667-6.4-6.4-2.133333-2.133333-4.266667-2.133333-6.4-2.133333-2.133333 0-2.133333-2.133333-4.266667-2.133334h-14.933333-2.133333c-2.133333 0-2.133333 2.133333-4.266667 2.133334s-4.266667 2.133333-6.4 2.133333c-2.133333 2.133333-2.133333 4.266667-4.266667 6.4l-4.266666 4.266667c-2.133333 2.133333-2.133333 4.266667-2.133334 6.4 0 2.133333-2.133333 2.133333-2.133333 4.266666l-66.133333 266.666667V770.133333c2.133333 53.333333 46.933333 93.866667 100.266666 93.866667s96-42.666667 100.266667-93.866667V768c-2.133333-2.133333-2.133333-4.266667-2.133333-4.266667zM512 795.733333c-17.066667 0-32-12.8-32-32l32-132.266666 32 132.266666c0 19.2-14.933333 32-32 32z" fill="#5C6BC0" p-id="1078"></path></svg>`,
  //   },
  //   {
  //     content: "Smoothed Line Chart",
  //     link: "https://echarts.apache.org/examples/data/thumb/line-smooth.webp?_v_=1710607049619",
  //   },
  //   {
  //     content: "Basic area chart",
  //     link: "https://echarts.apache.org/examples/data/thumb/area-basic.webp?_v_=1710607049619",
  //   },
  // ],
  // barCharts: [
  //   {
  //     content: "Basic Bar",
  //     link: "https://echarts.apache.org/examples/data/thumb/bar-simple.webp?_v_=1710607049619",
  //   },
  //   {
  //     content: "Axis Align with Tick",
  //     link: "https://echarts.apache.org/examples/data/thumb/bar-tick-align.webp?_v_=1710607049619",
  //   },
  //   {
  //     content: "Bar with Background",
  //     link: "https://echarts.apache.org/examples/data/thumb/bar-background.webp?_v_=1710607049619",
  //   },
  // ],
  // pieCharts: [
  //   {
  //     content: "Basic Pie Chart",
  //     link: "https://echarts.apache.org/examples/data/thumb/pie-simple.webp?_v_=1710607049619",
  //   },
  //   {
  //     content: "Doughnut Chart with Rounded Corner",
  //     link: "https://echarts.apache.org/examples/data/thumb/pie-borderRadius.webp?_v_=1710607049619",
  //   },
  //   {
  //     content: "Half Doughnut Chart",
  //     link: "https://echarts.apache.org/examples/data/thumb/pie-half-donut.webp?_v_=1710607049619",
  //   },
  // ],
};
module.exports = {
  chartIMG,
};
