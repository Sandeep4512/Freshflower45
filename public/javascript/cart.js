
    let totalAmount=0;
    const itemInCart=localStorage.getItem("cartItems")?
    JSON.parse(localStorage.getItem("cartItems"))
    :[];
   
    function createcartItem(item){
        return `<img width="80px" height="80px" src=${item.img} />
                <a href="#">${item.name}</a>
                <span> &#8377;${item.price} X ${item.selectedQty}</span>
                <button id=${item._id} onclick="deleteItem(this)">Delete</button>`;
    }
     
     itemInCart.forEach(function(item){
           const cartItemHolder=document.createElement('div');
           cartItemHolder.className="cartItem";
           cartItemHolder.innerHTML=createcartItem(item);
           const col2=document.querySelector(".col2");
           col2.appendChild(cartItemHolder);  
     });

    function deleteItem(e){
        const filterCartItem=itemInCart.filter(function(item){
            if(item._id!=e.id){
                return item;
            }
        })
        localStorage.setItem("cartItems",JSON.stringify(filterCartItem));// updating localstorage
        location.reload();// reloading the page 
    }
    if(itemInCart.length==0){
           const msgBox=document.querySelector('.msgBox');
           msgBox.innerHTML=`
           <div class="msgStyle">
           <p style="color:red">
            Your cart is empty 
            <a href="/products">Go shopping 
            </a>
          </p>
          </div>`;
    }
   if(itemInCart.length!=0){
    itemInCart.forEach(function(item){
       totalAmount=totalAmount+(Number(item.selectedQty)*item.price);
   })
   const user=localStorage.getItem("userInfo")?
   JSON.parse(localStorage.getItem("userInfo"))
   :null;
     const action=document.querySelector('.action');
      action.innerHTML=` 
      <div class="actionStyle">
        <p> <b> SubTotal :</b>${itemInCart.length} items &#8377; ${totalAmount}</p>
            ${user?`
                <a href="/shipping/${user.token}">
                    <button> Proceed To Checkout </button>
                </a> 
                ` 
                :
                `<a href="/signin?redirect=shipping">
                    <button> Proceed To Checkout </button>
                </a> `
            }
     </div>
    `
     }
 
