import Layout from '../component/layout'
import Link from 'next/link';

function Index() {
    return (
        <Layout>
            <div id='main'>

                <div id='areaA'>
                    <div id='desA'>
                        <h1>About kloudStor</h1>
                    </div>
                </div>

                <div id='areaB'>
                    <div id='desB'>
                        <h1>Our Core</h1>
                        <p>As technology gets more advanced, 
                            it also gets more complicated. Data technology is no exception to this phenomena,
                             which faces exponential growth that is precipitated by the demand of big data.</p>
                        <p>We at kloudStor aim to be the agents of change by bringing forth better,
                             more advanced technology in the industry. 
                             We intend to do this while keeping technology simple to allow organizations to more important things. 
                             We do so through three main pillars :</p>
                    </div>

                </div>

                <div id='areaC'>
                    <div id='desC'>
                     <li><img src='../static/a.png'></img><p>We MAXIMISE your potential by providing data solutions that make sense to your organization.</p></li>
                     <li><img src='../static/b.png'></img><p>We pride ourselves in being able to SIMPLIFY the complexities of adoption while maintaining cost-efficiency.</p></li>
                     <li><img src='../static/c.png'></img><p>We specialize in providing the infrastructure FOUNDATION for data centers, Artificial Intelligence, Machine Learning and Anything as a Service.</p></li>
                    </div>

                </div>

               



            </div>
            <div>

            </div>
            <style jsx>{`
                * {
                    font-family: Muli, sans-serif;
                }

                p{
                    font-size:24px;

                }
                #desA
                {
                    width:100%;
                    height:350px;
                    background-image:url(../static/server-room.jpg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                #desA>h1
                {
                    display:block;
                    margin:0;
                    padding:0;
                    width:100%;
                    height:350px;
                    color:white;
                    text-align:center;
                    line-height: 300px;
                    background-color: rgba(0,0,0,0.5);    
                }

                #areaB{
                    width:100%;
                }

                #desB{
                    display:block;
                    max-width:700px;
                    margin: 0 auto;
                    text-align:center;
                    padding: 80px 40px;
                }

                #areaC{
                    width:100%;
                }

                #desC{
                    display:flex;
                    width:90%;
                    margin: 0 auto;
                    text-align:center;
                    item-align:center;
                    justify-content: center;
                    padding: 60px 40px;
                }

                #desC > li{
                   
                    width:20%;
                    height:380px;
                    list-style-type: none;
                    margin: 30px;
                    padding: 4% 4%;
                    border-radius: 25px;

                }

                li:hover{
                    background-color: rgba(43, 174, 226, 0.2);
                    transition-duration: 0.3s;
                    box-shadow: 5px 5px 3px grey;
                    

                }

                #desC>li>img{
                    display:block;
                    margin:0 auto;
                   
                }

                #desC>li>p{
                    text-align:center;
                }

                @media only screen and (max-width: 1000px){
                    #desB{
                        padding: 50px 40px;
                    }
                    #desC{
                       display:block;
                       margin:0 auto;
                       padding: 20px 0;
                    }
                    #desC>li{
                        margin:0 auto;
                        width:50%;
                        padding:0 8px;
                    }

                }
                @media only screen and (max-width: 500px){
                    p{
                        font-size:16px;
                    }
                    #desC > li{
                        height:300px;
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