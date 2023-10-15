import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
    image: {
        width: 248*1.2,
        height: 238*1.2,
        borderRadius: 10,
        
  },
});
