import useCartStore from "../store"; // Assuming ../store.ts has the updated actions
import { FiEdit, FiTrash2, FiPlus, FiMinus, FiShoppingCart, FiMapPin, FiCreditCard } from "react-icons/fi"; // Added more icons for aesthetics
import { useState } from "react";

const Cart = () => {
  // Destructure all necessary actions from your store
  const { cart, removeFromCart} =
    useCartStore();

  const [currentStep, setCurrentStep] = useState(1); // State for current checkout step

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate VAT (assuming 5% for example)
  const vatRate = 0.05;
  const vatAmount = totalPrice * vatRate;

  // Calculate discount (assuming 3% off for example)
  const discountRate = 0.03;
  const discountAmount = totalPrice * discountRate;

  // Final total including VAT and discount, assuming free delivery
  const finalTotal = totalPrice + vatAmount - discountAmount;

  // Simulate proceeding to the next step
  const handleProceedToCheckout = () => {
    if (cart.length === 0 && currentStep === 1) {
      alert("Your cart is empty! Please add items before proceeding.");
      return;
    }
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // In a real app, this would trigger actual payment processing
      alert("Simulating final payment! Thank you for your order.");
      // You might want to clear the cart here: useCartStore.getState().clearCart();
      // Or navigate to an order confirmation page.
      // navigate('/order-confirmation');
    }
  };

  // Tailwind CSS classes for the lime, white, and black theme
  const theme = {
    bg: "bg-black", // Main background
    cardBg: "bg-gray-900", // Card backgrounds
    borderColor: "border-lime-600", // Borders for important elements
    textColor: "text-white", // Default text color
    primary: "text-lime-400", // Primary accent color (lime)
    primaryBg: "bg-lime-600", // Primary button/accent background
    primaryHoverBg: "hover:bg-lime-700", // Primary button hover
    secondaryText: "text-gray-400", // Secondary text color
    buttonText: "text-gray-900", // Text on primary buttons
    danger: "text-red-500", // Danger color (for remove)
    success: "text-green-400", // Success color (for free/discount)
    inputBg: "bg-gray-800", // Input field background
    inputBorder: "border-gray-700", // Input field border
    hrColor: "border-gray-700", // Horizontal rule color
  };

  return (
    <div className={`min-h-screen w-screen mt-14 p-6 ${theme.bg} ${theme.textColor}`}>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-gray-800">
        <h1 className="text-4xl font-extrabold text-white mb-2 sm:mb-0">
          Your Shopping Cart
        </h1>
        <span className={`${theme.primary} font-semibold text-lg`}>
          (Step {currentStep} of 3)
        </span>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-4 mb-10">
        {[
          { step: 1, name: "Cart", icon: <FiShoppingCart size={20} /> },
          { step: 2, name: "Address", icon: <FiMapPin size={20} /> },
          { step: 3, name: "Payment", icon: <FiCreditCard size={20} /> },
        ].map((stepInfo) => (
          <div key={stepInfo.step} className="flex items-center gap-2">
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                currentStep >= stepInfo.step
                  ? `${theme.primaryBg} ${theme.buttonText} shadow-lg`
                  : `${theme.cardBg} ${theme.secondaryText} border ${theme.inputBorder}`
              }`}
              title={stepInfo.name}
            >
              {stepInfo.icon}
            </span>
            <span
              className={`text-lg font-medium hidden sm:inline-block transition-colors duration-300 ${
                currentStep >= stepInfo.step ? theme.primary : theme.secondaryText
              }`}
            >
              {stepInfo.name}
            </span>
            {stepInfo.step < 3 && (
              <div className={`w-16 h-[3px] ${theme.hrColor} rounded-full hidden sm:block`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Cart Header / Item Count */}
      <div
        className={`flex justify-between items-center ${theme.cardBg} p-5 rounded-xl shadow-xl mb-8 ${theme.borderColor} border-2`}
      >
        <h2 className="font-bold text-2xl text-white">Your Items</h2>
        <span className={`${theme.primaryBg} text-white px-5 py-2 text-base rounded-full font-medium shadow-md`}>
          {cart.length} items
        </span>
      </div>

      {/* Conditional Rendering based on Cart Status */}
      {cart.length === 0 && currentStep === 1 ? (
        <p className={`text-center ${theme.secondaryText} text-xl mt-16 p-4 rounded-lg border ${theme.inputBorder}`}>
          Your cart is currently empty. <span className={theme.primary}>Start shopping</span> to add items!
        </p>
      ) : (
        <>
          {/* Step 1: Cart Items List */}
          {currentStep === 1 && (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center ${theme.cardBg} p-6 rounded-xl shadow-lg border-2 ${theme.borderColor} hover:border-lime-500 transition-all duration-300 ease-in-out`}
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-8 shadow-md border border-gray-700"
                  />

                  {/* Product Details & Actions */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className={`${theme.secondaryText} text-base mb-4`}>
                      ${item.price.toFixed(2)} - Size: L - Color: Black
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
                      {/* Quantity Controls */}
                      <div className={`flex items-center ${theme.inputBg} rounded-lg px-3 py-1.5 shadow-inner`}>
                        <button
                          onClick={() => (item.id)}
                          className={`${theme.primary} ${theme.primaryHoverBg.replace('hover:', '')} p-1.5 rounded-full hover:bg-opacity-20 transition-colors`}
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={20} />
                        </button>
                        <span className="text-white font-semibold mx-4 text-lg">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => (item.id)}
                          className={`${theme.primary} ${theme.primaryHoverBg.replace('hover:', '')} p-1.5 rounded-full hover:bg-opacity-20 transition-colors`}
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={20} />
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <button className={`flex items-center gap-2 ${theme.secondaryText} hover:${theme.primary} transition-colors px-4 py-2 rounded-lg`}>
                        <FiEdit size={20} />
                        Edit
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={`flex items-center gap-2 ${theme.danger} hover:text-red-400 transition-colors px-4 py-2 rounded-lg`}
                      >
                        <FiTrash2 size={20} />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Individual Item Total */}
                  <div className="mt-6 md:mt-0 md:ml-8 text-right flex-shrink-0">
                    <span className="text-white text-2xl font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Delivery Address Form */}
          {currentStep === 2 && (
            <div className={`${theme.cardBg} p-8 rounded-xl shadow-xl border-2 ${theme.borderColor}`}>
              <h3 className="text-3xl font-bold text-white mb-6">Delivery Address</h3>
              <p className={`${theme.secondaryText} mb-6`}>
                Please provide your delivery details below.
              </p>
              <form className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-400 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                    placeholder="123 Main St"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                      placeholder="Anytown"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-400 mb-1">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                      placeholder="12345"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-400 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                    placeholder="USA"
                  />
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Payment Information Form */}
          {currentStep === 3 && (
            <div className={`${theme.cardBg} p-8 rounded-xl shadow-xl border-2 ${theme.borderColor}`}>
              <h3 className="text-3xl font-bold text-white mb-6">Payment Information</h3>
              <p className={`${theme.secondaryText} mb-6`}>
                Select your preferred payment method and enter details.
              </p>
              <div className="space-y-4">
                <div className={`flex items-center ${theme.inputBg} p-4 rounded-md border ${theme.inputBorder}`}>
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    className={`form-radio ${theme.primary} h-5 w-5`}
                    defaultChecked // Default select
                  />
                  <label htmlFor="creditCard" className="ml-4 text-xl font-medium text-white">
                    Credit Card
                  </label>
                </div>
                <div className={`flex items-center ${theme.inputBg} p-4 rounded-md border ${theme.inputBorder}`}>
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    className={`form-radio ${theme.primary} h-5 w-5`}
                  />
                  <label htmlFor="paypal" className="ml-4 text-xl font-medium text-white">
                    PayPal
                  </label>
                </div>
                <div className={`flex items-center ${theme.inputBg} p-4 rounded-md border ${theme.inputBorder}`}>
                  <input
                    type="radio"
                    id="bankTransfer"
                    name="paymentMethod"
                    value="bankTransfer"
                    className={`form-radio ${theme.primary} h-5 w-5`}
                  />
                  <label htmlFor="bankTransfer" className="ml-4 text-xl font-medium text-white">
                    Bank Transfer
                  </label>
                </div>
              </div>
              <div className="mt-8 space-y-5">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-400 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                    placeholder="**** **** **** ****"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-400 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-400 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className={`mt-1 block w-full rounded-md ${theme.inputBg} ${theme.inputBorder} border p-3 text-white focus:ring-lime-500 focus:border-lime-500 transition-colors`}
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Price Summary (Always Visible) --- */}
          <div className={`mt-10 ${theme.cardBg} p-8 rounded-xl shadow-xl border-2 ${theme.borderColor}`}>
            <h3 className="text-3xl font-bold text-white mb-6">Order Summary</h3>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center text-white">
                <span>Items Total ({cart.length} items):</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300 text-base">
                <span>Value Added Tax (VAT):</span>
                <span>${vatAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300 text-base">
                <span>Delivery Charge:</span>
                <span className={theme.success}>Free</span>
              </div>
              <div className="flex justify-between items-center text-gray-300 text-base">
                <span>Discount:</span>
                <span className={theme.success}>-${discountAmount.toFixed(2)} (-3%)</span>
              </div>
            </div>
            <hr className={`my-7 ${theme.hrColor}`} />
            <div className="flex justify-between items-center text-3xl font-extrabold text-white">
              <span>Total:</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* --- Continue Button --- */}
          <button
            onClick={handleProceedToCheckout}
            className={`mt-10 w-full text-2xl  bg-amber-50 font-bold py-5 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-103 focus:outline-none focus:ring-4 focus:ring-lime-500 focus:ring-opacity-50`}
          >
            {currentStep < 3 ? "Proceed to Checkout" : "Confirm Payment"}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;