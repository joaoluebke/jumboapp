import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Center, Heading, HStack, Image, Text, VStack } from 'native-base';
import currency from 'currency.js'
export interface PromotionProps {
    id: string;
    productName: string;
    newPrice: string;
    lastPrice: string;
    createdAt: string;
    urlImg: string;
}

interface Props extends TouchableOpacityProps {
    data: PromotionProps;
}

export function PromotionCard({ data, ...rest }: Props) {
    
    // function changeSymbolCurrency(number: string) {
    //     let numberCurrency = currency(number, { separator: ',' }).format();
    //     let numberNoCurrency = numberCurrency.replace(/\$ /g, "");
    //     return numberNoCurrency;
    // }

    return (
        <TouchableOpacity {...rest}>
            <HStack
                w="full"
                h="auto"
                bgColor="white"
                borderBottomWidth={3}
                borderBottomColor="green.500"
                justifyContent="space-between"
                alignItems="center"
                rounded="sm"
                mb={3}
                p={4}
            >
                <VStack>
                    <Heading color="gray.950" fontSize="lg" fontFamily="heading">
                        {data.productName}
                    </Heading>

                    <Text color="gray.500" fontSize="md" strikeThrough>
                        De: {currency(data.lastPrice, { separator: ' ', symbol: '' }).format()} AOA
                    </Text>

                    <Text color="red.500" fontSize="md" >
                        {
                            currency(data.newPrice, { separator: ' ', symbol: '' }).format()
                        } AOA
                    </Text>
                </VStack>
                <VStack>
                    <Image source={{
                        uri: `${data.urlImg}`
                    }} alt="Alternate Text" size="md" rounded={5} />
                </VStack>

            </HStack>
        </TouchableOpacity>
    );
}