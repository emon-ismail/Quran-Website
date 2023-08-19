
import Lottie from 'lottie-react';
import animationData from '../../assets/animation/readinQuran.json';
const ReadingQuran = () => {
    const responsiveStyle = {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        padding: '10px',
        marginTop: '60px', // Adjust this value for your desired margin on mobile
        maxWidth: '100%',
        transition: 'all 0.3s ease-in-out', // Optional: add a smooth transition effect
      };     
    return (
        <div>
             <div style={responsiveStyle}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        speed={1.5}
      />
    </div>
        </div>
    );
};

export default ReadingQuran;