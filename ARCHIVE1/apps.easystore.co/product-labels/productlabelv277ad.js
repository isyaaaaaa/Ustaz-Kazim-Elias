

        var els = document.getElementsByClassName("prodlabelv2-badge");

        if(els) initProductAppLabels()


        // Fix DOM appended product
        var productLabelToObserve = document.querySelector("body");
        if(productLabelToObserve){
          const productLabelMutationObserver = new MutationObserver(()=>{ initProductAppLabels() });
          productLabelMutationObserver.observe(productLabelToObserve, {subtree: true, childList: true});
        }

        function initProductAppLabels(){
          Array.prototype.forEach.call(els, function(el) {
            let label = el, appended = false

            // Initial move label
            if(label.classList.contains("hide")){
              for ( ; el && el !== document; el = el.parentNode ) {
                for (let i = 0; i < el.parentNode.children.length; i++) {
                  let parent_children = el.parentNode.children[i]

                  // Find parent if contian target class or id
                  if(parent_children.classList.contains('grid-link__image--product') || parent_children.id == 'ProductPhoto' || parent_children.classList.contains('slider-component')){

                    // Move label & remove hide class
                    label.classList.remove("hide")
                    parent_children.appendChild(label)

                    // Hide SF original sale label
                    for (let x = 0; x < parent_children.children.length; x++) {
                      if(parent_children.children[x].classList.contains('badge--sale')){
                        parent_children.children[x].classList.add("hide");
                        break;
                      }

                      // For new theme
                      if(parent_children.children[x].classList.contains('card__inner')){
                        for (let y = 0; y < parent_children.children[x].children.length; y++) {
                          if(parent_children.children[x].children[y].classList.contains('card__badge-on_sale')){
                              parent_children.children[x].children[y].classList.add("hide");
                              break;
                          }
                        }
                      }
                    }

                    appended = true
                    break;
                  }
                }
                if(appended) break;
              }
            }
          });
        }
