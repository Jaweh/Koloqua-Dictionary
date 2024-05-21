import React, { useState, useEffect } from 'react';
import styles from './utilities/cssmodules/DictionarySearch.module.css'; // Adjust the path as necessary

const quotes = [
    {
        quote: "Dartor ehvah on your pekin na",
        interpretation: "The phrase encapsulates a common scenario where a younger individual seeks assistance or favor from someone slightly older and in a more favorable position, regardless of familial ties. It reflects the social dynamics in Liberian culture, where respect and deference are often shown towards elders or individuals perceived to be in a more favorable position."
    },
    {
        quote: "Your boy neh nahn foster yay",
        interpretation: "This phrase conveys a sense of camaraderie and shared experience among individuals of similar age, disposition, or social standing. It signifies that the speaker, along with their peers, has not eaten. This colloquial phrase is often used in informal settings to convey solidarity or to informally request assistance or support, typically directed towards a peer or someone slightly older."
    },
    {
        quote: "You nah shine?",
        interpretation: "The question is an informal inquiry asking someone if they have taken their bath or showered. It's a colloquial way of inquiring about personal hygiene, often used in casual conversations among friends or acquaintances."
    },
    {
        quote: "Brabie leh your pekin here oh",
        interpretation: "The phrase is commonly used by a younger male to inform an older male of his presence or proximity. It carries an undertone of respect and acknowledgment towards the older individual. Additionally, it can serve as an indirect way of signaling a request for assistance or recognition, often within a familiar or informal context."
    },
    {
        quote: "Pruh I tell you oh",
        interpretation: "The phrase 'Pruh I tell you oh' to affirm or validate a statement made by an older male. It emphasizes agreement or acknowledgment of what has been said and is often employed to convey trust or confidence in the speaker's words."
    },
    {
        quote: "Dah God can comb monkey hair",
        interpretation: "The adage 'Dah God can comb monkey hair' is a saying in Liberian Koloqua that emphasizes faith in divine providence. It means that if God can take care of monkeys, ensuring their hair is always neat despite their lack of combs, then surely God can take care of a person who feels they have no one to turn to. It's a reassuring expression that highlights trust in God's ability to provide for and look after those in need. "
    }
];

const DemoQuotes = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                setFade(true);
            }, 500); // Duration of the fade-out effect
        }, 30000); // Change quote every 30 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className={`${styles.dictionary_component_hero_visual_card_quote} ${fade ? '' : styles.fade}`}>
            <div className={styles.dictionary_component_hero_visual_card_quote}>{quotes[currentQuoteIndex].quote}</div>
            {/* <div className={styles.dictionary_component_hero_visual_card_quote_interpretation_divider}>Interpretation</div> */}
            <div className={styles.dictionary_component_hero_visual_card_quote_interpretation}>{quotes[currentQuoteIndex].interpretation}</div>
        </div>
    );
};

export default DemoQuotes;
