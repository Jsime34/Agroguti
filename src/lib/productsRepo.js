// Thin product data-access layer.
//
// This is the ONLY file that should touch the products data source directly.
// When the AWS (EC2 + RDS) backend is ready, rewrite these functions to
// `async` + `fetch(API_URL + '/products')`. No component needs to change as
// long as the return shape stays the same.

import products from '../data/products';

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}
