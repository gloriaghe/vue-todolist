var myToDoListApp = new Vue ({
    el: '#container',
    data:{ 
        newToDo : "",
        newTD : {},
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
        deleteToDo(i){
            this.to_do_lists.splice(i,1)
        },

        createToDo(){
            class newTD {
                constructor(text, done){
                    this.text = text;
                    this.done = done;
                }
            };
            if(this.newToDo !== ""){
                // this.to_do_lists.push(this.newToDo.text)
                let nuovo = new newTD(this.newToDo, false);
                this.to_do_lists.push(nuovo);
                this.newToDo = "";
            }
        },

        changeDone (name){
           let changeD = document.getElementById(name);
           changeD.classList.toggle("line")
        },
    }
});