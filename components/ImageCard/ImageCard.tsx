// Libraries
import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

// Components
import Card from 'components/Card';

// Types
import { FC } from 'react';

type Props = {
  imageProps?: ImageProps;
};

const LaunchImage = styled(Image)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ImageCard: FC<Props> = ({ children, imageProps }) => (
  <Card>
    <LaunchImage
      width={474}
      height={474}
      src={imageProps?.src || '/images/no-image.jpg'}
      alt={imageProps?.alt || 'No image'}
      {...imageProps}
    />
    {children}
  </Card>
);

export default ImageCard;