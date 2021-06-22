const fs = require('fs')
const path = require('path')
const { createCanvas, loadImage } = require('canvas')

const LOGOS = [
  ['yale.png', 120], // [src, width]
  ['broad.png', 120],
  ['bch.png', 120],
  ['bawh.png', 130],
  ['whitehead.png', 150],
  ['asu.png', 100],
  ['icahn.png', 80],
  ['rock.png', 100],
  ['mgh.png', 150],
  ['mit.png', 100],
]

async function generateImage(
    logos = LOGOS, 
    width = 900, 
    height = 900, 
    bgColor = '#F6F9FB',
    lineColor = '#D2D5D6',
    radius = 375,
    inputFolder = path.join(__dirname, 'logos'),
    outputFile = './logos.png'
  ) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  
  ctx.fillStyle = bgColor
  ctx.fillRect(0, 0, width, height)
  
  const cx = width / 2 // x center of canvas
  const cy = height / 2 // y center of canvas

  // FASI logo
  const logo = await loadImage(path.join(inputFolder, 'fasi.png'))
  const logoWidth = width * 0.4
  const logoHeight = logo.height / logo.width * logoWidth
  ctx.drawImage(logo, cx - logoWidth / 2, cy - logoHeight / 2, logoWidth, logoHeight)

  // university logos
  const arc = 2 * Math.PI / logos.length // arc length for each logo (radians)
  const lineOffset = arc * 0.35 // makes line smaller than arc by a percentage
  const rotationOffset = -1 / 2 * Math.PI // rotate 90degs ccw
  
  for (let i = 0; i < logos.length; i++) {
    const theta = arc * i + rotationOffset
    const x = Math.cos(theta) * radius
    const y = Math.sin(theta) * radius

    // image
    const image = await loadImage(path.join(inputFolder, logos[i][0]))
    const imgWidth = logos[i][1]
    const imgHeight = image.height / image.width * imgWidth
    ctx.drawImage(image, cx + x - imgWidth / 2, cy + y - imgHeight / 2, imgWidth, imgHeight)

    // line
    const lineStart = theta + lineOffset // this is an angle
    const lineEnd = theta + arc - lineOffset // so is this

    ctx.fillStyle = lineColor
    ctx.strokeStyle = lineColor

    ctx.beginPath()
    ctx.arc(cx, cy, radius, lineStart, lineEnd)
    ctx.stroke()

    // dot
    ctx.beginPath()
    ctx.arc(cx + Math.cos(lineStart) * radius, cy + Math.sin(lineStart) * radius, 2, 0, Math.PI * 2)
    ctx.fill()

    // other dot
    ctx.beginPath()
    ctx.arc(cx + Math.cos(lineEnd) * radius, cy + Math.sin(lineEnd) * radius, 2, 0, Math.PI * 2)
    ctx.fill()

  }
  
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(outputFile, buffer)
}

generateImage()
