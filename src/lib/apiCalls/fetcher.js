"use server"

const baseUrl = process.env.baseUrl;

export async function getBanners(outlet) {
  try {
    const res = await fetch(baseUrl + `/v1/qr/api/get-advertisement-banners/${outlet}`);
    let data= await res.json();
    // console.log(data)
    return data;
  } catch (e) {
    console.log("Fetch Error: Banner CTAs List\n", e.message);
    return null;
  }
}

export async function getCategories(outlet) {
  try {
    const res = await fetch(baseUrl + `/v1/qr/api/get-categories/${outlet}`);
    let data= await res.json();
    // console.log(data)
    return data;
  } catch (e) {
    console.log("Fetch Error: Category List\n", e.message);
    return null;
  }
}

export async function getProducts(outlet) {
  try {
    const res = await fetch(baseUrl + `/v1/qr/api/get-products/${outlet}`);
    let data= await res.json();
    // console.log(data)
    return data;  } catch (e) {
    console.log("Fetch Error: Items List\n", e.message);
    return null;
  }
}

export async function getSpecialMenu(outlet) {
  try {
    const res = await fetch(baseUrl + `/v1/qr/api/special-menu/${outlet}`);
    let data= await res.json();
    // console.log(data)
    return data;  } catch (e) {
    console.log("Fetch Error: Specail menu list\n", e.message);
    return null;
  }
}
