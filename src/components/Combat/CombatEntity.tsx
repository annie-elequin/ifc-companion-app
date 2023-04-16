import { View, Image, Text, AspectRatio, VStack, Icon, HStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CombatEntity(props) {
    const { name, health, image, altText, color } = props;

    return (
        <View w="600" h="200" bgColor={color} display="flex" flexDirection="row">
            <AspectRatio ratio={1}>
                <Image w="100%" h="100%" source={{ uri: image }}></Image>
            </AspectRatio>
            <VStack w="30%" h="100%" justifyContent="space-between">
                <Text bold fontSize="4xl" color="#E01212"> - 8/14 +</Text>
                <HStack>
                    <HStack alignItems="center">
                        <Icon as={<MaterialCommunityIcons name="shield" />} color="#333BFF" size="5xl"/>
                        <Text bold fontSize="5xl" color="#000000">5</Text>
                    </HStack>
                </HStack>
            </VStack>
        </View>
    )
}