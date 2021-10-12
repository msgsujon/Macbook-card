// memory card function
function memory(memoryValue){
    if(memoryValue == true) {
         // memory 8GB
        document.getElementById('memory-card').innerText = 0;
    }else{
        // meomry 16GB
       document.getElementById('memory-card').innerText = 180;
    }
    total();
};

// storage ssd function
function storage(storageValue){
    if(storageValue == true) {
        // 256gb ssd storage 
        document.getElementById('storage-ssd').innerText = 0;
    }
    else if(storageValue == false) {
        // 512gb ssd storage
        document.getElementById('storage-ssd').innerText = 100;
    }
    else if(storageValue == '1TB') {
        // 1TB ssd storage
        document.getElementById('storage-ssd').innerText = 180;
    }
    total();
};

// delivery charge function
function deliveryCharge(charge){
    if(charge == true) {
        document.getElementById('delivery-cost').innerText = 0;
    }else {
        document.getElementById('delivery-cost').innerText = 20;
    }
    total();  
};
// calculation function 
function total(){
    const memoryCost = document.getElementById('memory-card');
    const memoryCostText = parseInt(memoryCost.innerText);
    const storageCost = document.getElementById('storage-ssd');
    const storageCostText = parseInt(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = parseInt(deliveryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceAmount = parseInt(totalPrice.innerText);
    const totalMacbookPrice = memoryCostText + storageCostText + deliveryCostText + totalPriceAmount;
    document.getElementById('total-price').innerText = totalMacbookPrice;
    document.getElementById('total-discount').innerText = totalMacbookPrice;
    return totalMacbookPrice;
};

// memory handler
document.getElementById('memory-8GB').addEventListener('click',function(){
    memory(true);
});
document.getElementById('memory-16GB').addEventListener('click',function(){
    memory(false);
});


// storage handler
document.getElementById('ssd-256GB').addEventListener('click',function(){
    storage(true);
});
document.getElementById('ssd-512GB').addEventListener('click',function(){
    storage(false);
});
document.getElementById('ssd-1TB').addEventListener('click',function(){
    storage('1TB');
});

// delivery charge handler
document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge(true);
});
document.getElementById('delivery-charge').addEventListener('click',function(){
    deliveryCharge(false);
});

// coupon handler
document.getElementById('token-btn').addEventListener('click',function(){
    const totalMacPrice = document.getElementById('total-price');
    const totalMacAmount = parseInt(totalMacPrice.innerText);
    const token = document.getElementById('token-input');
    const tokenText = token.value;
    if(tokenText == "stevekaku"){
        const discount = totalMacAmount*.80
        document.getElementById('total-discount').innerText = discount;
        token.value = '';
    }
});
