import { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SIZES, images } from '../../constants'
import { MotiImage, useDynamicAnimation } from 'moti'

const Walkthrough3 = ({ animate }) => {

    useEffect(() => {
      if(animate) {
          motiImage1.animateTo({
              top : '20%',
              left : '60%'
          })
          motiImage2.animateTo({
              top : '38%',
              left : '20%'
          })
          motiImage3.animateTo({
              top : '62%',
              left : '50%'
          })
          motiImage4.animateTo({
              top : '75%',
              left : '15%'
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
            <MotiImage 
                state={motiImage1}
                source={images.walkthrough_03_01}
                style={styles.images}
            />
            <MotiImage 
                state={motiImage2}
                source={images.walkthrough_03_02}
                style={styles.images}
            />
            <MotiImage 
                state={motiImage3}
                source={images.walkthrough_01_01}
                style={styles.images}
            />
            <MotiImage 
                state={motiImage4}
                source={images.walkthrough_01_02}
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

export default Walkthrough3