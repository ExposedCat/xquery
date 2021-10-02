class XQuery {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector)
    }

    /**
     * Execute function for each selected element
     * @param {(HTMLElement?) => void} func - function to be executed
     */
    do(func) {
        for (const element of this.elements) {
            func(element)
        }
    }

    /**
     * Get selected HTML element(s)
     * @returns {HTMLElement|HTMLElement[]}
     */
    unwrap() {
        if (this.elements.length === 1) {
            return this.elements[0]
        } else {
            return [...this.elements]
        }
    }
}

/**
 * Create new XQuery instance
 * @param {string} selector - selector
 * @returns {XQuery}
 */
const $ = selector => new XQuery(selector)

/**
 * Create new XQuery instance
 * @param {string} event - event name
 * @param {string} parentSelector - selector of parent element
 * @param {string} selector - selector
 * @param {(event: Event) => void} func - function to be executed
 */
function handleEvent(event, parentSelector, selector, func) {
    const parent = document.querySelector(parentSelector)
    parent.addEventListener(event, event => {
        if (event.target.closest(selector)) {
            func(event)
        }
    })
}