import { cn } from '@/lib/utils';
import React from 'react';
import { Categories, Container, SortPopup } from '.';

interface ITopBarProps {
    className?: string;
}

export const TopBar = ({ className }: ITopBarProps): JSX.Element => {
    return (
        <div
            className={cn(
                'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
                className,
            )}
        >
            <Container className='flex items-center justify-between'>
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};
