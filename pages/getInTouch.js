import Header from '../component/header'

function gIT() {
    return (
        <>
        <Header />
            
            <div id='area'>
                <div id='backImg'>

                </div>
                <div id='speak'>
                    <div>
                    <h1>Speak to us</h1>
                    <p>Have questions or would just like to speak to one of our representatives? Provide your details below and someone will get in touch with you shortly.</p>
                    <form method='post' name='myf' action='http://intern-kloudstorcontactus.g08nfeklm2-ez94dykp84mr.production-example.runcloud.site/api/kscontactus'  target="none">  
                        <input type="text" id="name" name="name" placeholder="Name" className='enter' required></input><br/>
                        <input type="email" id="email" name="email" placeholder="Email" className='enter' required></input><br/>
                        <input type="number" id="phone" name="phone" placeholder="Phone" className='enter' required></input><br/>
                        <input type="submit" id='btnS' value="Submit" onClick={()=>{alert('THANK YOU')}}></input>
                    </form>
                    </div>

                </div>
            </div>




            <style jsx>{`
               
                * {
                    font-family: Muli, sans-serif;   
                }

               
                #area{
                    width:100%;
                    overflow:hidden;
                   
                }
                #backImg{
                    width:50%;
                    height:90vh;
                    background-image: url(../static/capture.jpg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    float:left;
                }
                #speak{
                    height:calc(90vh - 140px);
                    width:calc(50% - 80px);
                    background-color: rgb(43, 174, 226);
                    float:right;
                    padding: 70px 40px;
                    color:white;
                   
                }

                #speak p{
                    font-size:18px;
                    
                }

                .enter{
                    display:block;
                    color:white;
                    width:60%;
                    background-color:rgb(43, 174, 226);
                    border: none;
                    border-bottom: 1px solid white;
                    font-size: 16px;
                    padding: 12px 20px;
                    -moz-appearance:textfield;
                }
                
                .enter:focus{
                    outline: none;
                }

                #btnS
                {
                    margin-top:20px;
                    padding: 12px 40px;
                    font-size: 18px;
                    border: 2px solid white;
                    background-color:rgb(43, 174, 226);
                    color:white;

                }
                #btnS:hover{
                    color:rgb(43, 174, 226);
                    background-color:white;
                    font-weight: bold;
                }

                input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                ::placeholder {
                    color: white;
                    font-size: 16px;
                  }

                @media only screen and (max-width: 1024px){
                    #speak{
                        height:calc(71vh - 140px);
                    }
                    #backImg{
                        height:71vh;
                    }

                  }


                @media only screen and (max-width: 768px){
                    #speak{
                        float: none;
                        width: calc(100% - 80px);
                        padding: 30px 40px;
                        min-height: 480px;
                        height:550px;
                       
                    }
                    #speak p{
                        font-size:16px;
                        
                    }
    
                    #backImg{  
                        width: 100%;
                        height: 250px;
                        float: none;
                    }
                    .enter{
                        
                        width:70%;
                        
                    }
    
                }

                @media only screen and (max-width: 1000px){
                    #desC{
                        flex-direction: column;
                    }

                }

            `}</style>




            <style jsx global>{`
                body {
                margin:0;
                
                }
               
            `}</style>
</>
    );
    
}

export default gIT