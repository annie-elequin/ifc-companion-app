import { View, Image, AspectRatio } from "native-base";

export default function CombatEntity(props) {
    const { name, health, image, altText, color } = props;

    return (
        <View w="600" h="200" bgColor={color} display="flex" flexDirection="row">
            <AspectRatio ratio={1}>
                <Image w="100%" h="100%" source={{ uri: image }}></Image>
            </AspectRatio>
        </View>
    )
}