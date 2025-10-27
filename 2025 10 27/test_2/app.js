// const API_1_URL_PROD = "https://api.escuelajs.co/api/v1/products";
// const API_1_URL_CATE = "https://api.escuelajs.co/api/v1/categories";
// const API_1_URL_USER = "https://api.escuelajs.co/api/v1/users";
// const API_2_URL_ADD = "https://fakestoreapi.com/products";

// // cRud - read
// async function getItems(url) {
//     const request = await fetch(url);
//     const products = await request.json();
//     return products.slice(0, 1)[0];
// };
// console.log(getItems(API_1_URL_PROD));
// console.log(getItems(API_1_URL_CATE));
// console.log(getItems(API_1_URL_USER));

// // Crud - create
// async function postItems(url) {
//     const product = {
//         title: "New Product 123",
//         price: 123.45
//     };
//     const api_options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(product)
//     };
//     const request = await fetch(url, api_options);
//     const response = await request.json();
//     console.log(response);
// };
// postItems(API_2_URL_ADD);

// // crUd - update
// async function putItems() {
//     const product = { title: 'Updated Product', price: 39.99 };
//     fetch('https://fakestoreapi.com/products/21', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(product)
//     })
//     .then(response => response.json())
//     .then(data => console.log(data));
// };
// putItems();

// // cruD - delete
// async function deleteItems() {
//     const request1 = await fetch('https://fakestoreapi.com/products', {method: 'GET'});
//     const response1 = await request1.json();
//     console.log(response1);

//     const delete_product = await fetch('https://fakestoreapi.com/products/21', {method: 'DELETE'});

//     const request2 = await fetch('https://fakestoreapi.com/products', {method: 'GET'});
//     const response2 = await request2.json();
//     console.log(response2);
// };
// deleteItems();
