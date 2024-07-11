import React from 'react';


const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" required />
        </div>
        <div>
          <label>Payment Method</label>
          <select name="paymentMethod">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
