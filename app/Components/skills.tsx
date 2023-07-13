"use client"

import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            <h3 className='absolute top-36  uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for currency profiencency
            </h3>
            <div className='grid grid-cols-8 gap-5  '>
            <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg'}
                    experience='80%' />
                     <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg'}
                    experience='80%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg'}
                    experience='80%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/angular/angular-ar21.svg'}
                    experience='80%' />
                    <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg'}
                    experience='95%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg'}
                    experience='95%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/axios/axios-ar21.svg'}
                    experience='80%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/expoio/expoio-ar21.svg'}
                    experience='80%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg'}
                    experience='80%' />

                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/figma/figma-ar21.svg'}
                    experience='95%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg'}
                    experience='80%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/github/github-ar21.svg'}
                    experience='80%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg'}
                    experience='80%' />
                <Skill directionLeft={true}
                    skillImage={'https://www.vectorlogo.zone/logos/gradle/gradle-ar21.svg'}
                    experience='80%' />
                
                
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg'}
                    experience='95%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/json/json-ar21.svg'}
                    experience='95%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg'}
                    experience='50%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg'}
                    experience='50%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg'}
                    experience='70%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg'}
                    experience='50%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/python/python-ar21.svg'}
                    experience='50%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/sendgrid/sendgrid-ar21.svg'}
                    experience='50%' />
                <Skill directionLeft={false}
                    skillImage={'https://www.vectorlogo.zone/logos/trello/trello-ar21.svg'}
                    experience='95%' />
            </div>
        </motion.div>
    )
}

export default Skills;