import Layout from '../component/layout'
import Link from 'next/link';

function Index() {
    return (
        <Layout>
            <div id='main'>

                <div id='areaA'>

                    <video muted autoplay='autoplay' loop id="Mvideo" src="../static/video.mp4" type="video/mp4" />
                    <div id='desA'>
                        <h1>KLOUDSTOR KUMULUS STORAGE SYSTEMS</h1>
                        <hr id='hrA'></hr>
                        <h2>Revolutionary modular storage systems for your needs.</h2>
                        <a className='learn'>Learn More</a>
                    </div>
                </div>

                <div id='areaB'>
                    <div id='backB'>
                    <div id='desB'>
                        <h1>Storage for the New Age</h1>
                        <p>kloudStor's Kumulus storage systems solve the vast growth needs of public and private Cloud providers,
                            the diverse and expanding needs of the Edge, 
                            and the specific and customized needs of service providers and traditional data centers.</p>
                    </div>
                    </div>
                </div>

                <div id='areaC'>
                     <img id='imgC' src='../static/kumulus.png' />
                     <div id='desC'>
                            <h1>Kumulus Storage</h1>
                            <hr></hr>
                            <p>Revolutionary modular storage systems for your needs.</p>
                            <div id='conC'>
                                <a>Software Defined Virtual Private Storage</a>
                                <a>Fiber Channel SAN Storage</a>
                                <a>Object Storage</a>
                            </div>
                    </div>
                </div>

                <div id='areaD'>
                    <img id='imgD' src='../static/Stratus.png' />
                    <div id='desD'>
                        <h1>Stratus Hyperconverged Infrastructure (HCI)</h1>
                        <hr></hr>
                        <p>The power of server, storage and virtualization in one system.</p>
                        <a className='learn'>Learn More</a>
                    </div>
                    
                    
                </div>

               



            </div>
            <div>

            </div>
            <style jsx>{`
                * {
                    font-family: Muli, sans-serif;
                }
                hr{
                    margin-top:10px;
                    margin-bottom:10px;
                    border: 1.5px solid white;
                }
                #hrA{
                    margin-top:50px;
                    margin-bottom:40px;
                    width:80%;
                    margin-left:0;
                }
                p{
                    font-size:24px;
                    line-height: 2;

                }
                .learn{
                    background-color:rgb(43, 174, 226);
                    border:none;
                    font-weight: 525;
                    cursor: pointer;
                }
                .learn:hover{
                    color:rgb(43, 174, 226);
                    background-color:white;
                    font-weight: bold;
                }
               
               
                #areaA{
                    witdh:100%;
                    height:650px;
                    position: relative;
                    overflow: hidden;
                    background-color:black;
                   
                }
                #Mvideo{
                    max-width:100%;
                    width:100%;
                    height:100%;
                    object-fit:cover; 
                    opacity:0.7;
                    z-index:-999;
                }
                #desA{
                    position: absolute;
                    color:white;
                    top:25%;
                    left:4%;
                    width:30%;
                    max-width: 500px;
                    
                }

                #desA:hover hr{
                    border: 1.5px solid rgb(43, 174, 226);
                    transition-duration: 1s;
                    transition-timing-function: linear;

                }

                #desA>a{
                    display: inline-flex;
                    text-align:center;
                    justify-content: center;
                    padding: 12px 25px;
                    min-width: 120px;
                    max-width: 165px;
                    font-size: 15px;
                    margin-top:5%;
                }

                #desA>h2{
                    margin-top:5%;
                }


                #areaB{
                    
                    margin-top:25px;
                    width:100%;
                }

                #areaB:hover{
                    background-image: url(../static/back.bmp);
                    background-position: top;
                    background-repeat: no-repeat;
                    background-size: cover;
                   
                }

                #areaB:hover #backB{
                    width:100%;
                    height:100%;
                    background-color:rgba(0,0,0,0.6);
                    color:white;
                    transition-duration: 2s;
                    transition-timing-function: linear;

                  
                }


                #desB{
                    max-width: 700px;
                    text-align: center;
                    margin: 0 auto;
                    width:calc(100% - 40px);
                    padding: 100px 20px
                    
                }

                #areaC{
                    width: 100%;
                    margin-top:25px;
                    padding-bottom:50px;
                    background-color:black;
                    
                }
                #imgC{
                    display:inline-block;
                    width: 40%;
                    vertical-align:top;
                  
                }
                #desC{
                   
                    display:inline-block;
                    color:white;
                    width: 40%;
                    margin-top:5%; 
                    margin-left:5%;
                    padding-bottom:100px;
                }

                #desC:hover hr{
                    border: 1.5px solid rgb(43, 174, 226);
                    transition-duration: 1s;
                    transition-timing-function: linear;

                }
                #desC:hover h1{
                    color:rgb(43, 174, 226);
                    transition-timing-function: linear;
                    transition-duration: 5s;

                }

                #conC{
                    display: inline-flex;
                    
                }
                #conC>a{
                    display: inline-flex;
                    border: 1px solid #fff;
                    text-align:center;
                    justify-content: center;
                    padding: 15px 25px;
                    margin-right: 10px;
                    min-width: 165px;
                    max-width: 165px;
                    font-size: 16px;
                    align-items: center;
                    margin-top:10px;
                    cursor: pointer;
                }

                #conC>a:hover{
                    color:black;
                    background-color:white;
                    transition-duration: 0.3s;
                    transition-timing-function: linear;
                }

                #areaD{
                    width: 100%;
                    margin-top:25px;
                    background-color:black;
                    padding-bottom:10%;
                }

                #imgD{
                    display:inline-block;
                    width: 40%;
                    vertical-align:top;
                    max-width: 780px;
                    max-height:500px;
                    float:right;
                    margin-right:8%;
                }
                #desD{

                    display:inline-block;
                    vertical-align:top;
                    color:white;
                    width: 40%;
                    margin-top:5%;
                    margin-left:5%;
                  
                   
                }

                #desD:hover hr{
                    border: 1.5px solid rgb(43, 174, 226);
                    transition-duration: 1s;
                    transition-timing-function: linear;

                }
                #desD:hover h1{
                    color:#00b69a;
                    transition-timing-function: linear;
                    transition-duration: 5s;

                }

                #desD>a{
                    display: inline-flex;
                    text-align:center;
                    justify-content: center;
                    padding: 12px 25px;
                    min-width: 120px;
                    max-width: 165px;
                    font-size: 15px;
                    
                }
                h1{
                    font-size:34px;
                }
                h2{
                    font-size:28px;
                }

             

                @media only screen and (max-width: 1090px){
                    
                    #desA{
                        top:20%;
                        left:4%;
                        width:60%;
                        
                    }
                  
                    #desC,#desD{
                        display:block;
                        margin:0 auto;
                        padding:0;
                        width: 75%;
                        text-align: center;
                    }
                    #imgC,#imgD{
                        float:none;
                        display:block;
                        margin:0 auto;
                        width: 60%;                 
                    }
                    #conC{
                        margin: 0 auto;
                    }
                   
                }
                @media only screen and (max-width: 768px){
                    #areaA{
                        height:550px;
                    }
                    #desA{
                        top:15%;
                        left:10%;
                    }
                    #hrA{
                        width:100%;
                    }
                    p{
                        font-size:16px;
                    }
                    h1{
                        font-size:24px;
                    }
                    h2{
                        font-size:20px;
                    }
                    #conC{
                        display:block;
                    }
                    #conC>a{
                        margin:4px auto;
                    }
                }


            `}</style>



            <style jsx global>{`
                body {
                margin:0;
                }
            `}</style>

        </Layout>


    );

}

export default Index