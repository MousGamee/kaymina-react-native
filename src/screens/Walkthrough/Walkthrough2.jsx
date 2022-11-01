import { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SIZES, images } from '../../constants'
import { MotiImage, useDynamicAnimation } from 'moti'

const Walkthrough2 = ({ animate }) => {

    useEffect(() => {
      if(animate) {
          motiImage1.animateTo({
              top : '20%',
              left : '15%'
          })
          motiImage2.animateTo({
              top : '38%',
              left : -15
          })
          motiImage3.animateTo({
              top : '62%',
              left : '5%'
          })
          motiImage4.animateTo({
              top : '75%',
              left : '15%'
          })
          motiImage5.animateTo({
              top : '15%',
              left : '65%'
          })
      }

    }, [animate])
    

    // Moti intial position
    const motiImage1 = useDynamicAnimation(() => ({
        top: '30%',
        left: '25%'
    }))
    const motiImage2 = useDynamicAnimation(() => ({
        top: '44%%',
        left: '16%'
    }))
    const motiImage3 = useDynamicAnimation(() => ({
        top: '58%',
        left: '25%'
    }))
    const motiImage4 = useDynamicAnimation(() => ({
        top: '61%',
        left: '40%'
    }))
    const motiImage5 = useDynamicAnimation(() => ({
        top: '27%',
        left: '50%'
    }))

    return (
        <View
            style={{ flex : 1, overflow : 'hidden'}}
        >
            <Image 
                source={images.walkthrough_02_01}
                style={{
                    ...styles.images,
                    top : '35%',
                    left : '35%',
                    width : 106,
                    height : 161,
                    zIndex : 1
                }}
            />
            <Image 
                source={images.walkthrough_02_02}
                style={{
                    ...styles.images,
                    top : '50%',
                    left : '50%',
                }}
            />

            <MotiImage 
                state={motiImage1}
                source={images.walkthrough_02_03}
                style={styles.images}
            />
            <MotiImage 
                state={motiImage2}
                source={images.walkthrough_02_04}
                style={styles.images}
            />
            <MotiImage 
                state={motiImage3}
                source={images.walkthrough_02_05}
                style={styles.images}
            />
            <MotiImage 
                state={motiImage4}
                source={images.walkthrough_02_06}
                style={styles.images}
            />
            <MotiImage 
                state={motiImage5}
                source={images.walkthrough_02_07}
                style={styles.images}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    images: {
        position: 'absolute',
        width: 86,
        height: 112,
        zIndex: 0,
        borderRadius: SIZES.radius
    }
})

export default Walkthrough2