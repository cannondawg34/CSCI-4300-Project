// page.js

import React from 'react';
import Layout from './layout'; // Adjust the path if your component is elsewhere
import Slideshow from './components/slideshow';
import Button from './components/Button'; // Adjust the path if your component is elsewhere
import styles from './page.module.css'; // Make sure you have this CSS module for styling

const Home = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.welcomeMessage}>Welcome to Goon Gallery!</h1>
                <p className={styles.gooningStartsHere}>Gooning starts here.</p>

                {/* Assuming Slideshow is a component, it should be self-closed or have a closing tag if it wraps children */}
                {/* <Slideshow /> */}

                <Button href="/login">Login</Button>
                <Button href="/signup">Create Account</Button>

            </div>
        </Layout>
    );
};

export default Home;
