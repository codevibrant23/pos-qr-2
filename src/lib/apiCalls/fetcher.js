"use server"

const baseUrl = process.env.baseUrl;

export async function getCategories(outlet) {
  try {
    const res = await fetch(baseUrl + `/v1/qr/api/get-categories/${outlet}`);
    return await res.json();
  } catch (e) {
    console.log("Fetch Error: Category List\n", e.message);
    return null;
  }
}

export async function getProducts(outlet) {
  try {
    const res = await fetch(baseUrl + `/v1/qr/api/get-products/${outlet}`);
    return await res.json();
  } catch (e) {
    console.log("Fetch Error: Items List\n", e.message);
    return null;
  }
}
