'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'
import { ANDROID_APP_DOWNLOAD_LINK } from '@/config'

const AppDownload = () => {
    const { t } = useTranslation();
    
    return (
        <div 
            className="bg-[#151515] text-white min-h-screen w-full bg-full"
            style={{
                backgroundSize: '100% 100%',
                background: '#151515 url(/assets/Group31.3aab5f7f.png) no-repeat top'
            }}
        >
            <BackTitle
                title={t('appDownload.title')}
                back={true}
            />
            <div className="p-4 w-full text-center flex items-center justify-center flex-col">
                <div className="w-[80%] mt-[30px]">
                    <h2 className="font-sora text-white text-[24px] font-semibold leading-8">
                        {t('appDownload.subtitle')}
                    </h2>
                </div>

                <div className="mt-[50px] w-full flex flex-col items-center justify-center text-center">
                    <div className="w-[80%] flex flex-col items-center justify-center text-center">
                        <div className="flex flex-col w-full">
                            <button
                                type="submit"
                                className="w-[100%] mt-5 border border-[#9E7403] text-[#A06500] py-3 rounded-[13px] font-sora text-[14px] font-semibold hover:bg-transparent transition-colors h-[46px] flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(136deg, #FFEA8F, #FFD14D)',
                                }}
                                onClick={() => window.location.href = ANDROID_APP_DOWNLOAD_LINK}
                            >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAMAAAByk9E6AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvHZQPQAAABN0Uk5TAG/PEI//YFC/MK8g75/fX4A/fzuM2tQAAAIqSURBVHicxdl/b4IwEAbg66ogYWbZvv9ndDrGnFmwM0ihP+7aa2mUPwiB+CR9aa+1CBgPIcQARQ4xnjcChkLiCFbqdppEubmsB3cjNYmNEP1acHu/1qIU13zSBBfxpVNFwEW8NOJUAjRE2OZF6YCmCLucKF3QEnPa7YHQDP0sZpA+aIvJ7UZARwRVp5AY6IpJ7UZBV4Tmwh7gOOiJ/CgJ0Beh/WORFIiIvChJEBFv158rQExkRBkAURHaLjxVhEBcjEQZBHERmr9zLkiIoSgjICVCe8wESZGKMgqSon6QDAbEHulBDFCLlUJvZ4C4iHs8EBOnW638sQs6D/TF2Ts775sJuqLhgT10uKAt2h6YQ4cNmqLnwTJ0+OAiYt78OAHUP6k3mKf7eQpodT1/4MD+kAoaIuJB85UMziLmAVyHp4Olmxx5KbsuEdQdcYt3m1r1aWCkY9dyrBHFhp5S9/JdqDhIoa/KlC9jEVWgwNa9OTUUmAKUNfc9ZZIqPY3qMnj1HuRN9OTCQTbYAvnhiyXCq6sTsTJ+8IIT9/DwOCDqTVUlB8Q8Orw4iHnxnQ0aNDcfpiMYXgz0PbuqpIKeFw0vDHqelKv+gLve8BYPLwQ6Hi+8AOh4e154NGh77PBI0PI4mwIR0PSSwiNA01MqJTwcNLzU8FDQ2DJNDg8DZw+qQx43ga8X2/vNCc8EnY1xFdj04IHv34snqzWc/rjw0ZX9uHATj2U/fxQ8/gG+iIdhAi02wAAAAABJRU5ErkJggg=="
                                    className='w-[20px] h-[20px] mr-2'
                                />
                                {t('appDownload.googlePlay.label')}
                            </button>

                            <button
                                type="submit"
                                className="w-[100%] mt-5 border border-[#9E7403] text-[#A06500] py-3 rounded-[13px] font-sora text-[14px] font-semibold hover:bg-transparent transition-colors h-[46px] flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(136deg, #FFEA8F, #FFD14D)',
                                }}
                            >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANzSURBVHgB7ZzLcdswFEVPPovs4lRgpAKnA8vLrJwOyFTgdCB1IKcCJRU4HUipwHYFZCpwltkxfEPRtmyZBEiAIkCcmTua8ciGceeBD59HQFgclZqVWpa6LnVX6phIK2Lcgsqw4olOiTTyjf3G1fpEZC+q1JqXjat1ROQZElUZ7ebdEXmGmNc0ZB/risgOCr3Iq5UQ2cHEPJEico9kWxPzVkTuUcTo68UCM/OWRHYwiT75bpz7PWLGiIfua8bPucF301I5kR3W6K04EiJ7aVt1yDMvbhg00BR1c2LCaGXUxr1i/FxsP/+W2pT6w4gYwkBFNRURjqmMEBPyUjfYQ23bOaGKTrX9eb7VrYM2nSD/fEqVPXUSwIoHg02R5LHAfKLdp01nNJ1L6HZMlmBKox0Z1uuO7TxtM2EEtJ1LmErMkY7V05PHp20226m14kCbD9KxK+x36BDKGHhYK8y3mHxQwgAowjSv1hccIsM2A4qAJc9ZhQZddmN0MmUInOKAFL8iqYukpkbhAEX4Q1fMc7bGvgSKgOXUPAUUASujo3m6SWRG2JxRbXI4Q8Lbl2gy1RzHKKAIVBk90RnCJqdivrGgJzoGzgiX3/REx0BFmGywcIbcZqCk9lCPDH9hgTYDFeFi5WxEJwJDJccCUzbQyvHolA20gg/VWa6wEhxTNvA9FpiygVamZ20G5oSLwgJTNtDKyVtbcZE8aEN+3+wDPfcB2yJQ/nhOuFwwAKGUbuyTjK5e0xmdLJwTLnWlV2d0DLwlbKSyTOEQhV/DsuvWvtNlawYUgavTubDuSsTK5uPIkZXJGkeROMOvaOo7nBWWqSfUvphgQwssswKKiSmjZclnshvzk+mhaLk6yvRFm94zdw/5SMNiwnQ/8JJpscHySmxqySTBAUugmIAyHKGAYgJKcEjoUZjhmNCfhQmavKEb/0q9I8zSt7zUVwYiw6/I0tEJAzLDb7Oe6iBXRoWSUDIOuMoKoYr/oIWkCr+z8pwRkOKXabWu6UHXacw+6pLZGf6Ql/qM47eUTPmBH5Gn/VJ1E2+xT7r9TOhPzu52Un2hTt9sKRF3xsiLBuZ0iwqZFp3SbJJkTKkoyDq0Ib+j8IQUvU6uqQzpEllitm79zhLLc72hLh9LebhIRzpQV31tqM6ce79yxcPdWefsDvObrb7jIFn8BxxIaofnq/DzAAAAAElFTkSuQmCC"
                                    className='w-[20px] h-[20px] mr-2'
                                />
                                {t('appDownload.appStore.label')}
                            </button>
                        </div>
                        <p className="font-sora mt-3 text-white/50 text-[12px]  text-center leading-4">
                            {t('appDownload.note')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload