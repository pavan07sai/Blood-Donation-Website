// $(document).ready(function(){
    

//     $("#btn").click(function(){
//         var fname=$("#firstn").val().trim();
//         var lname=$("#lastn").val().trim();
//         var dob=$("#date").val().trim();
//         var pnumber=$("#phone").val();
//         var Email=$("#email").val().trim();
//         var username=$("#uname").val().trim();
//         var password=$("#password").val().trim();
//         var cpassword=$("#cpassword").val().trim();
//         var bloodgroup=document.getElementById('Blood_Group').options[document.getElementById('Blood_Group').selectedIndex].text;
        
       
//         if(password!=cpassword){
//                alert("password not matched with conform password..") ;  
//                return false; 
//         }else{
//             var user={
//                 username: username,
//                 password: password,
//                 Email:Email,
//                 fname:fname,
//                 dob:dob,
//                 phone:pnumber,
//                 bloodgroup:bloodgroup,

//             };
//             var json=JSON.stringify(user);
//             localStorage.setItem(username, json);
//             console.log("user added");
           
//             return true;
//         }
        
//     });

//     $("#login").click(function(){
//         var username=$("#user").val();
//         var password1=$("#pword").val();
//         var ustatus;
//         var pstatus;
       

//         for(let i=0;i<username_array.length;i++){
            
//             if(username_array[i]==username){
//                 ustatus=true;
//                 break;
//             }
//         }

//         for(let j=0;j<password_array.length;j++){
            
//             if(password_array[j]==password1){
//                 pstatus=true;
//                 break;
//             }
//         }
//         if(ustatus==true&&pstatus==true){
//             return true;
//         }else{
//             alert("user and password incorrect..");
//             return false;
//         }
//     });
    
   

// });


































function add_details(){
    event.preventDefault();
    var fname=document.getElementById('firstn').value;
        var lname=document.getElementById('lastn').value;
        var dob=document.getElementById('date').value;
        var pnumber=document.getElementById('phone').value;
        var Email=document.getElementById('email').value;
        var username=document.getElementById('uname').value;
        var password=document.getElementById('password').value;
        var cpassword=document.getElementById('cpassword').value;
        var bloodgroup=document.getElementById('Blood_Group').options[document.getElementById('Blood_Group').selectedIndex].text;
        var user= { 
            email:Email,
            username : username,
            password : password,
            bloodgroup:bloodgroup,
        };
        var json=JSON.stringify(user);
        localStorage.setItem(username,json);
        console.log("user added");
        return true;

}


function search_details(){
    event.preventDefault();

    var username =document.getElementById("user").value;
    var password =document.getElementById("pword").value;

    var user=localStorage.getItem(username);
    var data=JSON.parse(user);
    console.log(data);

    if(user==null){
        alert("wrong username");
    }else if(username==data.username&&password==data.password){
        alert("successfully login");
    }else{
        alert("something went wrong...");
    }
}