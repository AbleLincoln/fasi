exports.anaphy = {
  outputFile: 'generated/anaphylactic.png',
  datasets: [[2.8, 3.75, 4.2, 4.5, 4.66, 4.75, 6, 8.66, 12, 17, 22]],
  xAxis: {
    labels: Array(12)
      .fill()
      .map((_, i) => i + 2006),
    step: 2,
  },
  yAxis: {
    labels: Array(6)
      .fill()
      .map((_, i) => i * 5),
    step: 1,
    title: 'Anaphylactic reactions (percent)',
  },
}

exports.prevalance = {
  outputFile: 'generated/prevalence.png',
  datasets: [
    {
      //     97   99    01    03   05  07  09  11  13  15  17  19
      data: [7.5, 8, 8.5, 9.25, 9.99, 10.66, 11.5, 12.5, 14, 17, 21, 26],
      label: 'Adults',
    },
    {
      data: [2.5, 2.75, 3, 3.25, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
      label: 'Children',
    },
  ],
  xAxis: {
    labels: Array(12)
      .fill()
      .map((_, i) => i * 2 + 1997),
    step: 2,
  },
  yAxis: {
    labels: Array(7)
      .fill()
      .map((_, i) => i * 5),
    step: 1,
    title: 'US Prevalence (millions)',
  },
}
