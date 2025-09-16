import { SITE_URL } from '@/config';
import { useInfoModal } from '@/context/InfoModalContext';
import { getProfileDetails } from '@/lib/api';
import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

export default function InviteCard() {
    const [profileData, setProfileData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [siteLink, setSiteLink] = useState<string>("");
    const { t } = useTranslation();

    const { setInfoText } = useInfoModal();

    // Fetch profile details on component mount
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getProfileDetails(); // Call the API to get profile details
                setProfileData(data.user);
                setSiteLink(`${SITE_URL}/user/reg?inviteCode=${data.user.invitationCode}`)
            } catch (error) {
                console.error('Error fetching profile details:', error);
            } finally {
                setIsLoading(false); // Stop the loading indicator
            }
        };

        fetchData();
    }, []);

    const handleCopyUrl = (text: string) => {
        setInfoText(t('global.copySuccess'));
        navigator.clipboard.writeText(text).then(() => {
        });
    }

    return (
        <>

            <div className="p-4 w-full text-center flex items-center justify-center flex-col">
                <div className="w-[80%] mt-[30px]">
                    <h2 className="font-sora text-white text-[24px] font-semibold leading-8 ">{t('invite.headline')}</h2>
                </div>

                <div className="mt-[50px]">
                    <div className="relative w-[230px] h-[230px]">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAAG4CAMAAAAAFAKBAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAALdQTFRFKgAELAADMAAEAAAASAAGngANggALZkcAe1YAoAAN/////9FvjmMAhAAK/09e/8XJ4ZoAzIsAZgAI/4mS/7ge/8Ay/2159gAVUjsA/8tc/8RGUjgA/xUo/7IL/6eu2gAS/8PIRgAG/+HjuH4A9KcA/zJCPi8A4Z0AZAAIvQAQZ0YA9acAe1MAo28AzI4A/4uV/6mw/+PlKgAEIAADKgAEKAADKAADKgAEIAADKgAEKgAEKgAEgAAKLoMTVgAAAD10Uk5T/98gAP////////////////////////////////////////////////////////////+/IN9AcKAQ72CP/5oTBlIAAAeYSURBVHic7d3rbxRVGIDxd9Nt7RYK2hRcoYmJRFIRAwGN/v/xEi/xgxpvaPADxZbLKhUotkXc2dvM7DJLSUjPeZLn+dDunoHsSX+ZeTvbpG2FAWq1WtMrSfZhL9uMXP9pOxu81n7Ea6l38+zfiKVniTdRq/iyzMj1n3VSf6nKDg5ieSHxHloPY/Vp4j3Ua+8WH6fk8oJbfHQYrx8k3cLSX7H2NO0Wpivg1npTcnnBRed+xPpewg2s3I04+zDhBp5TAXd6YUouM7hY3YluazfZy59ubcVGL9nLP78CbmVxSi43uMRjLr8BFyO4mJLLDi7pmMtwwMUYbkouO7iUYy7HARcTuLpcfnDpxlyWAy5KuJpchnDJxlyWAy4qcFW5HOESjbk8B1xU4SpyOcKlGXOZDriowZVyWcINxtzh8b5k5788B1zU4SZyecIVY+74y3LAxRTcWC5TuGLMHXd5DriYhiuvljnCxfrxb2ovywEXM3AjuUzhrGwabnA9Ei7/ZuCKbwGEyz/hoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aGu3hCO2uhPC8Tq7dVB8Eg7WyRM3B5+FQ9V91L9Mdk/8Lhyrs7f3++fc6onfhEN1/vBmXGzdireEIzW8TD59HMKhWl/5OeLC4/69t3CkxpfJIuEwdV/7KeLS3w+Gz4Sj1DkzuUwWCQfp/I2Ii3u9yXPhEA3e41pee1CuCIeo+FnAhe3qinCI+nDv/1FbEQ5RH259r7YiHCLhoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHLQ+3Bv7tRXhEPXhonvyz8qKcIgWF3pRpxMOUrtd0F3eHk864TDV6YQDNaT74P6DEA5WSSccrDHdinC0hnSXfhQO15BOOF6Lq48LOuF4LS7vCIesvSscMuGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBa4JbaifakB2tJrjYfHInzY7sSDXCRWz0UmzIjtYcOE+6nGuCW774XXjSZVwj3MLp1pYnXb41w0Vc8KTLt3lwMTzp9rfTbM3mNRdueNJduZFiYza/F8DFO98Ll2XCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGgvgms9FC7L5sN1uj+EcFk2D27AFu3Lv6bZms2rGW7E1j3zS5qd2dya4LrrsmVdE9zgmGz51gwnW9Y1wcmWeU1wnVaiDdnREg6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYcNOGgCQdNOGjCQRMOmnDQhIMmHDThoAkHTThowkETDppw0ISDJhw04aAJB004aMJBEw6acNCEgyYctMbfgn4+0YbsaN0+iNjoVVfKPxhhuffuVuWJcKBOHZaPC7hr36bbi71E7XP3Jo8LuOutbxLuxo5ee+PO+GEBt3Dt6/LYe+MLabuchRu7s2tNq/YKWhtfEzs79QObT8ZyA7i4/lV5bHwhXVzozfzzylrTqr2K3r47erB2q35gc397+GAIFx9+WR5TLoMa5ZY2hnIjuI8OK2NOuQxqlBsdGMHF1aUvymPKZVCj3Jv/FB/HcPHx55VjymVQo9zgLZQJXHzyWeWYchnUKFe8hVLCxZXqfbhyGdQo19epwF2t3Ycrl0FNcu1z9ypwUb0PVy6LGuU2tipwtftw5bKoSW5z/dMKXO0+XLksapxzUYWr3Ycrl0XNchW4+n14+T7yqfL/bN6OmbWmVXsVTd72f7JfP1CFq9+HW9bV4Or34ZZzdbj6fbhl3BTcVX8eDul/8ANbVXF2yMgAAAAASUVORK5CYII="
                                className="w-[230px] h-[230px]"
                            />
                        </div>
                        {!siteLink &&
                            <QRCode
                                value={"https://reelmint.avreels.com/reg?inviteCode=AVALO21"}
                                size={190}
                                fgColor="black" // Custom color
                                bgColor="transparent" // Transparent background
                                className="absolute top-[15px] left-[13px]"
                            />}
                        {siteLink &&
                            <QRCode
                                value={siteLink}
                                size={190}
                                fgColor="black" // Custom color
                                bgColor="transparent" // Transparent background
                                className="absolute top-[15px] left-[13px]"
                            />}

                    </div>
                </div>

                <div className="mt-[50px] w-full flex flex-col">
                    <div className="w-full flex  h-auto bg-[#302200db] items-center rounded-[13px] border border-[#ffedaa57] p-3 pl-4 pr-4 justify-between">
                        <div className="flex flex-col items-start justify-start text-left flex-1">
                            <span className="font-sora text-[16.5px] font-medium text-[#eebc7a]">{t('invite.invitationLink')}</span>
                            <p className="text-[14px] font-sora text-white font-medium mt-2 break-words"> {siteLink}</p>
                        </div>
                        <div className="w-[26px] h-[26px] flex flex-shrink-0"
                            onClick={() => { handleCopyUrl(siteLink) }}
                        >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAFdQTFRFAAAA8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz/sxh/cth/tBg/tBg/stf/cxi/s9f/tBg/sxh/s9h/cth/s9e/cth/tBg/tFZ/tBg8/Pz8/PzcbVagQAAAB10Uk5TADlZZlNATUYNGhMgv+//gK+/3xB/z7/fryC/Uj9h5Ix1AAABP0lEQVR4nOXW32+CMBAH8Lu2Ij/ULNlMfNj//6/NLNnDtmQKDk4oINAetPVhMdk9NC3pR8K3EA+hKUSsx1LPpR75OeJFb9cXonJ+42Su8gHFeAKfSqvzgALrPrQSeA4ScXVBReufIJQUhLILx78kPDoKFLo4lLWvYrfh0wtlYnKRUQx6qoBUvyg5xaAdKPzoFy8Fo5xBcModuaXsc2KSa9TXEmKT2+fLiE1uI5YRm5wbxe/DqnsaG8Gkpqh7GgNZ52Sgdvv/QEuR88hxTu32Z3UKR1uE9BiKdkCbt+A7JXJs/JBZrnePRdY5bZGi26dh5TaD6p9W8W31beQ2g4zP3chtBkG2qkbEyG0OedWj/6ndhQRGfi1OX2l+wLr7CGw+aP+HvVF7S+HX6iQ0at3Wv83o0STKYkCvR/JCRM0+uAJn7o6rKCZqYwAAAABJRU5ErkJggg=="
                                className="w-[26px] h-[26px]"
                            />
                        </div>
                    </div>
                    <div className="w-full flex mt-[20px]  h-auto bg-[#302200db] items-center rounded-[13px] border border-[#ffedaa57] p-3 pl-4 pr-4 justify-between">
                        <div className="flex flex-col items-start justify-start text-left flex-1">
                            <span className="font-sora text-[16.5px] font-medium text-[#eebc7a]">{t('invite.invitationCode')}</span>
                            <p className="text-[14px] font-sora text-white font-medium mt-2"> {profileData?.invitationCode}</p>
                        </div>
                        <div className="w-[26px] h-[26px] flex flex-shrink-0"
                            onClick={() => {
                                handleCopyUrl(profileData?.invitationCode)
                            }}
                        >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAFdQTFRFAAAA8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz/sxh/cth/tBg/tBg/stf/cxi/s9f/tBg/sxh/s9h/cth/s9e/cth/tBg/tFZ/tBg8/Pz8/PzcbVagQAAAB10Uk5TADlZZlNATUYNGhMgv+//gK+/3xB/z7/fryC/Uj9h5Ix1AAABP0lEQVR4nOXW32+CMBAH8Lu2Ij/ULNlMfNj//6/NLNnDtmQKDk4oINAetPVhMdk9NC3pR8K3EA+hKUSsx1LPpR75OeJFb9cXonJ+42Su8gHFeAKfSqvzgALrPrQSeA4ScXVBReufIJQUhLILx78kPDoKFLo4lLWvYrfh0wtlYnKRUQx6qoBUvyg5xaAdKPzoFy8Fo5xBcModuaXsc2KSa9TXEmKT2+fLiE1uI5YRm5wbxe/DqnsaG8Gkpqh7GgNZ52Sgdvv/QEuR88hxTu32Z3UKR1uE9BiKdkCbt+A7JXJs/JBZrnePRdY5bZGi26dh5TaD6p9W8W31beQ2g4zP3chtBkG2qkbEyG0OedWj/6ndhQRGfi1OX2l+wLr7CGw+aP+HvVF7S+HX6iQ0at3Wv83o0STKYkCvR/JCRM0+uAJn7o6rKCZqYwAAAABJRU5ErkJggg=="
                                className="w-[26px] h-[26px]"
                            />
                        </div>
                    </div>
                </div>

            </div>
            {isLoading &&
                <DefaultLoading />}
        </>
    )
}