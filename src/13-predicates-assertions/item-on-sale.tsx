import type { FC } from 'react';
import { BookOnSale } from './book-on-sale';
import { MagazineOnSale } from './magazine-on-sale';
import { PenOnSale } from './pen-on-sale';
import { Book, ItemsOnSale, Magazine, Pen } from './types';

type Props = {
  item: ItemsOnSale;
};

export const ItemOnSale: FC<Props> = ({ item }) => {
  switch (item.type) {
    case 'book':
      return <BookOnSale book={item as Book} />;
    case 'magazine':
      return <MagazineOnSale magazine={item as Magazine} />;
    // case 'pen':
    //   return <PenOnSale pen={item as Pen} />;
  }

  return null;
};
