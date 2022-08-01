import React from 'react';
import { Planet } from 'react-planet';
import AnimSecurityAtom from './AnimSecurityAtom';
import AnimSecurityCenter from './AnimSecurityCenter';

import test from '../../../Images/payIcon/1.svg'
import test2 from '../../../Images/payIcon/2.svg'
import test3 from '../../../Images/payIcon/3.svg'
import test4 from '../../../Images/payIcon/4.svg'
import test5 from '../../../Images/payIcon/5.svg'
import test6 from '../../../Images/payIcon/6.svg'
import test7 from '../../../Images/payIcon/11.svg'
const AnimSecurity = () => {
    return (
        <Planet
            centerContent={<AnimSecurityCenter />}
            // hideOrbit
            open={true}
            orbitRadius={120}
            bounceOnClose
            rotation={105}
            // the bounce direction is minimal visible
            // but on close it seems the button wobbling a bit to the bottom
            bounceDirection="BOTTOM"
            orbitStyle={(defaultStyle) => ({
                ...defaultStyle,
                borderWidth: 0.5,
                borderStyle: 'solid',
                borderColor: '#00c0a9',
            })}
        >
            <AnimSecurityAtom img={test7} />
            <AnimSecurityAtom img={test2} />
            <AnimSecurityAtom img={test3} />
            <AnimSecurityAtom img={test4} />
            <AnimSecurityAtom img={test5} />
            <AnimSecurityAtom img={test6} />
        </Planet>
    );
}

export default AnimSecurity;
