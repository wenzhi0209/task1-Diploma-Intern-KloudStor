import Link from 'next/link';

function Header() {

    function navM(){
        let x= document.getElementById("navMenu");
        let y= document.getElementById("back");
        let w = document.getElementsByTagName("body")[0];
        let z = document.getElementById("icon");

        if(w.style.overflow != "hidden")
        {
            if(window.innerWidth<=500)
                w.style.overflow = "hidden"
        }
        else
        {
            w.style.overflow = "initial"
        }


        x.classList.toggle("active");
        y.classList.toggle("active");
        z.classList.toggle("active");
       
    }

    function clear(){
        let w = document.getElementsByTagName("body")[0];
        w.style.overflow = "initial";
    }


    return (
            <div id="headBar">
                <Link href='/'><img src={'../static/logo.png'} className="logo" onClick={clear} /></Link>
                <div>
                    <div id='back' onClick={navM}>
                        <nav id='navMenu'>
                            <Link href='/about'><a>About Us</a></Link>
                            <a>Product</a>
                            <Link href='/getInTouch'><a>Contact Us</a></Link>
                        </nav>
                    </div>
                    

                    <div id='icon' onClick={navM}>
                        <div id='line1'></div>
                        <div id='line2'></div>
                        <div id='line3'></div>
                    </div>
                </div>
                <style jsx>{`

            a:visited{
                color:black;
            }
            
            #headBar{
                height: 70px;
                width: 100%;
                overflow:hidden;
                
            }


            #navMenu{
              
                float: right;
                overflow: hidden;
                padding-right:1%;

            }

            .logo{
                display:block;
                height: 60px;
                float: left;
                margin-left:2%;
                padding-top:5px;
                cursor: pointer;
            }
            

            nav a {
                
                float:left;
                padding:22.5px 25px;
                text-align: center;
                text-decoration: none;
                font-size: 21px;
                font-weight: bold;
                cursor: pointer;
                
            }

            nav a:hover{
                color:rgb(43, 174, 226);
            }

            #icon{
                width:35px;
                display:none;
               
               
            }


            #icon div{
                width:30px;
                height:4px;
                background-color: black;
                margin: 4px;
            }

            a:hover {
                color:rgb(43, 174, 226);
                transition-duration: 1s;
                transition-timing-function: linear;
               
            }

            @media only screen and (max-width: 500px) {
                nav a{
                    width:100%;
                    padding-left:0;
                } 

                #headBar{
                    height:50px;

                }
                .logo{
                    display:block;
                    height:40px;
                    
                }
                #back{
                    position:fixed;
                    top:50px;
                    width:100%;
                    height:100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index:2;
                    display:none;
                }
                #navMenu{
                    position:absolute;
                    right:0;
                    width:50%;
                    height:100%;
                    background-color: white;
                    z-index:999;
                    display:none;
                }
               
                #icon{
                    display:block;
                    position:absolute;
                    top:10px;
                    right:10px;
                    height:35px;
                    bottom:0;
                }

                #navMenu.active{
                    display:block;
                }
                #back.active{
                    display:block;
                }

                #icon.active #line1{
                    transform: rotate(45deg) translate(4px,6px);
                }
                #icon.active #line2{
                    display:none;
                }
                #icon.active #line3{
                    transform: rotate(-45deg) translate(0px,-3px) ;
                }
              }

      `}</style>


            </div>


      
    );


}
export default Header