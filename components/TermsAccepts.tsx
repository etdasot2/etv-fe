'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TermsAcceptsProps {
  onAcceptChange: (accepted: boolean) => void;
  initialAccepted?: boolean;
}

const TermsAccepts: React.FC<TermsAcceptsProps> = ({ onAcceptChange, initialAccepted }) => {
  const [accepted, setAccepted] = useState(initialAccepted);
  const { t } = useTranslation();

  const handleToggle = () => {
    const newAccepted = !accepted;
    setAccepted(newAccepted);
    onAcceptChange(newAccepted); // Inform parent component about the change
  };

  return (
    <div className="mt-3 flex items-center cursor-pointer" onClick={handleToggle}>
      <img
        src={accepted 
          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAHhQTFRFAAAA/sVO/slM/spN/sVP/sVO/spO/spO/spO/spN/s1H/sZO/sVO/sVO/spO/sVO/spO/slM/spN1G4AbSQAXh0At1YA/sE/mUAAizgA/spO/aESxWEA/q0h8YgA1W4AfCsA/rcwizUA/slM/spO/spOqEsA/spPN2pfLAAAACh0Uk5TABBgj6/f7/+/XyCAv8+fIN9Qf/////////+v//////////+/z3//X0bt8pgAAAHISURBVHicnZVtT4MwEIDvKGPhZcNFE+MyE2P0//8f4yf9Ykzc1Dn2AlttCyttaQt6H1goz8O163FFMAPrADiRMsKi89i4TbDUBqLKcFDHS+MFPMaVqqhAasN5hBubkJ8OdpxFfJBJpBCEjteLoOnKENLKg6vTwoG8NGph1vm7LRFspZBvffM/Bw2LszAKBvBsE9eNMGABdaRLIeS7gTzQknJhuh8q8BT4hwQiBUIw8jIZr/XPNgXCxF1CLHLKLuRcF4A79M9I8GzPZIoDemfU8IoQIAn7efySQxVmpYNu+fAkE8AlamVxhYDvPh5iHCv8Na/H5M3DA9WEG1HytWHn2XpUYVr/cMPFA0bKpzA7ng0nD9qi57T5cCdrFx9jSMBiuHhYGBunGRaebZxRGoph41lpYKSPSMPKA0Ewa6Mx7PztM8LjC1gMO896EyuekdmU5puL/c7KAykY3EnhjvE37xrdFM4ghWhkg1M0jQx6+oCMmK/rf824rzfVkYhm07x6wDL4Alqh32j49lCcbbyHItmCIUBeuI+V6Ng9dj3TotmyvdHmkVPLUUGzFVVujYnn6/tXbWCx0vCOIBy8+2BLpMkPfXii5uNfLKOjzHUEILIAAAAASUVORK5CYII=' // Replace with your selected image base64
          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB1VoNaxpBFHxngiFHpKEJhoQWpIFA//+PKQiBlBZDpYEEQ0RRzJvzrZlb9/ROT90MLHof3s7sm/24tyZSA2az2bF+fNGSamlqOdWCc0d020jLWMtQy5uW1yRJRrIlEtkQRrqt5UxLSzYDhPRlCzGVBRBxlCOpD09aHqsKqSRAyd9ImPhE5tZ4lrlV8H2qZKb2O9zftN+1qIQAET0piVIClMCJftzK3NuMgZF+cmTLwkSdy7xBUu8y+kq3TDTWCtCKLvXjm+RbHcR7WsGr1ACtA/2oo+WETqNBHrSO51W/TdY8GJa5plOwCkLclx1A60M0UCc31kpLJSse5pNHOBHWsewQWi/6yp3ko1EoolHwEHiTyWO4+7Vr8oDV0bU6Ha6V00Xo/iUB1mE7dAoP6lbtpNugQMR345ZDKAIIn/MgbHO/T/IOVmfXOIhx+uHflxNgvm/aITpsdx+2KQKJcA2YKke29ocACw9ffDwkeQfjwB34yuaQDByB3Iizq6FyExiXgR2CfNtdywRY63Mvf5D48EjfF1FwETiji291zbB1QjkhAktRcALadG801gmAlxXZYrBh9kkLbooNWHK7EakFGyECbJ/BIcb8sjBuPLmdQwAvkQcSP9ghpxDA9vkMAnhuOoGAJp2I1j4EtlAWAV4gHXzmLQFu5OPcWijmDuzgcTxqyCcHBCwU8SIpVvgcIWBCx9ELkHyfHUHAkE6kEj+4kccQwLmXpsSP3MLTj8C5xA/O6A0hgKfmNOaObNxYwKBh4yqvsy8kXrBD8N4ydvPAoOCm2LD03tKgA15nb5rv3xmM09LCMxNgNvpHF68lPnTo+3+XMeGlhB+FtkQC5XIl+SF+8YK/EBCIwk0olbdvBPJVPc5X+atRKHPrbYxId4ccVo18LtVpHBcIrUbv5cNKWar7ECJsL+5WvFSnf9+SAAvPHzqFnn+3TzsZebQ8v6//DqU6g+8DeiPSF5yP3JsIq+On5Mn3iraa1m0xofPc0KmpPWxXW0wYbVAnW7bn+55RZpMPM3PHeyhC+WDpvq1hkxSI8wQKz/81NxSi7DZraN8KcDvtL1rRRCrAfP5V5kuXVuC592XS+1U3un1LMVzyFYlhWG3sRBlZRBC+bhrpVMIb5v1VlpFtBBgZEICQS6kPGXGZk6+UGdnmzx4QgtCHdtrLwkWtMnGHjQUwSAws4v5yw/0FLQyCePvDKyw8/lJHHuod9DdhY1PzlrwAAAAASUVORK5CYII='} // Replace with your not selected image base64
        alt="Terms accepted"
        className="mr-2"
        style={{ width: '17px', height: '17px' }} // Adjust size as needed
      />
      <label htmlFor="terms" className="text-[14px] font-medium font-sora text-[#999999] cursor-pointer leading-4">
        {t('terms.part1')} <Link href="/terms" className="text-white">{t('terms.part2')}</Link>
      </label>
    </div>
  );
};

export default TermsAccepts;
