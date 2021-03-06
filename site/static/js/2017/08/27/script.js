var data = [
0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
0.0, 0.0, 5.45752185713e-06, 6.06876430512e-05, 0.000356721092652, 0.00147457874562, 0.00481272261787, 0.0132041670186, 0.031666481723, 0.068168860291,
0.134265842705, 0.24544888799, 0.421103966798, 0.684024701465, 1.05950041424, 1.57406132325, 2.25400788661, 3.12387262918, 4.20496092923, 5.51409649164,
7.06266405206, 8.85600313068, 10.8931684241, 13.1670391693, 15.6647342323, 18.3682728123, 21.2554122641, 24.3005934807, 27.4759289256, 30.7521769925,
34.0996572224, 37.4890725902, 40.8922164763, 44.2825522782, 47.6356624167, 50.9295705227, 54.1449458388, 57.265202437, 60.2765079547, 63.1677174202,
65.9302476482, 68.5579068799, 71.0466930434, 73.3945724179, 75.6012487516, 77.6679311262, 79.5971071782, 81.3923267286, 83.0579994862, 84.5992092804,
86.0215462708, 87.3309577438, 88.5336174498, 89.6358129271, 90.643849887, 91.5639724762, 92.4022980745, 93.1647651969, 93.8570930523, 94.4847513296,
95.0529388441, 95.5665697584, 96.030266191, 96.4483561316, 96.8248756957, 97.1635748569, 97.4679259063, 97.7411339843, 97.986149129, 98.2056793653,
98.4022044403, 98.577989878, 98.7351010872, 98.8754173081, 99.000645234, 99.1123321759, 99.2118786794, 99.3005505257, 99.3794900734, 99.4497269175,
]
var ctx = document.getElementById('chart').getContext('2d')
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(function(_, i){return i+1}),
    datasets: [{
      label: ' 23マス埋まっている確率',
      backgroundColor: '#2ebaae',
      data: data,
    }],
  },
  options: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '23マス埋まっている確率',
    },
    tooltips: {
      mode: 'x',
      intersect: false,
      displayColors: false,
      callbacks: {
        title: function(tooltipItems) {
          return tooltipItems[0].xLabel + '回ビンゴ回した時の確率'

        },
        label: function(tooltipItem) {
          return tooltipItem.yLabel + '%'
        },
      },
    },
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: true,
          maxTicksLimit: 24,
        },
        scaleLabel: {
          display: true,
          labelString: '回数',
        },
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '確率',
        },
      }],
    },
  },
})
