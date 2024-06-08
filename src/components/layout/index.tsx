import { Flex } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode
}

export default function Layout(props: Props){
    const {children} = props
    return (
        <Flex flexDirection='column'>
            <div></div>
            {children}
            <div></div>
        </Flex>
    )
}