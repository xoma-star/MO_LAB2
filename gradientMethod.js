import {grad_P, P} from './functions.js'
import norm from './norm.js'

const gradientMethod = (p0, r) => {
  let p
  let gf = grad_P(p0, r)

  let k = 0
  let t = 1

  do{
    k++

    p = {
      x1: p0.x1 - t * gf.x1,
      x2: p0.x2 - t * gf.x2,
      x3: p0.x3 - t * gf.x3
    }
    console.log('123', gf)

    if(P(p, r) - P(p0, r) >= 0) t = t / 2
    p0 = p
    gf = grad_P(p0, r)

  }while(norm(gf) > 0.01)

  return p
}

export default gradientMethod