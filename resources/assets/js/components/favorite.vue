<template>
    <div class="container">
        
<div class="pages">
    <div data-page="shop" class="page no-toolbar no-navbar">
      <div class="page-content">
      
            <h2 class="page_title">FAVORITE FOOD</h2>
            
            <div id="pages_maincontent">
             
             <br>
                 <nav aria-label="breadcrumb ">
                         <ol class="breadcrumb">
                           <li class="breadcrumb-item"><router-link to='/'>Home</router-link></li>
                           <li class="breadcrumb-item active" aria-current="page">Favorite</li>
                         </ol>
                       </nav>
        
      <div class="page_single layout_fullwidth_padding">
        
        <ul class="shop_items">
        
            <li>
            <div class="shop_thumb"><a href="shop.html"><img src="images/photos/photo1.jpg" alt="" title="" /></a></div>
            <div class="shop_item_details">
            <h4><a href="shop.html">Blue Bike</a></h4>
            <div class="shop_item_price">$100</div>
              <div class="item_qnty_shop">
                  <form id="myform" method="POST" action="#">
                      <input type="button" value="-" class="qntyminusshop" field="quantity" />
                      <input type="text" name="quantity" value="1" class="qntyshop" />
                      <input type="button" value="+" class="qntyplusshop" field="quantity" />
                  </form>
              </div>
            <a href="cart.html" id="addtocart">ADD TO CART</a>
            </div>
            </li> 
            
            <li>
            <div class="shop_thumb"><a href="shop.html"><img src="images/photos/photo2.jpg" alt="" title="" /></a></div>
            <div class="shop_item_details">
            <h4><a href="shop.html">Yellow Car</a></h4>
            <div class="shop_item_price">$1200</div>
              <div class="item_qnty_shop">
                  <form id="myform" method="POST" action="#">
                      <input type="button" value="-" class="qntyminusshop" field="quantity2" />
                      <input type="text" name="quantity2" value="1" class="qntyshop" />
                      <input type="button" value="+" class="qntyplusshop" field="quantity2" />
                  </form>
              </div>
            <a href="cart.html" id="addtocart">ADD TO CART</a>
            </div>
            </li>
            
            <li>
            <div class="shop_thumb"><a href="shop.html"><img src="images/photos/photo3.jpg" alt="" title="" /></a></div>
            <div class="shop_item_details">
            <h4><a href="shop.html">Summer T-Shirt</a></h4>
            <div class="shop_item_price">$1200</div>
              <div class="item_qnty_shop">
                  <form id="myform" method="POST" action="#">
                      <input type="button" value="-" class="qntyminusshop" field="quantity3" />
                      <input type="text" name="quantity3" value="1" class="qntyshop" />
                      <input type="button" value="+" class="qntyplusshop" field="quantity3" />
                  </form>
              </div>
            <a href="cart.html" id="addtocart">ADD TO CART</a>
            </div>
            </li>   
            
            
        </ul>
        
        <div class="signup_bottom">
          <router-link to="/cart">VIEW TABLE</router-link>
      </div>
        
        </div>
        
        </div>
        
        
      </div>
    </div>
  </div>
     
    </div>
</template>

<script>
    export default {

        data(){
            return {

            }
        },

        methods: {
/*
            this.$validator.validateAll().then(() => {
           
           if (!this.errors.any()) {
            //
            }else{
            //
            }
         
                    //
            })
            .catch(err=>{
                
            }),
      
         setTimeout(func=>{
             //this.errors.clear()
            // this.$validator.reset()
         },1) 
        
         }); //validator
*/
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
