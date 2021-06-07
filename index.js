const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#content-about");
const contactContent = document.querySelector("#content-contact");

console.log(about,contact,aboutContent,contactContent)


// Event-Listeners

about.addEventListener('click',function() { 
    const winBox = new WinBox({
        title:"About me",
        width:'400px',
        height:'300px',
        top:50,
        right:50,
        left:50,
        bottom:50,
        mount:aboutContent,
        onfocus:function() { 
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground("#777")
        }
    });
 })





 
contact.addEventListener('click',function() { 
    const winBox1 = new WinBox({
        title:"Contact me",
        width:'450px',
        height:'150px',
        top:150,
        right:50,
        left:150,
        bottom:50,
         mount:contactContent,
        onfocus:function() { 
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground("#777")
        },
    });
 })