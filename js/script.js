// https://flynn.boolean.careers/exercises/api/random/mail

const {createApp} = Vue

createApp({
    data: function(){
        return {
            emailArray: []
        }
    },
    created(){
        this.getEmail();
    },
    methods :{
        getEmail (){
            for(let i = 0; i < 10; i++){
                if(this.emailArray.length < 10){
                    axios
                        .get("https://flynn.boolean.careers/exercises/api/random/mail")
                        .then((resp) => {
                            const emails = resp.data.response
                        this.emailArray.push(emails)

                        console.log(emails, this.emailArray)
                    })
                }
            }
        }
    }

}).mount("#app")


