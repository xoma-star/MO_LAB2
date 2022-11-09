export const f = ({x1, x2, x3}) => x1 ** 2 + 2 * x2 ** 2 + 10 * x3 ** 2
const grad_f = ({x1, x2, x3}) => ({x1: 2 * x1, x2: 4 * x2, x3: 20 * x3})
export const h = {
  h1: ({x1, x2, x3}) => x1 + x2 ** 2 + x3 - 5,
  h2: ({x1, x2, x3}) => x1 + 5 * x2 + x3 - 7
}

const grad_h = {
  h1: ({x2}) => ({x1: 1, x2: 2 * x2, x3: 1}),
  h2: ({}) => ({x1: 1, x2: 5, x3: 1})
}
export const Phi = ({x1, x2, x3}, r) => r / 2 * (h.h1({x1, x2, x3}) ** 2 + h.h2({x1, x2, x3}) ** 2)
const grad_Phi = ({x1, x2, x3}, r) => {
  const h_ = {h1: h.h1({x1, x2, x3}), h2: h.h2({x1, x2, x3})}
  const gh = {h1: grad_h.h1({x2}), h2: grad_h.h2({})}

  return {
    x1: (h_.h1 * gh.h1.x1 + h_.h2 * gh.h2.x1) * r,
    x2: (h_.h1 * gh.h1.x2 + h_.h2 * gh.h2.x2) * r,
    x3: (h_.h1 * gh.h1.x3 + h_.h2 * gh.h2.x3) * r
  }
}
export const P = ({x1, x2, x3}, r) => f({x1, x2, x3}) + Phi({x1, x2, x3}, r)
export const grad_P = ({x1, x2, x3}, r) => {
  const a = grad_f({x1, x2, x3})
  const b = grad_Phi({x1, x2, x3}, r)
  return ({
  x1: grad_f({x1, x2, x3}).x1 + grad_Phi({x1, x2, x3}, r).x1,
  x2: grad_f({x1, x2, x3}).x2 + grad_Phi({x1, x2, x3}, r).x2,
  x3: grad_f({x1, x2, x3}).x3 + grad_Phi({x1, x2, x3}, r).x3,
})
}
