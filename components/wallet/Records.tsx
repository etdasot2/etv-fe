// FundsRecords.tsx
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
import { useRouter } from 'next/navigation';

const FundsRecords: React.FC = () => {
  const { t } = useTranslation();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentFilterDate, setCurrentFilterDate] = useState('');
  const { setGlobalLoading } = useLoading();


  const loadTransactions = async (pageNumber: number, filter: string, filterDate: string) => {
    setLoading(true);
    setGlobalLoading(true);
    try {
      let year = undefined;
      let month = undefined;

      if (filterDate) {
        const [yearStr, monthCode] = filterDate.split('_');
        year = yearStr;
        const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        month = (monthNames.indexOf(monthCode) + 1).toString(); // Convert month code to month number
      }

      const response = await fetchTransactions(pageNumber, 10, filter, year, month);
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
    loadTransactions(1, currentFilter, currentFilterDate);
  }, [currentFilter, currentFilterDate]); // Added currentFilterDate to dependency array

  // Load more when page changes
  useEffect(() => {
    if (page > 1) {
      loadTransactions(page, currentFilter, currentFilterDate);
    }
  }, [page, currentFilter, currentFilterDate]); // Added currentFilterDate here as well

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
  }, [loading, hasMore, currentFilter, currentFilterDate]); // Added currentFilterDate here as well


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

  const optionsTimeRange = [
    {
      option1: [{
        key: '2025',
        label: "2025",
      }],
      option2: [
        { key: 'mar', label: t('global.months.mar') },
        { key: 'apr', label: t('global.months.apr') },
        { key: 'may', label: t('global.months.may') },
        { key: 'jun', label: t('global.months.jun') },
        { key: 'jul', label: t('global.months.jul') },
        { key: 'aug', label: t('global.months.aug') },
        { key: 'sep', label: t('global.months.sep') },
        { key: 'oct', label: t('global.months.oct') },
        { key: 'nov', label: t('global.months.nov') },
        { key: 'dec', label: t('global.months.dec') },
      ],
    }
  ];
  // const [loadingCancel, setLoadingCancel] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTimeRange, setIsOpenTimeRange] = useState(false)

  const getFormattedDate = () => {
    if (!currentFilterDate) {
      return t(`wallet.timeRange.title`);
    }
    const [year, monthCode] = currentFilterDate.split('_');
    if (!year || !monthCode) {
      return t(`wallet.timeRange.title`); // Fallback in case of unexpected format
    }
    return `${year} ${t(`global.months.${monthCode}`)}`;
  };
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
            loadTransactions(1, currentFilter, currentFilterDate);
            window.location.reload()
          }

          // If successful, redirect user to funds verification with initiateId
          // router.push(`/verify-funds-password?isn=${response.initiateId}&type=order`);
        } catch (error) {
          setInfoText(t('global.error.tryAgain'));

        }

      },


    });
    // try {
    //     // Initiate the package purchase request
    //     const response = await initiateBuyPackage(pkg._id);

    //     // If successful, redirect user to funds verification with initiateId
    //     router.push(`/verify-funds-password?isn=${response.initiateId}&type=order`);
    // } catch (error) {
    //     setIsLoading(false);
    //     if (error === 'insufficient_balance') {
    //         setInfoText(t('verifyFundsPassword.alerts.insufficientBalance'));
    //         setInfoText('Insufficient balance');
    //     } else if (error === 'transfer_to_task') {
    //         setInfoText(t('verifyFundsPassword.alerts.transferToTask'));
    //     } else {
    //         setInfoText(t('global.error.tryAgain'));
    //     }
    // }  
  };

  return (
    <>

      <AnimationPage
        direction='top'
      >
        <div className="mt-5 p-4 pt-0 pb-3 ">
          <div className="flex justify-between items-center ">
            <h2 className="text-[16px] text-white font-sora">{t('wallet.assetDetails')}</h2>
          </div>

          <div className="flex items-center w-full mt-4">
            <div className="flex items-center space-x-5 w-[50%]">
              <div
                className="text-[12px] w-full font-sora text-white flex items-center cursor-pointer"
                onClick={() => { setIsOpen(true) }}
              >
                <div className="flex flex-1">
                  {t(`wallet.filters.${currentFilter}`)}
                </div>
                <div
                  className="w-[8px] h-[8px] ml-2"
                  style={{
                    background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAuUlEQVQoU5XQMQ4BURSF4f9IqGhZACug1Gio2IDEIlR2INHMJiQ2QEWjUbICFkBLpXBlJteEMRPmle/d8+XdIzObAhOgQL7zAGYyswAY58vG00EIFIEV0MuJrIG+wpCZlYEt0PoT2QMdSbcIcKQK7IDGD+QItCVdwrkYcKTuSC0DOXv49Hr/ABxp+jqVBHL1bx/e778AR7pebMmH71Fh0ib5s1TAkSEw98BI0iJtrUzAkUFUlLTMKvYJBfg2Gqq9HMQAAAAASUVORK5CYII=) no-repeat 100%',
                    backgroundSize: '8px auto'
                  }}
                />
              </div>
            </div>

            <div className="flex items-center space-x-5 w-[50%] ml-4">
              <div
                className="text-[12px] w-full font-sora text-white flex items-center cursor-pointer"
                onClick={() => { setIsOpenTimeRange(true) }}
              >
                <div className="flex flex-1">
                  {getFormattedDate()}
                </div>
                <div
                  className="w-[8px] h-[8px] ml-2"
                  style={{
                    background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAuUlEQVQoU5XQMQ4BURSF4f9IqGhZACug1Gio2IDEIlR2INHMJiQ2QEWjUbICFkBLpXBlJteEMRPmle/d8+XdIzObAhOgQL7zAGYyswAY58vG00EIFIEV0MuJrIG+wpCZlYEt0PoT2QMdSbcIcKQK7IDGD+QItCVdwrkYcKTuSC0DOXv49Hr/ABxp+jqVBHL1bx/e778AR7pebMmH71Fh0ib5s1TAkSEw98BI0iJtrUzAkUFUlLTMKvYJBfg2Gqq9HMQAAAAASUVORK5CYII=) no-repeat 100%',
                    backgroundSize: '8px auto'
                  }}
                />
              </div>
            </div>

          </div>

        </div>

        <div className="space-y-2 p-4 pt-2">
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
                  <button className="w-[110px] cursor-default flex items-end justify-end mt-1 mb-1 text-end leading-[1.1] rounded-full pr-4 pl-4 p-1 text-[14px] font-medium"
                    style={{
                      background: 'linear-gradient(-40deg, #f40208, #ff464b)',
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
          setCurrentFilter(option)
          setIsOpen(false)
        }}
        defaultValue={currentFilter}
      />

      <CustomerPickerTwo
        isOpen={isOpenTimeRange}
        onClose={() => setIsOpenTimeRange(false)}
        options={optionsTimeRange}
        onSelect={(option) => {
          setCurrentFilterDate(option)
          setIsOpenTimeRange(false)
        }}
        defaultValue={currentFilterDate}
        title={t('wallet.timeRange.title')}
      />
    </>
  );
};

export default FundsRecords;