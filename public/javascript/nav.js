

class  NavBar{

    createNavBar(imgUrl,brandName,userInfo,length){
        return `   <div class="nav">
        <div class="brand">
            <a href="/products">
                <img  src=${imgUrl}  />
            </a>
            <a href="/products">
                <h3>
                    ${brandName}
                </h3>
            </a>
        </div>
        <div class="menu-items">
             ${
                 length==0?`<a href="/cart">Basket</a>`:
                 `<a href="/cart">Basket
                    <span class="banner">${length}</span>
                 </a>`
             }
            ${
                userInfo?`
                <div class="dropdown">
                   <button class="dropbtn">${userInfo.name}</button>
                   <div class="dropdown-content">
                     <a href="#">Profile</a>
                     <a href="#">Orders</a>
                     <a href="#" onclick="logout()">Logout</a>
                   </div>
                </div>
                `:
                ` <a href="/signin">SignIn</a>`
             }
        </div>
    </div>`;

    }
}

const user=localStorage.getItem("userInfo")?
JSON.parse(localStorage.getItem("userInfo"))
:null;

const cartItems=localStorage.getItem("cartItems")?
JSON.parse(localStorage.getItem("cartItems"))
:[];

const navBar=new NavBar();
const imgUrl = "/images/freshflower.png";
const brandName = "FreshFlower";
const navHolder=document.createElement('div');
      navHolder.innerHTML=navBar.createNavBar(imgUrl,brandName,user,cartItems.length);
      document.body.appendChild(navHolder);

function logout(){
   localStorage.clear();
   location.href='/signin';
}

function facebokk(){
    alert("comming soon");
}
function insta(){
    alert("comming soon");
}
function twiter(){
    alert("comming soon");
}



      

