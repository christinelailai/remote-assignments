
function ajax(src, callback) {
    let xhr = new  XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               callback( xhr.responseText);
            }
        }
    }
    xhr.open("GET", src)

    xhr.send()

}


function render(data) {

    const jsonData = JSON.parse(data);
    const productElement =document.createElement("p")
    let html = '';
    let productHTML ='';
    jsonData.map(product => {
       productHTML = `
        <ul>
       <li>Name: ${product.name}</li>
       <li>Price:${product.price}</li>
       <li>Info: ${product.description}</li>
       </ul>
       `
        html += productHTML
    })

    productElement.innerHTML=html;
    document.getElementById('top').appendChild(productElement);

}


ajax(
    'https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function (response) {
        render(response);
    }
)
