import React from 'react';
import styles from './utilities/cssmodules/DictionarySearch.module.css';
import DemoQuotes from './DemoQuotes'; // Adjust the path as necessary

const DictionarySearch = () => {
    return (
        <div className="component-wrapper">
            <div className={styles.dictionary_component_splitter}>
                <div className={styles.dictionary_component_verbal}>
                    <div className={styles.dictionary_component_header}>
                        The ultimate resource for learning and understanding Liberian <span>"Koloqua"</span>
                    </div>
                    <div className={styles.dictionary_component_description}>
                        Our comprehensive dictionary is designed to help you explore the rich and vibrant language of Liberia, offering detailed definitions, pronunciation guides, and usage examples for a wide range of colloquial words and phrases. Whether you're a native speaker wanting to deepen your knowledge or a newcomer eager to learn, our platform provides everything you need to appreciate and master Liberian Koloqua. Dive in and discover the beauty of Liberia's linguistic heritage!
                    </div>
                </div>
                <div className={styles.dictionary_component_hero_visual}>
                    <div className={styles.dictionary_component_hero_visual_card}>
                        <div className={styles.dictionary_component_hero_visual_card_quotemark_left}>&ldquo;</div>
                        <DemoQuotes />
                        <div className={styles.dictionary_component_hero_visual_card_quotemark_right}>&rdquo;</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DictionarySearch;
