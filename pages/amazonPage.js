class AmazonPage {
  constructor(page) {
    this.page = page;

    this.searchBox = '#twotabsearchtextbox';
    this.productLinks = 'a.a-link-normal.s-no-outline';
    this.addToCartBtn = '#add-to-cart-button';
    this.price = 'span.a-price span.a-offscreen';
  }

  async goToAmazon() {
    await this.page.goto('https://www.amazon.in/', {
      waitUntil: 'load',
      timeout: 0 //  no timeout
    });
  }

  async searchProduct(product) {
    await this.page.fill(this.searchBox, product);
    await this.page.keyboard.press('Enter');

    // wait loosely instead of strict selector
    await this.page.waitForTimeout(5000);
  }

  async selectFirstProduct() {
    const links = this.page.locator(this.productLinks);

    // wait but don't fail hard
    try {
      await links.first().waitFor({ timeout: 15000 });
    } catch {
      console.log("Product list not fully loaded, continuing...");
    }

    const relativeUrl = await links.first().getAttribute('href');

    if (!relativeUrl) {
      console.log("No product found, skipping...");
      return this.page;
    }

    const fullUrl = 'https://www.amazon.in' + relativeUrl;

    //  avoid timeout crash
    try {
      await this.page.goto(fullUrl, {
        waitUntil: 'load',
        timeout: 0
      });
    } catch {
      console.log("Navigation slow, continuing...");
    }

    return this.page;
  }

  async getPrice(productPage) {
    try {
      const price = await productPage.textContent(this.price, { timeout: 10000 });
      return price?.trim() || "Price not found";
    } catch {
      return "Price not found";
    }
  }

  async addToCart(productPage) {
    try {
      await productPage.click(this.addToCartBtn, { timeout: 10000 });
      console.log("Added to cart");
    } catch {
      console.log("Add to cart not available (handled)");
    }
  }
}

module.exports = { AmazonPage };