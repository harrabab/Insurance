
 // accordion for faq page
 var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
      
     

//Form Validation for Contact us
            
function sendContact(){
    let status=true; 
    let Name = document.getElementById("Name").value;
    let nameRGEX = /^[a-z ,.'-]+$/i;

    let Email = document.getElementById("Email").value;
    let emailRGEX =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let Phone=document.getElementById("Phone").value;
    let phoneRGEX=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    let Message=document.getElementById("Msg").value;
    let messageRGEX= /^[a-z ,A-Z,.'-]+$/i;

    let nameresult = nameRGEX.test(Name);
    let emailresult = emailRGEX.test(Email);
    let phoneresult=phoneRGEX.test(Phone);
    let messageresult=messageRGEX.test(Message);

    if (Name == '') {
        document.getElementById("Name").style.borderColor = "red";
        status = false;
    }   
    else if (!Name.match(nameRGEX)) {
        document.getElementById("Name").style.borderColor = "red";
        document.getElementById("report_name_error").innerHTML = "Please enter valid name";
        document.getElementById("report_name_error").style.color = "red";
        status = false;
        } 
        else if (Name != '') {
        document.getElementById("Name").style.borderColor = "white";
        document.getElementById("report_name_error").innerHTML = "";
        status = false;
        }
    
    
    if (Email == '') {
    document.getElementById("Email").style.borderColor = "red";
    status = false;
    } 
    else if (!Email.match(emailRGEX)) {
    document.getElementById("Email").style.borderColor = "red";
    document.getElementById("report_email_error").innerHTML = "Please enter valid email";
    document.getElementById("report_email_error").style.color = "red";
    status = false;
    } 
    else if (Email != '') {
    document.getElementById("Email").style.borderColor = "white";
    document.getElementById("report_email_error").innerHTML = "";
    status = false;
    }
    if (Phone == '') {
    document.getElementById("Phone").style.borderColor = "red";
    status = false;
    } 
    else if (!Phone.match(phoneRGEX)) {
    document.getElementById("Phone").style.borderColor = "red";
    document.getElementById("report_phone_error").innerHTML = "Please enter valid phone";
    document.getElementById("report_phone_error").style.color = "red";
    status = false;
    }
    else if (Phone != '') {
    document.getElementById("Phone").style.borderColor = "white";
    document.getElementById("report_phone_error").innerHTML = "";
    status = false;
    }
    if (Message == "") {
    document.getElementById("Msg").style.borderColor = "red";
    status = false;
    } 
    else if (Message != "") {
    document.getElementById("Msg").style.borderColor = "white";
    }

}     
		
// Home Landing Page javaScript		

//document.getElementById("select_btns").onclick = function() {myQuote()};
$( document ).ready(function() {
    $( ".btn_sub" ).click(function() {
       	
            let status = true;		
         let postalcode =   document.getElementById("insu_postal").value;		
         let select_insu =   document.getElementById("insure_type").value;		
         var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;		
                 
         if(postalcode == '')		
         {		
                     
             document.getElementById("error_postal").innerHTML = "Please enter postal code";		
             document.getElementById("error_postal").style.color = "red";		
             status = false;		
         }else if (!postalcode.match(regex))		
         {		
                    
                
            document.getElementById("error_postal").innerHTML = "Please enter valid postal code";		
             document.getElementById("error_postal").style.color = "red";		
             status = false; 		
                 
        }else{		
            document.getElementById("error_postal").innerHTML = "";		
                
        document.getElementById("error_postal").style.color = "white" ;		
        status = true;		
        }		
        if(select_insu=='')		
        {		
                    
            document.getElementById("error_type").innerHTML = "Please enter insurance code";		
             document.getElementById("error_type").style.color = "red";		
             status = false;		
                    
        }else if(select_insu!=''){		
                    
                    
            document.getElementById("error_type").innerHTML = "";		
             document.getElementById("error_type").style.color = "white"; 		
             status = true;		
                     
        }		
               
        if(status == true)		
        {		
            window.location.href = "home_insurance_form.html";		
        }else{		
            return false;		
        }		
                
        })
    
});


     	
    
        
        