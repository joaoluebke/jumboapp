import { Row, Text, Pressable } from 'native-base';

export interface EmptyProps {
    text: string
}

export function EmptyList({ text }: EmptyProps) {
    return (
        <Row flexWrap="wrap" justifyContent="center" mt={10}>
            <Text color="gray.800" fontSize="sm" textAlign="center">
                {text}
            </Text>
        </Row>
    );
}