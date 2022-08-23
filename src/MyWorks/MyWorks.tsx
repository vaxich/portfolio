import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from "../common/styles/container.module.css";
import Work from "./Work/Work";

type WorkType = {
    id:string
    title:string
    percentCompleted: string
    description: string
    linkProgect: string
    lingGitHub:string
}



export const  MyWorks =(props:any) => {
    return (
        <div className={style.myWorksBlock}>
            <div className={ ` ${styleContainer.container} ${style.worksContainer}`   }>
                <h3 className={style.worksTitle}>My Works</h3>
                <div className={style.works}>
                    {
                        props.state.map((work: WorkType) => {

                            return  (
                                <Work  //отрисовываем компоненту Work
                                    key={work.id}
                                    id={work.id}
                                    title={work.title}
                                    percentCompleted={work.percentCompleted}
                                    description={work.description}
                                    linkProgect={work.linkProgect}
                                    lingGitHub={work.lingGitHub}
                                />
                                )
                        })
                    }

                </div>

            </div>

        </div>
    );
}

