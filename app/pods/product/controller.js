import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    usered:false,
    checked: true,
    id: '',
    productName: '',
    description: '',
    price: '',
    type: '',

    products: [
        { id: 1, productName: 'Samsung', description: 'black, 6GB RAM', price: 400, type: 'Mobile' },
        { id: 2, productName: 'Jeans', description: 'Blue,Cotton', price: 300, type: 'Apparel' },
        { id: 3, productName: 'LG', description: 'Red, Single door', price: 400, type: 'Refrigerator' },
        { id: 4, productName: 'Fastrack', description: 'Black, WaterProof', price: 350, type: 'Watch' },
        { id: 5, productName: 'T-shirt', description: 'White, Slim fit', price: 400, type: 'Apparel' },
    ],

    actions: {
        delete(index) {    
            const productDetails = this.get('products');
            productDetails.removeAt(index)
            console.log(productDetails)
            this.set('products', productDetails);
        },

        changeColor : function(index){
            const productDetails = this.get('products');
            // productDetails.removeAt(index)

        	this.toggleProperty("usered", index);
            this.set('products', productDetails);

      }
    }

});
