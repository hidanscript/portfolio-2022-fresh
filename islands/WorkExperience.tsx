/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";

export default function MainSection () {
    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-16 text-gray-900 sm:text-3xl sm:truncate`}>📌 Work experience</h3>

            <h4 class={tw`text-md font-bold mt-10 text-gray-900 m-0`}>👜 Alchemy (March, 2021 - July, 2022)</h4>
            <span class={tw`text-sm dark:text-white m-0`}>NodeJS Developer</span>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development, and implementation in NodeJS, MongoDB and Express.JS backend on FinTech applications, managing and processing loans, credit scores, payment schedules, etc.        
            </p>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development of frontend views with Nunjucks and SailsJS
            </p>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Server mainteinance and linux oriented development.
            </p>

            <h4 class={tw`text-md font-bold mt-10 text-gray-900 m-0`}>👜 Wisboo (July, 2020 - March, 2021)</h4>
            <span class={tw`text-sm dark:text-white m-0`}>Fullstack Developer</span>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development and integration of views, templates, bug fixes, optimization, scalability and logic in Angular.js, using Javascript, SCSS and HTML, making requests with an REST API to the backend.
            </p>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development and integration of new modules, classes, bug fixes, query optimization and new functionalities using Ruby on Rails and Postgresql, creating and updating unit tests with RSpec
            </p>

            <h4 class={tw`text-md font-bold mt-10 text-gray-900 m-0`}>👜 Clarity S.A (July, 2019 - July, 2020)</h4>
            <span class={tw`text-sm dark:text-white m-0`}>Fullstack Developer</span>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Development and maintenance of ERP system, laying out the whole software in ASP (Front-end) and managing queries, stored procedures, and performance in Microsoft SQL Server,
            </p>
            <p class={tw`text-base dark:text-white`} style={styles.text}>
                Scrum methodology to support the team effectively and quickly.
            </p>
        </Container>
    );
}

const styles = {
    hero: {
      backgroundColor: '#86efac',
      display: 'flex',
      height: '50vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navbar: {
      padding: '0.5rem 1rem',
      backgroundColor: '#86efac',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    button: {
      border: '1px solid black'
    },
    text: {
      marginTop: '1rem'
    },
    higherText: {
      marginTop: '2rem'
    },
    showMore: {
      cursor: 'pointer',
      color: '#86efac',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: 30,
    }
};