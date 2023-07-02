import { stringToPolygon, polygonToString, simplify, area } from '../src'
import svgText from './svg-test.ts'
import { elements, xinProxy } from 'xinjs'

const SVG_XMLNS = 'http://www.w3.org/2000/svg'
const TITLE = 'xinjs polygons demo'

type SvgElementCreator = (...parts: any) => any
type SvgElementCreatorMap = {
  [key: string]: SvgElementCreator
}
type SvgPart = string | {[key: string]: any}

const svgElements = new Proxy({} as SvgElementCreatorMap, {
  get(target, prop: string) {
    if (!target[prop]) {
      target[prop] = (...parts: SvgPart[] ) => {
        // @ts-ignore-error
        const elt = document.createElementNS(SVG_XMLNS, prop)
        const attrs: {[key: string]: any} = {}
        parts.forEach(
          (part: any) => {
            if (typeof part === 'string') {
              elt.append(part)
            } else if (typeof part === 'object' && part.constructor === Object) {
              Object.assign(attrs, part)
            } else {
              elt.append(part)
            }
          }
        )
        Object.keys(attrs).forEach((attr: string) => {
          elt.setAttribute(attr, attrs[attr])
        })
        return elt
      }
    }

    return target[prop]
  }
}
)

document.head.querySelector('title').textContent = TITLE
const main = document.querySelector('main') as HTMLElement

const { h1, div, button, input, a, img } = elements

const textRef = Symbol('text')

const svgContainer = div({ 
  class: 'elastic',
  onMouseenter(event: Event) {
    // @ts-expect-error
    const text = event?.target[textRef]
    if (text) {
      text.classList.add('hover')
    }
  },
  onMouseleave(event: Event) {
    // @ts-expect-error
    const text = event?.target[textRef]
    if (text) {
      text.classList.remove('hover')
    }
  }
})

function randomPct(min: number, max: number): string {
  return (Math.random() * (max - min) + min).toFixed(0) + '%'
}

function randomColor(): string {
  return `hsl(${(Math.random() * 360).toFixed(0)}, ${randomPct(25, 100)}, ${randomPct(25, 75)})`
}

function setText(poly: any, message: string): void {
  let text = poly[textRef]
  if (text === undefined) {
    const [x, y] = poly.getAttribute('points').split(',')
    poly[textRef] = text = svgElements.text({ x, y })
    text.style.zIndex = 1
    poly.parentElement.append(text)
  }
  text.textContent = message
}

const { settings, handlers } = xinProxy({
  settings: {
    threshold: 0.01,
  },
  handlers: {
    async loadSvg(): Promise<void> {
      // github pages screws up the file
      /*
      const response = await fetch(testSvg)
      const text = await response.text()
      svgContainer.innerHTML = text
      */
      svgContainer.innerHTML = svgText
      handlers.randomColors()
      handlers.area()
    },
    randomColors(): void { 
      [...document.querySelectorAll('polygon')].forEach(poly => {
        poly.setAttribute('fill', randomColor())
      })
    },
    area(): void {
      let totalArea = 0
      // @ts-expect-error
      ;[...document.querySelectorAll('polygon')].forEach(poly => {
        try {
          let points = stringToPolygon(poly.getAttribute('points'))
          if (points.length > 3) {
            const a = area(...points)
            totalArea += a
            const message = `Area: ${a}, Points: ${points.length}`
            setText(poly, message)
          }
        } catch(e) {
          console.error(e)
        }
      })
      console.log({
        totalArea
      })
    },
    simplify(): void {
      let totalPoints = 0
      let totalRemaining = 0
      // @ts-expect-error
      ;[...document.querySelectorAll('polygon')].forEach(poly => {
        try {
          let points = stringToPolygon(poly.getAttribute('points'))
          const origPointCount = points.length
          if (points.length > 3) {
            points = simplify(points, settings.threshold)
            const message = `${origPointCount} -> ${points.length}`
            setText(poly, message)
            poly.setAttribute('points', polygonToString(points))
          }
          totalPoints += origPointCount
          totalRemaining += points.length
        } catch(e) {
          console.error(e)
          setText(poly, e as string)
        }
      })
      console.log({
        totalPoints,
        totalRemaining,
        reduction: ((1 - totalRemaining / totalPoints) * 100).toFixed(1) + '%'
      })
    }
  }
})

try {
  main.append(
    h1(TITLE),
    div(
      { class: 'bar' },
      a('demo', {href: 'https://tonioloewald.github.io/xinjs-polygons/'}),
      a('github', {href: 'https://github.com/tonioloewald/xinjs-polygons#readme)'}),
      a('npm', {href: 'https://www.npmjs.com/package/xinjs-polygons'}),
      img({alt: 'bundlejs', src: 'https://deno.bundlejs.com/?q=xinjs-polygons&badge='}),
      button('Reload', { onClick: handlers.loadSvg }),
      button('Simplify', { onClick: handlers.simplify }),
      input({
        title: 'threshold',
        placeholder: 'threshold',
        min: '0.01',
        step: '0.01',
        max: '5',
        type: 'range',
        bindValue: 'settings.threshold'
      }),
      input({
        type: 'number',
        step: '0.01',
        bindValue: 'settings.threshold',
      })
    ),
    svgContainer
  )
} catch(e) {
  console.log(e)
}

handlers.loadSvg().catch(e => console.error(e))