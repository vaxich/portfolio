import React from 'react';
import style from './Contact.module.css'
import styleContainer from '../common/styles/container.module.css'


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={styleContainer.container  }>
                <form className={style.contactForm}>

                        <input className={style.contactInput} type="text" name="name" placeholder={"name"}/>


                         <input className={style.contactInput} type="e-mail" name="name" placeholder={"e-mail"}/>


                        <textarea className={style.contactTextarea} placeholder={"Your message"} />

                    <input className={style.contactBotton} type="submit" value="Отправить" />
                </form>

            </div>



        </div>
    );
}

export default Contact;
