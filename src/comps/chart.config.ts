import { ApexOptions } from 'apexcharts';

export const DailySeries = [
  {
    name: 'Today',
    data: [183, 124, 115],
  },
  
];

export const DailyOptions: ApexOptions= {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Carbs', 'Fat', 'Protein'],
  },
  yaxis: {
    title: {
      text: ' (grams)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {

    y: {
      formatter(val: number) {
        return ` ${val} grams`;
      },
    },
  },
};