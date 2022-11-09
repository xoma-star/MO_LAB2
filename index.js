import gradientMethod from './gradientMethod.js'
import {Phi, h, f} from './functions.js'

let p, phi
let r = 10
let C = 10
let k = 0

let p0 = {x1: 0, x2: 0, x3: 0}

do{
  p = gradientMethod(p0, r)
  phi = Phi(p, r)
  k++

  r = r / C
} while(Math.abs(phi) > 0.01)

console.log(`Всего шагов: ${k}`)
console.log(`Решение: (${p.x1}, ${p.x2}, ${p.x3})`)
console.log(`f = ${f(p)}`)