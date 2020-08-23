const productButtons = document.querySelectorAll(`button[data-select-product-type]`)
productButtons.forEach(button => {
  button.onclick = () => filterProductsByType(button.dataset.selectProductType)
})

function filterProductsByType(type) {
  const productsToShow = document.querySelectorAll(`[data-product-type="${type}"]`)
  if (productsToShow.length === 0) {
    const allProducts = document.querySelectorAll(`[data-product-type]`)
    allProducts.forEach(product => showProduct(product))
    return
  }
  
  const productsToHide = document.querySelectorAll(`[data-product-type]:not([data-product-type="${type}"])`)
  
  productsToShow.forEach(product => showProduct(product))
  productsToHide.forEach(product => hideProduct(product))
}

function hideProduct(productNode) {
  productNode.style = "display: none;"
}

function showProduct(productNode) {
  productNode.style = ""
}