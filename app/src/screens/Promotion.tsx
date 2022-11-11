import { useCallback, useState } from "react";
import { VStack, FlatList } from "native-base";
import { Header } from "../components/Header";
import { PromotionCard, PromotionProps } from "../components/PromotionCard";
import { EmptyList } from "../components/EmptyList";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export function Promotion() {
    const [isLoading, setIsLoading] = useState(true);
    const [promotions, setPromotions] = useState<PromotionProps[]>([])
    const { navigate } = useNavigation();

    async function fetchPromotions() {
        try {
            setIsLoading(true);
            let createdAt = new Date().toString();
            // const response = await api.get('/pools');
            setPromotions([
                {
                    id: '1',
                    productName: 'Coca Cola',
                    newPrice: '3500',
                    lastPrice: '4000',
                    createdAt: createdAt,
                    urlImg: 'https://cf.shopee.com.br/file/e3ed82f51b1e040336a48716d3f1362f',
                },
                {
                    id: '2',
                    productName: 'Feijão',
                    newPrice: '2000',
                    lastPrice: '2500',
                    createdAt: createdAt,
                    urlImg: 'https://hiperideal.vteximg.com.br/arquivos/ids/189114-1000-1000/207670.jpg?v=637529030503730000',
                },
                {
                    id: '3',
                    productName: 'Arroz',
                    newPrice: '1200',
                    lastPrice: '1350',
                    createdAt: createdAt,
                    urlImg: 'https://apoioentrega.vteximg.com.br/arquivos/ids/450825/10713.jpg?v=637051869150870000',
                },
                {
                    id: '4',
                    productName: 'Brahma',
                    newPrice: '3500',
                    lastPrice: '4000',
                    createdAt: createdAt,
                    urlImg: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/beirario/media/uploads/produtos/foto/b3795ef5aef4bfile.png',
                }
            ]);
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchPromotions();
    }, []))


    return (
        <VStack>
            <Header title="Promoções" />
            <FlatList
                data={promotions}
                keyExtractor={item => item.id}
                renderItem={
                    ({ item }) =>
                        <PromotionCard
                            data={item}
                            onPress={() => navigate('product', item)}
                        />
                }
                px={5}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{ pb: 30, mt:10 }}
                ListEmptyComponent={() => <EmptyList text="Nenhuma promoção encontrada." />}
            />
        </VStack>
    );
}