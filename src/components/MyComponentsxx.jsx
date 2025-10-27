import React, {useState} from 'react'

// onchange = event handler that is used primarily with form elements
// e.g <input>, <textarea>, <select>, <radio>.
// onchange triggers every time the value of the input changes

const MyComponentsxx = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

  return (
    <>
        <input value={name} onChange={handleNameChange} name="" id="" />
        <p>name: {name} </p>

        <input value={quantity} onChange={handleQuantityChange} type='number' name="" id="" />
        <p>quantity: {quantity} </p>

        <textarea value={comment} onChange={handleCommentChange} name="" id="" placeholder='delivery instructions'></textarea>
        <p>comment: {comment}</p>

        <select value={payment} name="" onChange={handlePaymentChange} id="">
            <option value="">selet an option</option>
            <option value="visa">visa</option>
            <option value="mastercard">mastercard</option>
            <option value="giftcard">giftcard</option>
        </select>
        <p> payment: {payment}</p>

        <label htmlFor="">
        <input value="pick up" type="radio" checked={shipping === "pick-up"} 
            onChange={handleShippingChange}
         />
         pick up
         </label> <br />
        <label htmlFor="">
        <input value="delivery" type="radio" checked={shipping === "delivery"} 
            onChange={handleShippingChange}
         />
        delivery
         </label> 

         <p>shipping {shipping}</p>
        
    </>
  )
}

export default MyComponentsxx
