$(document).ready(function(e){

  var $variants = $('.variant-custom-fields');
  var $form = $('form[action="/cart/add"]');

  // Set the active variant on page load.
  setActiveVariantCustomFields($form, $variants);
  
  // Toggle display when dropdown changed in the "Add to Cart" feature.
  $form.change(function() {
      setActiveVariantCustomFields($form, $variants);
  });
  
  /**
   * Sets the active variant based on the "id" select dropdown in the add to cart form.
   */
  function setActiveVariantCustomFields($form, $variants){
    $variants.hide();
    setTimeout(function(){
      var active_variant_id = $form.find('select[name="id"]').val();
      $variants.filter('[data-variant-id="'+ active_variant_id +'"]').show();  
    }, 100);
  }
});