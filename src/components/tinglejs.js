// import React, { Component, createRef } from "react";
// import tingle from "tingle.js";

// class Tingle extends Component {
//   constructor(props) {
//     super(props);
//     this.modalStickyFooter = createRef();
//     this.btn4 = createRef();
//   }
//   modalStickyFooter = React.useRef(
//     new tingle.modal({
//       footer: true,
//       stickyFooter: true,
//     })
//   );
//   btn4 = React.useRef(document.getElementsByClassName("js-tingle-modal-4"));


//   // React.useEffect(() => {
//   //   // modalStickyFooter = new tingle.modal({
//   //   //   footer: true,
//   //   //   stickyFooter: true,
//   //   // });
//   //   btn4[0].addEventListener("click", function () {
//   //     modalStickyFooter.open();
//   //   });
//   //   this.modalStickyFooter.addFooterBtn(
//   //     "I agree",
//   //     "tingle-btn tingle-btn--primary tingle-btn--pull-right",
//   //     function () {
//   //       modalStickyFooter.close();
//   //     }
//   //   );

//   //   this.modalStickyFooter.addFooterBtn(
//   //     "Cancel",
//   //     "tingle-btn tingle-btn--default tingle-btn--pull-right",
//   //     function () {
//   //       modalStickyFooter.close();
//   //     }
//   //   );

//   //   this.modalStickyFooter.setContent(
//   //     document.querySelector(".tingle-demo-sticky").innerHTML
//   //   );
//   // }, []);
//   render() {
//     return (
//       <div>
//         <div class="tingle-demo tingle-demo-sticky">
//           <h1>Terms of use</h1>
//           <h2>Boring first article</h2>
//           <p>
//             Sed posuere consectetur est at lobortis. Curabitur blandit tempus
//             porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.
//             Donec id elit non mi porta gravida at eget metus. Maecenas faucibus
//             mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor
//             mauris condimentum nibh, ut fermentum massa justo sit amet risus.
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
//           </p>
//           <h2>Boring second article</h2>
//           <p>
//             Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
//             porta ac consectetur ac, vestibulum at eros. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur
//             purus sit amet fermentum. Vestibulum id ligula porta felis euismod
//             semper. Cras mattis consectetur purus sit amet fermentum. Nulla
//             vitae elit libero, a pharetra augue.
//           </p>
//           <h2>Boring third article</h2>
//           <p>
//             Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus
//             commodo, tortor mauris condimentum nibh, ut fermentum massa justo
//             sit amet risus. Cras mattis consectetur purus sit amet fermentum.
//             Vestibulum id ligula porta felis euismod semper. Integer posuere
//             erat a ante venenatis dapibus posuere velit aliquet.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
//             consectetur est at lobortis. Donec id elit non mi porta gravida at
//             eget metus. Curabitur blandit tempus porttitor. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla
//             non metus auctor fringilla. Vestibulum id ligula porta felis euismod
//             semper.
//           </p>

//           <p>
//             Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus
//             commodo, tortor mauris condimentum nibh, ut fermentum massa justo
//             sit amet risus. Cras mattis consectetur purus sit amet fermentum.
//             Vestibulum id ligula porta felis euismod semper. Integer posuere
//             erat a ante venenatis dapibus posuere velit aliquet.
//           </p>

//           <h2>Boring fourth article</h2>
//           <p>
//             Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus
//             commodo, tortor mauris condimentum nibh, ut fermentum massa justo
//             sit amet risus. Cras mattis consectetur purus sit amet fermentum.
//             Vestibulum id ligula porta felis euismod semper. Integer posuere
//             erat a ante venenatis dapibus posuere velit aliquet.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
//             consectetur est at lobortis. Donec id elit non mi porta gravida at
//             eget metus. Curabitur blandit tempus porttitor. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla
//             non metus auctor fringilla. Vestibulum id ligula porta felis euismod
//             semper.
//           </p>
//           <h2>Boring fifth article</h2>
//           <p>
//             Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus
//             commodo, tortor mauris condimentum nibh, ut fermentum massa justo
//             sit amet risus. Cras mattis consectetur purus sit amet fermentum.
//             Vestibulum id ligula porta felis euismod semper. Integer posuere
//             erat a ante venenatis dapibus posuere velit aliquet.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
//             consectetur est at lobortis. Donec id elit non mi porta gravida at
//             eget metus. Curabitur blandit tempus porttitor. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla
//             non metus auctor fringilla. Vestibulum id ligula porta felis euismod
//             semper.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Tingle;
