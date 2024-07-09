if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cartNotification = document.querySelector('cart-notification');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      this.cartNotification.setActiveElement(document.activeElement);

      const submitButton = this.querySelector('[type="submit"]');

      submitButton.setAttribute('disabled', true);
      submitButton.classList.add('loading');

      const body = JSON.parse(serializeForm(this.form));

      EasyStore.Action.addToCart(body,(cart)=>{
        this.hideErrorMsg()

        if(cart.item_count != undefined && cart.latest_items != undefined) this.cartNotification.renderContents(cart);
        if(cart.description != undefined) this.renderErrorMsg(cart.description);
        
        console.log('addToCart',cart);
        submitButton.classList.remove('loading');
        submitButton.removeAttribute('disabled');
      })

    }

    renderErrorMsg(html){
      this.form.querySelector('.form__message').classList.remove('hidden')
      this.form.querySelector('.js-error-content').innerHTML = html
    }

    hideErrorMsg(){
      this.form.querySelector('.form__message').classList.add('hidden')
    }

  });
}
