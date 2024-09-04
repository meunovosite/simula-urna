import NextLink from 'next/link';
import Style from './style';

export default function Link() {
    const URL = 'https://www.linkedin.com/in/alessandro-l-menezes-57906b71/';
    return (
        <Style>
            <NextLink href={URL} passHref>
            <a href={URL} target="_blank" rel="noopener noreferrer">
                    Conheça o dev
                </a>
            </NextLink>
        </Style>
    );
}
