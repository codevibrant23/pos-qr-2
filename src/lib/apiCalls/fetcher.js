"use server";

const baseUrl = process.env.baseUrl;

export async function getAdBanners(outlet) {
  try {
    const res = await fetch(
      baseUrl + `/v1/qr/api/get-advertisement-banners/${outlet}`
    );
    let data = await res.json();
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
    let data = await res.json();
    // console.log(data)
    return data;
  } catch (e) {
    console.log("Fetch Error: Category List\n", e.message);
    return null;
  }
}

export async function getProducts(outlet, veg, nonVeg) {
  let endpoint = `/v1/qr/api/get-products/${outlet}`;
  // Only append query parameters if exactly one of the flags is true
  if (veg && !nonVeg) {
    endpoint += "?isVeg=true";
  } else if (nonVeg && !veg) {
    endpoint += "?isNonVeg=true";
  }

  console.log("get products"+endpoint);
  try {
    const res = await fetch(baseUrl + endpoint);
    let data = await res.json();
    // console.log(data)
    return data;
  } catch (e) {
    console.log("Fetch Error: Items List\n", e.message);
    return null;
  }
}

export async function getSpecialMenu(outlet) {
  try {
    const res = await fetch(baseUrl + `/v1/qr/api/special-menu/${outlet}`);
    let data = await res.json();
    // console.log(data)
    return data;
  } catch (e) {
    console.log("Fetch Error: Specail menu list\n", e.message);
    return null;
  }
}
