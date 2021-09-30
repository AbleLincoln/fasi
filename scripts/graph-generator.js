const fs = require('fs')
const { createCanvas } = require('canvas')

const { prevalance } = require('./graph-data.js')

generateGraph(prevalance)

async function generateGraph({
  width = 900,
  height = 450,
  origin = [100, 400],
  lineColor = '#5a6879',
  outputFile = 'graph.png',
  xAxis = {
    labels: [],
    step: 1,
  },
  yAxis = {
    labels: [],
    step: 1,
    title: '',
  },
  datasets = [],
} = {}) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // background
  ctx.fillStyle = '#fff' // TODO: remove, only for testing
  ctx.fillRect(0, 0, width, height)

  ctx.strokeStyle = lineColor
  ctx.fillStyle = lineColor
  ctx.lineWidth = 2
  ctx.font = '14px sans-serif' // this will be the font for axis unit labels
  ctx.textAlign = 'center'

  xAxis.length = width - origin[0] - 50 // buffer room
  yAxis.length = origin[1] - 50

  drawXAxis(ctx, origin, xAxis)
  drawYAxis(ctx, origin, yAxis)
  datasets.forEach((dataset) => plotData(ctx, origin, dataset, xAxis, yAxis))

  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(outputFile, buffer)
}

function drawLabel(ctx, [x, y], axis = '', label = '') {
  const offset = 10

  ctx.beginPath()
  ctx.moveTo(x, y)
  if (axis === 'x') ctx.lineTo(x, y + offset)
  else ctx.lineTo(x - offset, y)
  ctx.stroke()

  if (label !== '') {
    if (axis === 'x') ctx.fillText(label, x, y + offset * 2.75)
    else ctx.fillText(label, x - offset * 2.75, y + 3)
  }
}

function drawXAxis(ctx, [x0, y0], { length, labels, step }) {
  ctx.beginPath()
  ctx.moveTo(x0, y0)
  ctx.lineTo(x0 + length, y0)
  ctx.stroke()

  labels.forEach((label, i) => {
    const x = x0 + (i * length) / (labels.length - 1)

    drawLabel(ctx, [x, y0], 'x', i % step === 0 ? label : '')
  })
}

function drawYAxis(ctx, [x0, y0], { length, labels, step, title }) {
  ctx.beginPath()
  ctx.moveTo(x0, y0)
  ctx.lineTo(x0, y0 - length)
  ctx.stroke()

  labels.forEach((label, i) => {
    const y = y0 - (i * length) / (labels.length - 1)
    drawLabel(ctx, [x0, y], 'y', i % step === 0 ? label : '')
  })

  if (title) {
    ctx.save()

    ctx.translate(x0 - 60, y0 - length / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.font = '20px sans-serif'
    ctx.fillText(title, 0, 0)

    ctx.restore()
  }
}

function plotData(
  ctx,
  [x0, y0],
  { data, label },
  xAxis,
  { length: yAxisLength, labels }
) {
  const pixelMappedData = data.map((point, i) => {
    x = x0 + i * (xAxis.length / (data.length - 1))
    y = y0 - point * (yAxisLength / (labels[labels.length - 1] - labels[0]))
    return [x, y]
  })

  const [xf, yf] = pixelMappedData[pixelMappedData.length - 1]

  const grad = ctx.createLinearGradient(x0, y0, xf, yf)
  grad.addColorStop(0, '#2624fc')
  grad.addColorStop(1, '#fc1c3d')

  ctx.strokeStyle = grad
  ctx.lineWidth = 5

  ctx.beginPath()
  // move to the first point
  ctx.moveTo(pixelMappedData[0][0], pixelMappedData[0][1])
  for (i = 1; i < pixelMappedData.length - 2; i++) {
    var xc = (pixelMappedData[i][0] + pixelMappedData[i + 1][0]) / 2
    var yc = (pixelMappedData[i][1] + pixelMappedData[i + 1][1]) / 2
    ctx.quadraticCurveTo(pixelMappedData[i][0], pixelMappedData[i][1], xc, yc)
  }
  // curve through the last two pixelMappedData
  ctx.quadraticCurveTo(
    pixelMappedData[i][0],
    pixelMappedData[i][1],
    pixelMappedData[i + 1][0],
    pixelMappedData[i + 1][1]
  )
  ctx.stroke()

  // calculate slope btwn last 2 pts
  const slope =
    (pixelMappedData[pixelMappedData.length - 2][1] - yf) /
    (xf - pixelMappedData[pixelMappedData.length - 2][0])

  drawArrow(ctx, [xf, yf], slope, '#fc1c3d')

  // draw label
  const offset = 33
  if (label) ctx.fillText(label, xf + 5, yf + offset)
}

function drawArrow(ctx, [x, y], slope, color) {
  ctx.save()

  const angle = Math.atan(slope)
  ctx.translate(x, y)
  ctx.rotate(-Math.PI / 2 - angle)

  ctx.beginPath()
  ctx.fillStyle = color
  ctx.moveTo(0, 0)
  ctx.lineTo(8, 0)
  ctx.lineTo(0, 14)
  ctx.lineTo(-8, 0)
  ctx.lineTo(0, 0)
  ctx.fill()

  ctx.restore()
}
