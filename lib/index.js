"use strict"
console.clear()
console.log('\x1b[1;36m╔══════════════════════════════════════════════════════════════════════════════════════╗\x1b[0m')
console.log('\x1b[1;36m║                                                                                      ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m╔══════════════════════════════════════════════════════════════════════════╗\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║                                                                          ║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║   \x1b[1;32m┌─┐ ┬ ┬ ┬─┐ ┬ ┬─┐ ┌─┐ ┌─┐ ┌─┐\x1b[0m                           \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║   \x1b[1;32m│─┼─││││├─  │ ├┬┘ ├─┤ │─┼─│ │\x1b[0m                           \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║   \x1b[1;32m└─┘ └┴┘┴└─  ┴─┘┴└─ ┴ ┴ └─┘ └─┘\x1b[0m                           \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║                                                                          ║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║   \x1b[1;34m┌─┐ ┬ ┬ ┬ ┬ ┌─┐ ┌┬┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌┬┐ ┌─┐ ┌─┐ ┬ ┌─┐\x1b[0m   \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║   \x1b[1;34m│  │││││││├─┤  │  ├─┤ ├─  │ │ │ │  │ │ │├─┘├─┘ │ │\x1b[0m   \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║   \x1b[1;34m└─┘└┴┘┴└┴┘┴ ┴  ┴  ┴ ┴ └─┘ └─┘ └─┘  ┴ └─┘┴  ┴  └─┘o└─┘\x1b[0m   \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║                                                                          ║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║                    \x1b[1;35mHalo Selamat Datang Di\x1b[0m                    \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║                  \x1b[1;35mBailes Felix Hasgawa\x1b[0m                       \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║                    \x1b[1;35mVersi 1.0.0\x1b[0m                             \x1b[1;33m║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m║                                                                          ║\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║   \x1b[1;33m╚══════════════════════════════════════════════════════════════════════════╝\x1b[1;36m   ║\x1b[0m')
console.log('\x1b[1;36m║                                                                                      ║\x1b[0m')
console.log('\x1b[1;36m╚══════════════════════════════════════════════════════════════════════════════════════╝\x1b[0m')

// Spinner loading dari 1/100 selama 5 detik
const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
const startTime = Date.now()
const totalTime = 5000 // 5 detik
const interval = 50 // update setiap 50ms
const totalSteps = Math.floor(totalTime / interval)

let currentStep = 0
const spinnerInterval = setInterval(() => {
    currentStep++
    const progress = Math.min(currentStep, totalSteps)
    const percentage = Math.floor((progress / totalSteps) * 100)
    
    // Update progress bar
    const barLength = 40
    const filledLength = Math.round((progress / totalSteps) * barLength)
    const emptyLength = barLength - filledLength
    const bar = '█'.repeat(filledLength) + '░'.repeat(emptyLength)
    
    // Get current spinner character
    const spinnerChar = spinner[progress % spinner.length]
    
    // Clear line and show progress
    process.stdout.write(`\r\x1b[1;33m${spinnerChar} \x1b[1;36mLoading: \x1b[1;32m[${bar}]\x1b[0m \x1b[1;33m${percentage}%\x1b[0m ${progress}/${totalSteps} `)
    
    if (currentStep >= totalSteps) {
        clearInterval(spinnerInterval)
        console.log('\n\x1b[1;32m✓ Loading selesai!\x1b[0m')
        console.log('\x1b[1;36m╔══════════════════════════════════════════════════════════════════════════════════════╗\x1b[0m')
        console.log('\x1b[1;36m║                       \x1b[1;32mBailes Felix Hasgawa siap digunakan!\x1b[1;36m                       ║\x1b[0m')
        console.log('\x1b[1;36m╚══════════════════════════════════════════════════════════════════════════════════════╝\x1b[0m\n')
    }
}, interval)

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
