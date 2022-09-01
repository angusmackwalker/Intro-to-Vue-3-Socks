const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2334, color:'green'},
                {id:2335, color:'blue'},
            ],
            sizes:['small', 'medium', 'large']

        }
    }
})
