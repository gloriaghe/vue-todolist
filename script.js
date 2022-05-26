var myToDoListApp = new Vue ({
    el: '#container',
    data:{
        to_do_lists : [
            {
                text: 'Comprare la spesa',
                done: true,
            },
            {
                text: 'Portare cane dal veterinario',
                done: false,
            },
            {
                text: 'Prendere bambini da scuola',
                done: true,
            },
            {
                text: 'Sistemare casa',
                done: false,
            },
            {
                text: 'Tagliare erba in giardino',
                done: false,
            }
        ],

    },
    
    methods:{
       
    }
});