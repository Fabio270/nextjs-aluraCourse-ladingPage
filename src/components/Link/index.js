import NextLink from 'next/link'

export default function link({children, href, ...props}){
    return <NextLink href={href}>{children}</NextLink>;
}