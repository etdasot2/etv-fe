import { useInfoModal } from '@/context/InfoModalContext';
import { formatNumber } from '@/utils/format-numbers';
import { ChevronRight } from 'lucide-react'; 
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

 

export default function ListSocial() {
    const { setInfoText } = useInfoModal();
    const { t } = useTranslation();


    const handleGroupJoin = (group: any) => {
        if(!group.available){
            setInfoText(t('social.errorRegion'));
            return;
        }
        window.open(group.link, '_blank');
    }

    return (
         <></>
    );
}