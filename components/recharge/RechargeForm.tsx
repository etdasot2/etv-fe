import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { USDTIconDefault } from '../icons/global';
import { AlertCircle, ChevronRight, Copy } from 'lucide-react';
import QRCode from 'react-qr-code';
import { getOrCreateDepositAddress } from '@/lib/api';
import DefaultLoading from '../loaders/DefaultLoading';
import { useInfoModal } from '@/context/InfoModalContext';
import { toPng } from 'html-to-image';
import { COPY_ICON_MAIN, USDC_ICON } from '../custom-icons';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface DepositAddressData {
  address: string;
  status: string;
  credited: string;
}

export default function RechargeForm() {
  const { t } = useTranslation();
  const { setInfoText } = useInfoModal();
  const [isLoading, setIsLoading] = useState(false);
  const [depositData, setDepositData] = useState<DepositAddressData | null>(null);
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const fetchingRef = useRef(false);

  useEffect(() => {
    const fetchAddress = async () => {
      // Prevent concurrent fetches
      if (fetchingRef.current || depositData) return;

      fetchingRef.current = true;
      setIsLoading(true);

      try {
        const data = await getOrCreateDepositAddress();
        setDepositData(data);
      } catch (error) {
        console.error('Error fetching address:', error);
      } finally {
        setIsLoading(false);
        fetchingRef.current = false;
      }
    };

    fetchAddress();

    // Cleanup
    return () => {
      fetchingRef.current = false;
    };
  }, []);

  const handleCopyUrl = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setInfoText(t('global.copySuccess'));
    } catch (error) {
      setInfoText(t('global.copyError'));
      console.log(error);
    }
  };

  const handleDownloadQRCode = async () => {
    if (!qrCodeRef.current) return;

    try {
      const dataUrl = await toPng(qrCodeRef.current);
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = dataUrl;
      link.click();
      setInfoText(t('global.saved'));
    } catch (error) {
      setInfoText(t('global.downloadError'));
      console.log(error)
    }
  };

  return (
    <>
      <div className="space-y-4 p-4 pt-1 mt-2">
        {/* Rest of your JSX remains the same */}

        <div className="mt-0">
          <h2 className="text-[14px] font-sora font-medium mb-2">{t('recharge.selectCurrency')}</h2>
          <div className="pt-1 flex items-center gap-2">

            <div className="flex items-center bg-gradient-to-r from-[#b37106] via-[#c18610] to-[#7c4804] p-2 rounded-lg pl-[11px] pr-[11px]"
              style={{
                // background: 'linear-gradient(-40deg, #f40208, #ff464b)',
              }}
            >
              <USDTIconDefault className="w-[24px] h-[24px]" />
              <span className="uppercase text-[16px] font-sora ml-1 font-medium">USDT</span>
            </div>

            <div className="flex items-center p-2 rounded-lg pl-[11px] pr-[11px]"
              onClick={() => {
                setInfoText(t('global.stayTuned'))

              }}
            >
              <img src={USDC_ICON} className="w-[24px] h-[24px]" />
              <span className="uppercase text-[16px]  text-[#fff9] font-sora ml-1 font-medium">USDC</span>
            </div>

          </div>

        </div>

        {depositData && (
          <div className="bg-[#20201f] rounded-[10px] p-4">
            <h3 className="text-[14px] text-white font-sora font-medium mb-2">
              {t('recharge.mainnet')}
            </h3>
            <button
              className="w-full bg-[#292929] p-4 pt-3 pb-3 rounded-lg border border-[#3b3b3b] flex items-center justify-between"
            //   onClick={() => setIsNetworkPopupOpen(true)}
            >
              <div className="flex items-center">
                <span className="font-sora text-[13px] font-medium">TRC20</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            <div className="flex justify-center mb-4 mt-5">
              <div className="bg-white p-2 rounded-lg" ref={qrCodeRef}>
                <QRCode value={depositData.address} size={200} />
              </div>
            </div> 

            <div className="w-full flex items-center justify-center">
              <button
                className="w-[180px] h-[44px] border-[0.2px] border-[#805c33] text-white py-2 rounded-full font-sora text-[14px] font-semibold hover:bg-transparent transition-colors"
                style={{
              background: 'linear-gradient(rgb(250 179 54 / 0%), rgb(186 140 0 / 10%))',

                }}
                onClick={handleDownloadQRCode}
              >
                {t('recharge.saveQRcode')}
              </button>
            </div>

            <div className="mt-5">
              <p className="text-[#ffffff99] font-sora text-[14px] font-medium">
                {t('recharge.depositAddress')}
              </p>
              <div className="flex items-center w-full">
                <p className="text-[14px] font-sora text-white truncate mr-2 flex-1">
                  {depositData.address}
                </p>
                <div
                  onClick={() => handleCopyUrl(depositData.address)}
                >
                  <img src={COPY_ICON_MAIN}
                    className="w-[18px] h-[18px] pointer-events-none"

                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="">
          <div className="flex items-center mb-2">
            <AlertCircle className="w-5 h-5 text-[#eebc7a] mr-2" />
            <h3 className="text-[15px] font-sora font-medium">{t('recharge.note')}</h3>
          </div>
          <p className="text-[#ffffff99] mb-2">{t('recharge.depositInstructions')}:</p>
          <ol className="list-decimal list-inside text-[#ffffff99] space-y-2 text-[13px]">
            {(t('recharge.instructions', { returnObjects: true }) as string[]).map(
              (instruction, index) => (
                <li key={index}>{instruction}</li>
              )
            )}
          </ol>
        </div>
      </div>

      {isLoading && <DefaultLoading />}
    </>
  );
}