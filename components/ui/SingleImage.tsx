import { Galeria } from "@nandorojo/galeria";
import { Image, ImageStyle, StyleProp } from "react-native"; // works with ANY image component!

type SingleImageProps = {
  style: StyleProp<ImageStyle>;
  source: { uri: string };
};

export const SingleImage = ({ style, source }: SingleImageProps) => (
  <Galeria urls={[source.uri]}>
    <Galeria.Image
      style={{
        cursor: "pointer",
      }}
    >
      <Image source={source} style={style} />
    </Galeria.Image>
  </Galeria>
);
