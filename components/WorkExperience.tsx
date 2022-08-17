/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";
import Tags from "./tags/Tags.tsx"

export default function MainSection () {
    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-16 sm:text-3xl sm:truncate`}>📌 Work experience</h3>

            <h4 class={tw`text-md font-bold mt-10 mb-3`}>Alchemy (March, 2021 - July, 2022)</h4>

            <div class="tags">
                <span class={tw`text-sm text-black m-0 pill px-2.5 py-0.5 mt-1 mr-2 rounded-full font-bold`}>NodeJS Developer</span>
                -
                <Tags tags={['Node', 'React', 'MongoDB', 'Sails']} />
            </div>

            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development, and implementation in NodeJS, MongoDB and Express.JS backend on FinTech applications, managing and processing loans, credit scores, payment schedules, server mainteinance, linux oriented development, etc.        
            </p>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development of frontend views with Nunjucks and SailsJS
            </p>

            <h4 class={tw`text-md font-bold mt-10 mb-3`}>Wisboo (July, 2020 - March, 2021)</h4>

            <div>
                <span class={tw`text-sm text-black m-0 pill px-2.5 py-0.5 mt-1 mr-2 rounded-full font-bold`}>Fullstack Developer</span>
                -
                <Tags tags={['Angular', 'Ruby on Rails', 'Node', 'PostgreSQL']} />
            </div>

            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development and integration of views, templates, bug fixes, optimization, scalability and logic in Angular.js, using Javascript, SCSS and HTML, making requests with an REST API to the backend.
            </p>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development and integration of new modules, classes, bug fixes, query optimization and new functionalities using Ruby on Rails and Postgresql, creating and updating unit tests with RSpec
            </p>

            <h4 class={tw`text-md font-bold mt-10 mb-3`}>Clarity S.A (July, 2019 - July, 2020)</h4>
            <div>
            <span class={tw`text-sm text-black m-0 pill px-2.5 py-0.5 mt-1 mr-2 rounded-full font-bold`}>Fullstack Developer</span>
                -
                <Tags tags={['VB Script', 'MS SQL Server', 'JavaScript', 'Node']} />
            </div>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development and maintenance of ERP system, laying out the whole software in ASP (Front-end) and managing queries, stored procedures, and performance in Microsoft SQL Server, scrum methodology to support the team effectively and quickly.
            </p>
        </Container>
    );
}

const styles = {
    text: {
      marginTop: '1rem'
    }
};