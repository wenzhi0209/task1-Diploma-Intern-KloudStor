import Link from 'next/link';
function footer() {
    return (
        <>
            <div id='areaE'>

                <div id='desE'>
                    <p>Get in touch with us for further details</p>
                    <Link href='/getInTouch'><a id='git'>Get in Touch</a></Link>
                </div>

            </div>
            <p id="copy">Copyright © 2019. kloudStor PTE. LTD. (201834583-Z). All Rights Reserved.</p>

            <style jsx>{`
            #copy{
                font-size:12px;
                margin:10px;
            }
            #areaE{
                width: 100%;
                margin-top:25px;
                background-image: url(../static/touch.jpg);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                height:260px;
                position: relative;
                overflow:hidden;
            }

            #desE{
                display: block;
                color:white;
                font-size: 24px;
                line-height: 36px;
                margin:auto;
                text-align: center;
                padding: 60px 20px 80px 20px;
            }

            #desE>a{
                color:white;
                text-decoration:none;
                background-color:rgb(43, 174, 226);
                padding: 12px 40px;
                min-width: 130px;
                max-width: 165px;
                font-size: 16px;
            }

            #git:hover{
                color:rgb(43, 174, 226);
                background-color:white;
                font-weight: bold;
            }

            @media only screen and (max-width: 768px){
                p{
                    font-size:18px;
                }
          
            }


            
            `}</style>

        </>
    )
}

export default footer