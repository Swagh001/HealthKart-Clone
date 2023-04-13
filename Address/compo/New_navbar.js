export default function nav_bar(){
    return`<div id="navbar-container">
                <div id="navbar-container-1">
                    <img src="Logo.png" alt="">
                </div>
                <div id="navbar-container-2">
                    <div class="header-process-steps">
                        <div class="col_steps">
                            <img class="tick-icon" id="cart-icon" alt="tick" src="https://static1.hkrtcdn.com/hknext/static/media/checkout/fill-blue.svg">
                            <div class="header-cart-heading">Cart</div>
                            <div class="blue-horizontal-rule"> </div>
                        </div>
                        <div id="line"></div>
                        <div class="col_steps">
                            <img class="tick-icon" id="Address-icon" alt="tick" src="https://static1.hkrtcdn.com/hknext/static/media/checkout/blue-address.svg">
                            <div class="header-cart-heading">Address</div>
                            <div class="horizontal-rule"> </div>
                        </div>
                        <div class="col_steps">
                            <img class="tick-icon" id="Payment-icon" alt="tick" src="https://static1.hkrtcdn.com/hknext/static/media/checkout/grey-payment.svg">
                            <div class="header-cart-grey-heading">Payment</div>
                        </div>
                    </div>
                </div>
            </div>`;
}
// export default nav_bar;