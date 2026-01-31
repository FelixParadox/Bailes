"use strict"
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
  '▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁  || Loading',
  '▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂  || Loading',
  '▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃  || Loading',
  '▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄  || Loading',
  '▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅  || Loading',
  '▆ ▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆  || Loading',
  '▇ ▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇  || Loading',
  '▆ ▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆  || Loading',
  '▅ ▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅  || Loading',
  '▄ ▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄  || Loading',
  '▃ ▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃  || Loading',
  '▂ ▁ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▆ ▅ ▄ ▃ ▂  || Loading'
];



let i = 0;
const intervalTime = 400; // milidetik
const totalDuration = 4000; // total animasi 4 detik


const interval = setInterval(() => {
  console.clear()
  console.log(
    color.bold + color.orange + frames[i % frames.length] + color.reset
  )
  i++
}, intervalTime)

setTimeout(() => {
  clearInterval(interval)
  console.clear()

  console.log(
    '\n' +
    color.bold + color.orange + '㊋ Bailes Felix Hasgawa' + color.reset + '\n' +
    color.bold + color.white + '㊋ Base Bailes By: ' + color.reset + color.blue + 'Felix Hasgawa' + color.reset + '\n' +
    color.bold + color.white + '㊋ Versi Bailes : ' + color.reset + color.green + '1.0.0' + color.reset + '\n' +
    color.gray + '\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' + color.reset
  )
}, totalDuration)
console.clear()
const __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k

    let desc = Object.getOwnPropertyDescriptor(m, k)

    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = {
          enumerable: true, 
          get: function() { 
              return m[k] 
          }
       }
    }

    Object.defineProperty(o, k2, desc) 

    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
    }
))

const __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) {
            __createBinding(exports, m, p)
       }
   }
}

Object.defineProperty(exports, "__esModule", { 
    value: true 
})

exports.proto = 
exports.makeWASocket = null

const { proto } = require("../WAProto")

Object.defineProperty(exports, "proto", {
    enumerable: true, 
    get: function () { 
        return proto
    } 
})

const { default: socket } = require("./Socket")

exports.makeWASocket = socket

__exportStar(require("../WAProto"), exports)
__exportStar(require("./Utils"), exports)
__exportStar(require("./Types"), exports)
__exportStar(require("./Store"), exports)
__exportStar(require("./Defaults"), exports)
__exportStar(require("./WABinary"), exports)
__exportStar(require("./WAM"), exports)
__exportStar(require("./WAUSync"), exports) 

exports.default = socket
