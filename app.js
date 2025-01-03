const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 =document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
    search1.style.display='flex';
    searchicon1.style.display='none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 =document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
    search2.style.display='flex';
    searchicon2.style.display='none';
})

const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#hdcross');
const headerbar=document.querySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display= 'block';
    },200);
    headerbar.style.right='0%';
})

cross.addEventListener('click', function(){
    cross.style.display='none';
    headerbar.style.right ='-100%';
})





document.addEventListener('DOMContentLoaded', () => {
    let cart = []; 
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout-btn');
    const paymentModal = document.getElementById('payment-modal');
    const closeModalButton = document.querySelector('.close-btn');
    const paymentForm = document.getElementById('payment-form');
    
   
    function updateCart() {
        cartItemsContainer.innerHTML = ''; 
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>No items in cart</p>';
        } else {
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>
                                         <button class="remove-from-cart" data-index="${index}">Remove</button>`;
                cartItemsContainer.appendChild(itemElement);
            });
        }
        const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
        totalElement.innerHTML = `Total: $${total}`;
    }


    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = button.dataset.price;
            cart.push({ name, price }); 
            updateCart(); 
        });
    });

  
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.dataset.index;
            cart.splice(index, 1); 
            updateCart(); 
        }
    });


    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            paymentModal.style.display = 'block'; 
        }
    });

    closeModalButton.addEventListener('click', () => {
        paymentModal.style.display = 'none'; 
    });

    paymentForm.addEventListener('submit', (event) => {
        alert('Payment Successful!'); 
        cart = []; 
        updateCart(); 
        paymentModal.style.display = 'none'; 
    });
});

