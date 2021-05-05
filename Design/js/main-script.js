new Vue({
    el: "#restau-pics-slider",
    data: {
        images: [
            "Design/images/restau-img-1.jpg",
            "Design/images/restau-img-2.jpg",
            "Design/images/restau-img-3.jpg",
            "Design/images/restau-img-4.jpeg",
            "Design/images/restau-img-5.jpg"
        ]
    },
    methods:{
        previous: function(){
            let el = document.getElementById("ul-slider");
            el.scrollLeft -= 50;
        },
        next: function(){
            let el = document.getElementById("ul-slider");
            el.scrollLeft += 50;
        }
    }
})

new Vue({
    el: "#menus-picker",
    data: {
        menuCategories: [
            "Burgers",
            "Desserts",
            "Drinks",
            "Pasta",
            "Pizzas",
            "Salads"
        ],
        currentTab: "Pizzas"
    },
    methods:{
        toggleTab: function(clickedMenu){
            this.currentTab = clickedMenu;
        }
    }
})

new Vue({
    el: "#appointment-form",
    data: {
        errors: [],
        full_name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    },
    methods:{
        checkForm: function(event){
            if( this.full_name && this.validEmail(this.email) && this.phone && this.date && this.message && this.time)
            {
                return true;
            }

            this.errors = [];

            if( !this.full_name)
            {
                this.errors.push("Full name is required");
                this.full_name = null;
            }
            
            if (!this.validEmail(this.email)) 
            {
                this.errors.push('Valid email required.');
                this.email = null;
            }
            
            if( !this.phone)
            {
                this.errors.push("Phone is required");
                this.phone = null;
            }

            if( !this.date)
            {
                this.errors.push("Date is required");
                this.date = null;
            }

            if( !this.time)
            {
                this.errors.push("Time is required");
                this.time = null;
            }
            
            if( !this.message)
            {
                this.errors.push("Message is required");
                this.message = null;
            }

            event.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
})

new Vue({
    el: "#gallery",
    data: {
        galleryImages : {
            'modal_0':'Design/images/gal_1.jpg',
            'modal_1':'Design/images/gal_2.jpg',
            'modal_2':'Design/images/gal_3.jpg',
            'modal_3':'Design/images/gal_4.jpg',
            'modal_4':'Design/images/gal_5.jpg',
            'modal_5':'Design/images/gal_6.jpg',
            'modal_6':'Design/images/gal_7.jpg',
            'modal_7':'Design/images/gal_8.jpg'
        }
        
    },
    methods: {
        enLargeImage : function(imageID){
            var element = document.getElementById(imageID);
            element.classList.add("activeImageGallery");
        },
        closeModal : function(imageID){
            var element = document.getElementById(imageID);
            element.classList.remove("activeImageGallery");
        }
    }
})
