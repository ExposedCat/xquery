class XQuery {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector)
    }

    do(func) {
        for (const element of this.elements) {
            func(element)
        }
    }

    unwrap() {
        if (this.elements.length === 1) {
            return this.elements[0]
        } else {
            return [...this.elements]
        }
    }
}

const $ = (...args) => new XQuery(...args)

function handleEvent(event, parentSelector, selector, func) {
    const parent = document.querySelector(parentSelector)
    parent.addEventListener(event, event => {
        if (event.target.closest(selector)) {
            func(event)
        }
    })
}