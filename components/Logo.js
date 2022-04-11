import React from 'react';
import Svg, { Text, Path } from 'react-native-svg';

const Logo = (props) => {
  return (
    <>
      <Svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 105.88 20.3'
        {...props}
      >
        <Text
          transform='translate(20.4 14.58)'
          style={{
            fill: '#fff',
            fontSize: '16.62px',
            fontFamily: 'Futura-Bold,Futura',
            fontWeight: 700,
            letterSpacing: '-.03em',
          }}
        >
          {'GamesBit.'}
        </Text>
        <Path
          d='m167.16 358.33-1.16-6.12a4.35 4.35 0 0 0-4.27-3.56h-6.36a4.34 4.34 0 0 0-4.28 3.58l-1.18 6.06a2.61 2.61 0 0 0 4.41 2.3l2.94-3.25h2.52l2.95 3.26a2.6 2.6 0 0 0 4.4-2.3Zm-10.37-4.75h-.58v.57a.58.58 0 1 1-1.16 0v-.57h-.58a.58.58 0 1 1 0-1.16h.58v-.58a.58.58 0 1 1 1.16 0v.58h.58a.58.58 0 0 1 0 1.16Zm2.89-.58a.58.58 0 0 1 .58-.58h2.31a.58.58 0 1 1 0 1.16h-2.31a.58.58 0 0 1-.58-.58Zm5.17 7.21a1.46 1.46 0 0 1-1.26-.39l-2.25-2.5h.37a4.34 4.34 0 0 0 3.68-2.05l.63 3.27a1.44 1.44 0 0 1-1.17 1.67Z'
          transform='translate(-149.84 -346.4)'
          style={{
            fill: '#fff',
          }}
        />
      </Svg>
    </>
  );
};

export default Logo;
