import React, { useState, useEffect } from 'react';
import { Planet } from 'react-planet';
import AnimIndexAtom from './AnimIndexAtom';
import AnimIndexCenter from './AnimIndexCenter';


const AnimIndex = (props) => {
    let state = props.bannerIndex
    let step = props.step
    let iconLenght = state.icon.length;
    const [currentStep, setStep] = useState(step);
    const addIcon = () => setStep(currentStep + 1);
    useEffect(
        () => {
            if (currentStep >= iconLenght) {
                return;
            }
            const interval = setInterval(addIcon, 2000);
            return () => clearInterval(interval);
        },
        [currentStep]
    );

    let elementItem = state.icon.map(e =>
        <AnimIndexAtom
            id={e.id}
            key={e.id}
            img={e.img}
        />
    ).slice(0, currentStep)
    return (
        <Planet
            centerContent={<AnimIndexCenter />}
            // hideOrbit
            autoClose={true}
            open={true}
            mass={1}
            orbitRadius={120}
            bounceOnClose
            rotation={2}
            bounceDirection="BOTTOM"
            orbitStyle={(defaultStyle) => ({
                ...defaultStyle,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#4bdfea',
            })}
        >
            {elementItem}
        </Planet>
    );
}

export default AnimIndex;
