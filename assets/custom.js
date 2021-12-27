/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 
 document.addEventListener('variant:changed', function(event) {
    function variantEtdInput(){
      let eventID = event.detail.variant.id;
      let id = 'variant_leadtime_'+ eventID;
      let variantETD = document.getElementById(id).innerHTML;
      document.getElementById('etd').value = variantETD;
      console.log(document.getElementById('etd').value);
    }
    
    setTimeout(variantEtdInput(), 1000);
    
    let newMonthly = 0;
    let newPoints = 0;
    let newPrice = event.detail.variant.price;
    newMonthly = newPrice * 0.0002125;
    let cleanPrice = newMonthly.toFixed(2);
    
    newPoints = newPrice/100;
    const cleanPoints = Math.round(newPoints);
    
    if (newPrice > 100000){
    document.getElementById('financemonthly').innerHTML = "$"+cleanPrice;
    }
    
    document.getElementById('earnpoints').innerHTML = cleanPoints;
  
  
  });
  
  /* EasyTabs custom */
  document.addEventListener("easytabs_page_inited", function(){
    if( document.querySelector('#shopify-section-header') ) easytabs.fixedHeader('#shopify-section-header');
    easytabs.findScrollableParent = function(){ return document.documentElement; }
  });
  /* EasyTabs custom */
  //HC Disabling variants on the product page 15 Apr '20
  