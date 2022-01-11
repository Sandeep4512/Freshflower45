

let shippingInfo={
    userName:'',
    address :'',
    contact:'',
    city:'',
    postalcode:'',
    country:''
}

function validate(e){
    let name=e.name;
    let value=e.value;
    if(name=="userName"){
       shippingInfo.userName=value;
    }
    if(name=="address"){
       shippingInfo.address=value;
    }
    if(name=="contact"){
      shippingInfo.contact=value;
    }
     if(name=="city"){
      shippingInfo.city=value;
    }
    if(name=="postalcode"){
     shippingInfo.postalcode=value;
    }
    if(name=="country"){
     shippingInfo.country=value;
   }
 }

   function handlesubmit(){
   
  localStorage.setItem("shippingInfo",JSON.stringify( shippingInfo));
  console.log(shippingInfo);
  const user=JSON.parse(localStorage.getItem("userInfo"))
  location.href=`/order/${user.token}`;
  
     return false
    }