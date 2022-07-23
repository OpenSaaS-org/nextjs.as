class ElementHandler {
  element(element) {
    // An incoming element, such as `div`
    console.log(`Incoming element: ${element.tagName}`);
  }
}

const getAttribute = async (attribute) => {
    class AttributeScraper {
      constructor(attr) {
        this.attr = attr
      }

      element(element) {
        if (this.value) return

        this.value = element.getAttribute(this.attr)
      }
    }

    const scraper = new AttributeScraper(attribute)

    await new HTMLRewriter().on(this.selector, scraper).transform(this.response).arrayBuffer()

    return scraper.value || ''
}

export default {
  fetch: async (req) => {
    
    let url = new URL(request.url).pathname.replace('/','')
    if (url && !url.match(/^[a-zA-Z]+:\/\//)) url = 'http://' + url
    
    const nextjsPage = await fetch(url)
    
  }
}
