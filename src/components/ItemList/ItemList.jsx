import React from 'react';
import { Item } from '../Item/Item';

export const ItemList = ({ items }) => {
    return (
        <>
            <section className="fondito">
                {items.map((item) => (
                    <Item {...item} key={item.id} />
                ))}
            </section>
        </>
    );
};

