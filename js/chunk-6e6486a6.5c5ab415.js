(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6486a6"],{"54c6":function(t,s,a){"use strict";function r(t){return(new Intl.NumberFormat).format(t)}a.d(s,"a",(function(){return r}))},"64a8":function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",{staticClass:"content container"},[a("div",{staticClass:"content__top"},[a("h1",{staticClass:"content__title"},[t._v(" Заказ оформлен "),a("span",[t._v("№ "+t._s(t.order.id))])])]),a("section",{staticClass:"cart"},[a("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[a("div",{staticClass:"cart__field"},[a("p",{staticClass:"cart__message"},[t._v(" Благодарим за выбор нашего магазина. На Вашу почту придет письмо с деталями заказа. Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки. ")]),a("ul",{staticClass:"dictionary"},[a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Получатель ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.name)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Адрес доставки ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.address)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Телефон ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.phone)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Email ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.email)+" ")])])])]),a("div",{staticClass:"cart__block"},[a("ul",{staticClass:"cart__orders"},t._l(t.order.basket.items,(function(s,r){return a("li",{key:r,staticClass:"cart__order"},[a("h3",[t._v(t._s(s.product.title))]),a("b",[t._v(t._s(t._f("numberFormat")(s.product.price))+" ₽")]),a("span",[t._v("Артикул: "+t._s(s.product.id))])])})),0),a("div",{staticClass:"cart__total"},[a("p",[t._v("Итого: "),a("b",[t._v(t._s(t.order.basket.items.length))]),t._v(" товара на сумму "),a("b",[t._v(t._s(t._f("numberFormat")(t.order.totalPrice))+" ₽")])])])])])])])},i=[],e=a("5530"),c=a("2f62"),o=a("54c6"),n={name:"OrderInfoPage",created:function(){this.$store.state.orderInfo&&this.$store.state.orderInfo.id===this.$route.params.id||this.$store.dispatch("loadOrderInfo",this.$route.params.id)},filters:{numberFormat:o["a"]},computed:Object(e["a"])({order:function(){return this.$store.state.orderInfo}},Object(c["c"])({products:"cartDetailProducts",totalPrice:"cartTotalPrice"}))},_=n,l=a("2877"),d=Object(l["a"])(_,r,i,!1,null,"2413c90e",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6e6486a6.5c5ab415.js.map