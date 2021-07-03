import React from 'react';
import  ReactDOM  from 'react-dom';
import './App.css';


function App() {
   constructor()
   {
     super(email,password);
     this.State={
       email:null,
       password:null,
       login:false,
       store:null
     };
   }
    componentDidMount()
    {
      this.storeCollector()
    }
    storeCollector()
    {
      let store=JSON.parse(localStorage.getItem('login'));
      if(store && store.login)
      {
        this.setState({login:true,store:store})
      }
    }
     login()
   {
     fetch('https://api.akclub.in/api/users/AdminLogin',{
       method:"POST",
       body:JSON.stringify(this.state)
     }).then((response)=>{
       response.json().then((result)=>{
        console.warn("result",result);
        localStorage.setItem('login',JSON.stringify({
          login:true,
          store:result.token
        }))
        this.storeCollector()
       })
     })

     
   }
   post()
   {
     let token="Bearer"+this.state.store.token
    fetch('https://api.akclub.in/api/users/post',{
      method:"POST",
      headers:{
        'Authorization':token
      },
      body:JSON.stringify(this.state.post)
    }).then((response)=>{
      response.json().then((result)=>{
        this.setState=({
          response:result
        })
       console.warn("result",result);

       
      })
    })
   }
   
  return (
    <div>
      <h1>Jwt react</h1>
      {
      !this.state.login?
      <div>
        <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}}/>
        <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
        <button onClick={()=>{this.login()}}>Login</button>

      </div>
      :
       <div> 
         <textarea onChange={(event)=>this.setState({post:event.target.value})}/>
         <button onClick={()=>{this.post()}}>Post</button>
         {
           this.state.response
         }
       </div>
        }
     </div>
      
      


  );
}



export default App;
