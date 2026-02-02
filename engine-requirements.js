const major = parseInt(process.versions.node.split('.')[0], 10);

console.clear()

const color = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",

  orange: "\x1b[38;5;208m",
  blue: "\x1b[38;5;33m",
  green: "\x1b[38;5;82m",
  white: "\x1b[37m",
  gray: "\x1b[90m"
}

const frames = [
  '▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁',
  '▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂',
  '▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃',
  '▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄',
  '▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅',
  '▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆',
  '▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇',
  '▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆',
  '▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅',
  '▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄',
  '▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃',
  '▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂'
]

let frameIndex = 0
let progress = 0

const intervalTime = 50
const totalSteps = 100

const interval = setInterval(() => {
  console.clear()

  const percent = Math.min(progress, 100)

  console.log(
    color.bold + color.orange +
    frames[frameIndex % frames.length] +
    color.reset
  )

  console.log(
    color.gray +
    "Optimizing modules and system resources" +
    color.reset
  )

  console.log("")
  console.log(
    color.bold + color.orange +
    `Progress : ${percent}%` +
    color.reset
  )

  frameIndex++
  progress++

  if (progress > totalSteps) {
    clearInterval(interval)
    finish()
  }
}, intervalTime)

function finish() {
  console.clear()

  console.log(
    color.bold + color.orange +
    "\n\nThank you for using @felixparadox/baileys\n" +
    color.reset
  )

  console.log(
    color.white +
    "This library is developed with a structured and efficient approach\n" +
    "to support stable, scalable, and maintainable system development.\n" +
    color.reset
  )

  console.log(
    color.gray + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" + color.reset
  )

  console.log(
    color.bold + color.orange + "㊋ Bailes Felix Hasgawa" + color.reset
  )
  console.log(
    color.bold + color.white + "㊋ Base Bailes By: " +
    color.reset + color.blue + "Felix Hasgawa" + color.reset
  )
  console.log(
    color.bold + color.white + "㊋ Version      : " +
    color.reset + color.green + "1.0.1" + color.reset
  )

  console.log(
    color.gray + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" + color.reset
  )
}
if (major < 20) {
  console.error(
    `\n❌ This package requires Node.js 20+ to run reliably.\n` +
    `   You are using Node.js ${process.versions.node}.\n` +
    `   Please upgrade to Node.js 20+ to proceed.\n`
  );
  process.exit(1);
}