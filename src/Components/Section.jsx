import React from 'react';
import {motion} from "framer-motion"
const Section = ({h3, text, hasBtn=true, btnTxt, imgSrc,imgSize="70%",backgroundColor,headingColor,textColor,btnColor,btnBgColor}) => {
    const headingoption={
        initial:{
            y:"-100%",
            opacity:0,
         },  whileInView :{ 
            y: 0, 
            opacity: 1,
        }
    }
    const textoption={
        ...headingoption,
        delay:0.4,
    }
    const motionbutton={
        initial:{
            y:"100%",
            opacity:0,
         },  whileInView :{ 
            y: 0, 
            opacity: 1,
        },
        transition:{
            delay:0.4,
            ease:"easeIn"
        }
    }
    const imgoption={
        initial:{
            scale:0.1,
            opacity:0,
         },  whileInView :{ 
            scale:1, 
            opacity: 1,
        },
        transition:{
            delay:0.4,
    }
}
    return (
        <section className='section' style={{backgroundColor}}>
            <div>

                <motion.h3 style={{color:headingColor}} data-cursorpointer={true} {...headingoption}>{h3}</motion.h3>
                <motion.p style={{color:textColor}} data-cursorpointer={true} {...textoption} >{text}</motion.p>
                {
                    hasBtn && (
                    <motion.button style={{color:btnColor,
                    backgroundColor:btnBgColor,}} data-cursorpointer={true} {...motionbutton}>
                        {btnTxt}
                        </motion.button>
                )}
                <motion.div {...imgoption} >
                    <img src={imgSrc} alt="imgSrc" style={{
                        width:imgSize
                    }} />
                </motion.div>
            </div>
        </section>
    )
}

export default Section;