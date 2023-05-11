import './modal.css';

// 
// export default function Model() {
//   return (
//     <div className="modal-backdrop">
//         <div className="modal">
//             <h2> 10% Off Coupon Discount!!! </h2>
//             <p> Use Ab1jeet_Is_Don at checkout  </p>
//         </div>
//     </div>
//   )
// }

export default function Model( {children} ) {
  return (
    <div className="modal-backdrop">
        {children}
    </div>
  )
}
