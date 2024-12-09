document.addEventListener('alpine:init', () => {

    Alpine.data('product', () => ({

        items: [
            {id: 1, name: 'IPHONE 16', img: '1.jpg', proce: 27.999.000},
            {id: 1, name: 'IPHONE 15', img: '2.jpg', proce: 14.999.000},
            {id: 1, name: 'IPHONE 16 PRO', img: '3.jpg', proce: 23.999.000},
            {id: 1, name: 'IPAD AIR', img: '4.jpg', proce: 15.499.000},
            {id: 1, name: 'AIRPODS PRO', img: '5.jpg', proce: 3.599.000},
            {id: 1, name: 'APPLE WATCH SERIES 10', img: '6.jpg', proce: 7.149.000},
            {id: 1, name: 'IPHONE XR', img: '7.jpg', proce: 5.300.000},
            {id: 1, name: 'MACBOOK PRO', img: '8.jpg', proce: 33.499.000},
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total harga: 0,
        quantity: 0,
        add(newItem) {
            this.item.push(newItem);
            console.log(this.item);
        }
    })
});