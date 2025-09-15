'use client';

import { cancelWithdrawal, fetchTransactions } from '@/lib/api';
import React, { useEffect, useState, useCallback } from 'react';
import CategoryFilterDown from './filters/CategoryFilter';
import { formatDateTime } from '@/utils/time-format';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import DefaultLoading from '../loaders/DefaultLoading';
import { CustomerPicker } from '../custom-picker';
import { formatWithDecimalsNumber } from '@/utils/formatDecmials';
import { CustomerPickerTwo } from '../custom-picker-two';
import AnimationPage from '../AnimationPage';
import { useLoading } from '@/context/LoadingContext';
import { useModal } from '@/context/modal-context';
import { useInfoModal } from '@/context/InfoModalContext';

const MemberPointRecords: React.FC = () => {
  const { t } = useTranslation();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const { setGlobalLoading } = useLoading();
  

  const loadTransactions = async (pageNumber: number, filter: string) => {
    setLoading(true);
    setGlobalLoading(true);
    try {
      const response = await fetchTransactions(pageNumber, 10, filter);
      const newTransactions = response.transactions;
      const more = response.hasMore;

      setTransactions(prev => {
        const uniqueNewTransactions = newTransactions.filter(
          (newTx: any) => !prev.some((oldTx) => oldTx._id === newTx._id)
        );
        return [...prev, ...uniqueNewTransactions];
      });

      setFilteredTransactions(prev => {
        let filteredNewTransactions = newTransactions;
        if (filter !== 'all') {
          filteredNewTransactions = newTransactions.filter((t: any) => t.category === filter);
        }
        const uniqueFilteredNewTransactions = filteredNewTransactions.filter(
          (newTx: any) => !prev.some((oldTx) => oldTx._id === newTx._id)
        );
        return [...prev, ...uniqueFilteredNewTransactions];
      });

      setHasMore(more);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setGlobalLoading(false);
    }
  };

  // Initial load and filter change
  useEffect(() => {
    setTransactions([]);
    setFilteredTransactions([]);
    setPage(1);
    setHasMore(true);
    loadTransactions(1, currentFilter);
  }, [currentFilter]);

  // Load more when page changes
  useEffect(() => {
    if (page > 1) {
      loadTransactions(page, currentFilter);
    }
  }, [page]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = debounce(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && hasMore) {
        setPage(prev => prev + 1);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore]);

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  const options = [
    { key: 'all', label: t('wallet.filters.all') },
    { key: 'recharge', label: t('wallet.filters.recharge') },
    { key: 'transfer', label: t('wallet.filters.transfer') },
    { key: 'withdraw', label: t('wallet.filters.withdraw') },
    { key: 'levelPurchase', label: t('wallet.filters.levelPurchase') },
    { key: 'taskReward', label: t('wallet.filters.taskReward') },
    { key: 'teamCommission', label: t('wallet.filters.teamCommission') },
    { key: 'bonus', label: t('wallet.filters.bonus') },
    { key: 'salary', label: t('wallet.filters.salary') }
  ];

  const [isOpen, setIsOpen] = useState(false)

  const { openModal } = useModal();
  const { setInfoText } = useInfoModal();



  const handleCancelWithdrawal = async (id: string) => {
    openModal({
      message: t('wallet.cancelWithdrawalModal.modal.text'),
      onConfirm: async () => {
        try {
          const response = await cancelWithdrawal(id);

          if (response.success) {
            setInfoText(t('global.success'));
            loadTransactions(1, currentFilter);
            window.location.reload()
          }

          // If successful, redirect user to funds verification with initiateId
          // router.push(`/verify-funds-password?isn=${response.initiateId}&type=order`);
        } catch (error) {
          setInfoText(t('global.error.tryAgain'));

        }
      },
    });
  }

  return (
    <>
    <AnimationPage
        direction='top'
      >
      <div className="mt-0 p-4 pt-3 pb-3 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-[14px] text-white font-sora">{t('wallet.assetDetails')}</h2>
          <div className="flex items-center space-x-5">
          <div 
        className="text-[12px] font-sora text-white flex items-center cursor-pointer"
        onClick={()=>{setIsOpen(true)}}
      >
        {t(`wallet.filters.${currentFilter}`)}
        <div 
          className="w-[8px] h-[8px] ml-2"
          style={{
            background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAuUlEQVQoU5XQMQ4BURSF4f9IqGhZACug1Gio2IDEIlR2INHMJiQ2QEWjUbICFkBLpXBlJteEMRPmle/d8+XdIzObAhOgQL7zAGYyswAY58vG00EIFIEV0MuJrIG+wpCZlYEt0PoT2QMdSbcIcKQK7IDGD+QItCVdwrkYcKTuSC0DOXv49Hr/ABxp+jqVBHL1bx/e778AR7pebMmH71Fh0ib5s1TAkSEw98BI0iJtrUzAkUFUlLTMKvYJBfg2Gqq9HMQAAAAASUVORK5CYII=) no-repeat 100%',
            backgroundSize: '8px auto'
          }}
        />
      </div>
            {/* <CategoryFilterDown onFilterChange={handleFilterChange} /> */}
          </div>
        </div>
      </div>

      <div className="space-y-2 p-4 pt-0">
        {filteredTransactions.map((transaction) => (
          <div key={transaction._id} className="w-full flex justify-between rounded-[10px] p-4 pt-3 pb-3 bg-[#1c1c1c] border border-[#242424]">
            <div className="flex flex-col">
              <span className="text-white text-[14px] font-sora font-semibold">
                {t(`wallet.filters.${transaction.category}`)}
              </span>
              <span className="text-[#bdbdbd] text-[12px] font-sora mt-1">
                {formatDateTime(transaction.createdAt)}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-[16px] font-sora font-semibold ${transaction.type === "out" ? "text-[#eebc7a]" : "text-[#eebc7a]"}`}>
                {transaction.type === 'out' && '-'}{formatWithDecimalsNumber(Number(transaction.amount))} USDT
              </span>
              {transaction.category === 'withdraw' && transaction.status === 'processing' &&
                  <button className="w-[110px] border border-[#ffce4b] text-[#A06500] cursor-default flex items-end justify-end mt-1 mb-1 text-end leading-[1.1] rounded-full pr-4 pl-4 p-1 text-[14px] font-medium"
                  style={{
                    background: 'linear-gradient(136deg, #FFEA8F, #FFD14D)',

                  }}
                    onClick={() => { handleCancelWithdrawal(transaction.withdrawalId) }}
                  // disabled={loadingCancel}
                  >
                    {t('wallet.cancelWithdrawal')}
                  </button>}
              <span className="text-[#bdbdbd] text-[12px] font-sora mt-0 font-semibold">
                {t(`wallet.status.${transaction.status}`)}
              </span>
            </div>
          </div>
        ))}

        {!loading && filteredTransactions.length === 0 && (
          <div className="text-center text-white py-4">
            {t('wallet.noResults')}
          </div>
        )}

        {!hasMore && filteredTransactions.length > 0 && (
          <div className="text-center text-[#bdbdbd] py-4 text-sm">
            {t('wallet.noMoreRecords')}
          </div>
        )}
 
      </div>
      </AnimationPage>

      <CustomerPickerTwo
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          options={options}
          onSelect={(option) => {
            console.log("Selected:", option)
            setCurrentFilter(option)
            setIsOpen(false)
          }}
          defaultValue={currentFilter}
        />

    </>
  );
};

export default MemberPointRecords;