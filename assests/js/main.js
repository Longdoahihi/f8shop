// get data 
var infoProducts = [];
var linkAPI = "https://610bb4562b6add0017cb3a1f.mockapi.io/api/long/longpr";

function handleProduct(linkAPI){
    getData(renderProducts);
    
}

// function

function getData(callback){
    fetch(linkAPI,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function(response){
            return response.json();
        })
        .then(callback)
        .catch(function(err){
            console.log("Error  !!!" + err);
        })
}
  
// var Products = [
//     {
//         "id": 1,
//         "url": "./assests/Image/product1.jpg",
//         "title": "Trâm cài tóc đơn giản thanh lịch / Gim tóc mái KT13",
//         "newPrice": "6.800",
//         "oldPrice": "7.900",
//         "percent": 10,
//         "star": 5,
//         "sold": "99",
//         "origin": "Hà Nội"
//        },
//        {
//         "id": 2,
//         "url": "./assests/Image/product2.jpg",
//         "title": "Băng Đô Cài Tóc Đính Ngọc Trai Đơn Giản Phong Cách Hàn Quốc",
//         "newPrice": "12.000",
//         "oldPrice": "24.000",
//         "percent": 10,
//         "star": 5,
//         "sold": "2.8k",
//         "origin": "Nước ngoài"
//        }
// ]

function renderProducts(data){
    var listProduct = document.querySelector(".productRender");
    var totalProduct = 20;
    for (var i=0;i<=totalProduct-1;i++){
        var idProduct = Math.floor(Math.random() * 10);
        console.log(idProduct);
        
        document.querySelector(".productRender").innerHTML += `
        <div class="grid__column-2-4">
            <a class="home-product-item" href="#">
                <div class="home-product-item__img" style="background-image: url(${data[idProduct].url});"></div>
                <img class="home-product-item__day" src="./assests/Image/day.png" alt="aaa" />
                <div class="home-product-item__desciption">
                    <p class="home-product-item__name">${data[idProduct].title}</p>
                    <div class="home-product-item__btn">Mua dể nhận quà</div>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price--old price"><span href="">đ</span>${data[idProduct].oldPrice}</span>
                        <span class="home-product-item__price--new price"><span href="">đ</span>${data[idProduct].newPrice}</span>
                    </div>
                    <div class="home-product-item__action">
                        <div class="home-product-item__action--like">
                            <i class="far fa-heart"></i>
                            <!-- <i class="fas fa-heart"></i>  -->
                        </div>

                        <div class="home-product-item__action--rating">
                            <i class="fas fa-star star--yellow"></i>
                            <i class="fas fa-star star--yellow"></i>
                            <i class="fas fa-star star--yellow"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>

                        <div class="home-product-item__action--sold">
                            Đã bán ${data[idProduct].sold}
                        </div>
                    </div>
                    <div class="home-product-item__access">
                        <div class="home-product-item__access-name">
                            ${data[idProduct].origin}
                        </div>
                    </div>
                    <div class="home-product-item__favourite">
                        <span>Yêu thích+</span>
                    </div>
                    <div class="home-product-item__safe-off">
                        <div class="home-product-item__safe-off-percent">${data[idProduct].percent}</div>
                        <div class="home-product-item__safe-off-label">GIẢM</div>
                    </div>
                </div> 
            </a>
        </div>
        `
    }
}

//render data
handleProduct(linkAPI);   
