import React, { CSSProperties } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */

interface IconDetailProps {
    className?: string;
    style?: CSSProperties;
}

export const AnnouncementIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 81 26"
            fill="none"
            aria-hidden="true"
            className="app-svg-icon icon "
        >
            <rect x="7" y="15" width="74" height="7" rx="3.5" fill="#17CE92"></rect>
            <path d="M12.786 25C6.276 25 1 19.627 1 13S6.277 1 12.786 1C15.98 1 18.877 2.294 21 4.395" stroke="url(#icon-announcement_a)" stroke-width="2" stroke-linecap="round"></path>
            <g filter="url(#icon-announcement_b)" fill="#fff">
                <path d="m15.094 8.612-.806.164a.485.485 0 0 1-.226-.04c-.05-.028-.075-.085-.075-.172 0-.21.212-.485.635-.827.424-.341 1.003-.656 1.737-.943.738-.287 1.401-.43 1.989-.43.593 0 1.014.102 1.265.307.255.205.383.604.383 1.196l-.021.308c.907-.702 1.72-1.203 2.44-1.504.72-.3 1.425-.451 2.113-.451.692 0 1.226.146 1.6.437.373.287.56.704.56 1.251 0 .56-.264 1.459-.793 2.694-.219.51-.438 1.016-.656 1.517-.529 1.222-.793 2.017-.793 2.386 0 .656.325 1.041.977 1.155.351.06.554.126.609.198a.328.328 0 0 1 .082.206c0 .323-.354.606-1.06.847-.702.242-1.488.362-2.358.362-1.714 0-2.57-.508-2.57-1.524 0-.71.245-1.647.738-2.81.205-.487.41-.963.615-1.428.492-1.117.738-1.896.738-2.338 0-.447-.344-.67-1.032-.67-.401 0-.852.141-1.354.424-.223.88-.704 2.187-1.442 3.924-.674 1.576-1.012 2.684-1.012 3.322l.02.451c0 .141-.077.253-.232.335a1.024 1.024 0 0 1-.485.123l-2.741.041c-.506 0-.814-.087-.923-.26-.05-.086-.075-.218-.075-.396 0-.182.038-.44.116-.773.077-.337.324-.995.738-1.975.42-.985.8-1.9 1.142-2.748.346-.848.52-1.406.52-1.675 0-.274-.03-.456-.09-.547-.059-.091-.15-.137-.273-.137ZM29.497 16.542c-.857-.515-1.285-1.297-1.285-2.345 0-.547.111-1.06.335-1.538.228-.483.537-.9.93-1.25.396-.352.856-.652 1.38-.903 1.048-.506 2.25-.759 3.603-.759 2.661 0 4.1.843 4.313 2.53.32.104.647.157.985.157.341 0 .626-.025.854-.076a2.75 2.75 0 0 0 .643-.225c.205-.1.35-.15.437-.15.173 0 .26.084.26.252 0 .169-.134.344-.403.527-.506.346-1.176.52-2.01.52-.315 0-.57-.017-.766-.049-.146 1.149-.738 2.104-1.777 2.865-.497.364-1.108.651-1.832.861-.72.21-1.468.314-2.242.314-.77 0-1.431-.061-1.983-.184a4.705 4.705 0 0 1-1.442-.547Zm2.481-1.743c0 .843.308 1.265.923 1.265.392 0 .757-.215 1.094-.643.342-.428.606-.96.793-1.593a6.653 6.653 0 0 0 .287-1.934c0-.661-.23-.992-.69-.992-.401 0-.791.19-1.17.568-.373.378-.674.87-.902 1.476a5.283 5.283 0 0 0-.335 1.853Z"></path>
                <path d="m46.812 10.041 1.798-.232c.337 0 .505.132.505.396s-.159.43-.478.5c-.319.063-1.04.15-2.16.259a46.86 46.86 0 0 1-.697 1.688c-.634 1.477-.95 2.363-.95 2.66 0 .323.2.485.6.485 1.295 0 2.457-.217 3.487-.65a.987.987 0 0 1 .356-.095c.168 0 .253.075.253.225 0 .15-.11.299-.329.445-.67.442-1.679.81-3.028 1.107-1.349.296-2.593.444-3.732.444-.647 0-1.142-.1-1.484-.3-.341-.205-.512-.486-.512-.841 0-.36.237-1.032.71-2.017.534-1.103.917-2.071 1.15-2.905-.284.014-.48.02-.589.02-.269 0-.403-.109-.403-.328 0-.16.043-.266.13-.32a.914.914 0 0 1 .266-.117c.096-.023.176-.037.24-.041.068-.01.161-.018.28-.027l.26-.021c.059-.346.089-.672.089-.978l-.007-.26c0-.204.26-.343.779-.416.173-.023.718-.137 1.634-.342.916-.205 1.476-.308 1.681-.308.328 0 .493.114.493.342 0 .392-.114.934-.342 1.627Z"></path>
                <path d="M55.821 7.361c0 .488-.271.914-.813 1.279-.538.36-1.108.54-1.71.54-.596 0-1.061-.121-1.394-.363-.333-.246-.499-.544-.499-.895s.128-.67.383-.957c.255-.287.585-.513.991-.677.41-.164.854-.246 1.333-.246.478 0 .882.128 1.21.383.333.25.499.563.499.936Zm-1.92 8.484c.309 0 .728-.073 1.257-.219.533-.15.92-.283 1.162-.396.242-.119.41-.178.506-.178.191 0 .287.096.287.287 0 .086-.07.184-.212.294-.465.346-1.301.706-2.509 1.08-1.207.374-2.285.56-3.233.56-.588 0-1.08-.093-1.477-.28-.396-.187-.594-.471-.594-.854 0-.233.198-.802.594-1.71.748-1.717 1.121-3.012 1.121-3.882l-.006-.26c0-.228.22-.342.663-.342l3.377-.075c.118 0 .207.037.266.11.06.068.09.145.09.232 0 .314-.145.834-.432 1.559-.287.72-.574 1.428-.86 2.125-.288.698-.432 1.197-.432 1.498 0 .3.144.45.431.45Z"></path>
                <path d="M61.084 12.536c-.21.56-.314 1.076-.314 1.545 0 .47.047.82.143 1.053.096.228.24.403.43.526.653.41 1.942.433 3.87.069.916-.174 1.581-.329 1.996-.465.42-.142.665-.212.738-.212.16 0 .24.077.24.232 0 .155-.121.312-.363.472-.638.415-1.538.772-2.7 1.073-1.162.296-2.46.444-3.896.444-1.431 0-2.518-.255-3.261-.765-.743-.51-1.114-1.217-1.114-2.12 0-.56.116-1.088.348-1.585.237-.497.559-.928.964-1.292.41-.37.887-.688 1.429-.957 1.084-.538 2.315-.807 3.691-.807 1.605 0 2.73.185 3.377.554.073.059.11.17.11.335 0 .16-.071.426-.212.8-.142.373-.328.72-.56 1.039-.229.319-.438.478-.63.478-.191 0-.344-.102-.458-.307-.114-.206-.21-.372-.287-.5a4.604 4.604 0 0 0-.321-.464 2.076 2.076 0 0 0-.39-.404 1.795 1.795 0 0 0-.437-.239 1.736 1.736 0 0 0-.636-.102 1.44 1.44 0 0 0-.745.225 1.879 1.879 0 0 0-.609.574c-.16.233-.294.5-.403.8Z"></path>
                <path d="M79.021 15.052c.16 0 .24.075.24.225 0 .146-.11.283-.329.41-.214.123-.48.258-.8.404-.319.141-.758.31-1.319.506-1.29.45-2.746.676-4.368.676-3.08 0-4.621-.947-4.621-2.843 0-.925.291-1.746.875-2.461.588-.72 1.374-1.27 2.358-1.648.985-.383 2.058-.574 3.22-.574 1.162 0 2.012.18 2.55.54.542.36.813.855.813 1.483 0 .648-.26 1.176-.78 1.586-.514.41-1.2.716-2.057.917-.861.2-1.848.341-2.96.423.073.707.58 1.146 1.518 1.32.241.04.497.061.765.061 1.067 0 2.605-.321 4.615-.964a.978.978 0 0 1 .28-.061Zm-7.17-1.108c.792-.218 1.419-.553 1.88-1.005.46-.45.69-.995.69-1.633a.52.52 0 0 0-.165-.404c-.109-.1-.275-.15-.499-.15-.218 0-.449.096-.69.287a2.382 2.382 0 0 0-.602.752 5.397 5.397 0 0 0-.615 2.153Z"></path>
            </g>
            <defs>
                <linearGradient id="icon-announcement_a" x1="12.071" y1="28.273" x2="19.09" y2="1.789" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#17CE92" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="#17CE92"></stop>
                </linearGradient>
                <filter id="icon-announcement_b" x="12.941" y="6.042" width="67.32" height="12.231" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_752_6805"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_752_6805" result="shape"></feBlend>
                </filter>
            </defs>
        </svg>
    )
}

export const RightIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 25 25"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="m16.04 11.757-5.66-5.65a1 1 0 1 0-1.42 1.41l4.95 5-4.95 4.95a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3.999.999 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"
                fill="#fff"
                opacity=".5"
            />
        </svg>
    );
};

export const TimelineIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 44 44"
            fill="none"
            aria-hidden="true"
            className="w-11 h-11 text-white"
        >
            <path
                d="M22.5 32.135c5.576 0 10.185-4.6 10.185-10.186 0-5.576-4.609-10.185-10.195-10.185-5.175 0-9.502 3.955-10.097 8.984a5.636 5.636 0 0 1 2.285-.098A7.88 7.88 0 0 1 22.49 14a7.946 7.946 0 0 1 7.96 7.95 7.931 7.931 0 0 1-10.587 7.49 5.684 5.684 0 0 1-1.181 1.943 9.97 9.97 0 0 0 3.818.752Zm0-14.404c.547 0 .996-.46.996-.997a.996.996 0 0 0-.996-1.006c-.537 0-.996.45-.996 1.006 0 .537.45.996.996.996Zm2.803.947c.556 0 1.006-.45 1.006-1.006a1 1 0 1 0-1.006 1.006Zm-5.703 0a.99.99 0 0 0 .996-1.006.994.994 0 0 0-.996-.996c-.557 0-1.006.449-1.006.996 0 .556.449 1.006 1.006 1.006Zm-1.758 2.168c.556 0 1.006-.45 1.006-1.006a1 1 0 1 0-1.006 1.006Zm9.228.02c.557 0 .996-.45.996-.997a.996.996 0 0 0-.996-1.006 1 1 0 0 0 0 2.002Zm-4.57 7.02a1.667 1.667 0 0 0 .703-3.184v-4.276c0-.41-.303-.733-.703-.733-.39 0-.703.323-.703.733v4.277c-.567.264-.967.84-.967 1.504 0 .928.742 1.68 1.67 1.68Zm-8.643 4.259c2.754 0 5.079-2.305 5.079-5.079 0-2.783-2.295-5.078-5.079-5.078-2.783 0-5.078 2.295-5.078 5.078 0 2.784 2.295 5.079 5.078 5.079Zm0-1.836c-.439 0-.722-.284-.722-.713v-1.807h-1.807c-.42 0-.713-.283-.713-.723 0-.43.283-.712.713-.712h1.807v-1.807c0-.42.283-.713.722-.713.43 0 .713.283.713.713v1.806h1.807c.43 0 .713.284.713.713 0 .44-.283.723-.713.723H14.57v1.807c0 .43-.283.713-.713.713Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const BookIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 45 44"
            fill="none"
            aria-hidden="true"
            className="w-11 h-11 text-white"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 16.152v13.157c.992-.445 2.404-.909 4-.909 1.59 0 3 .46 4 .91V16.151a9.156 9.156 0 0 0-.863-.438C19.31 15.35 18.204 15 17 15c-1.736 0-3.26.725-4 1.152Zm10 0v13.206c.998-.423 2.41-.858 4-.858 1.596 0 3.01.438 4 .858V16.152C30.26 15.725 28.736 15 27 15c-1.204 0-2.312.349-3.137.714a9.18 9.18 0 0 0-.863.438Zm-1-1.732c-.27-.156-.627-.345-1.053-.534C19.967 13.45 18.574 13 17 13c-2.308 0-4.238.97-5.076 1.464A1.9 1.9 0 0 0 11 16.112v13.912c0 .624.37 1.097.795 1.335.422.235.99.298 1.507.026.823-.432 2.181-.985 3.698-.985 1.905 0 3.552.873 4.185 1.262a1.58 1.58 0 0 0 1.61.023C23.432 31.32 25.084 30.5 27 30.5c1.541 0 2.917.53 3.737.937.952.47 2.263-.156 2.263-1.378V16.112a1.9 1.9 0 0 0-.924-1.648C31.238 13.971 29.308 13 27 13c-1.574 0-2.966.451-3.947.886-.426.189-.783.378-1.053.534Z"
                fill="#fff"
            />
        </svg>
    );
};


export const InviteIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 45 44"
            fill="none"
            aria-hidden="true"
            className="w-11 h-11 text-white"
        >
            <path
                d="m32.625 22.672 2.704-1.352a.877.877 0 0 0 .384-1.187l-2.69-5.152a.875.875 0 0 0-1.167-.377l-2.73 1.365m3.5 6.703-3.5-6.703m3.5 6.703-1.75 2.047m-1.75-8.75h-4.451a.874.874 0 0 0-.619.257l-4.28 4.28a.875.875 0 0 0 .094 1.319l.593.444a3.5 3.5 0 0 0 4.2 0l1.4-1.05 4.812 3.5m0 0-4.025 4.025a.875.875 0 0 1-.83.23l-6.34-1.585a.877.877 0 0 1-.326-.16l-5.979-4.674m0 0-2.703-1.352a.874.874 0 0 1-.385-1.188l2.69-5.15a.875.875 0 0 1 1.167-.379l2.731 1.366-3.5 6.703Zm7.875 8.727-3.296-.824a.876.876 0 0 1-.362-.189l-2.467-2.144m1.813-12.273 5.613-1.636a.875.875 0 0 1 .606.043l3.78 1.71"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const AboutUsIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 44 44"
            fill="none"
            aria-hidden="true"
            className="w-11 h-11 text-white"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m23.136 11.427 5.406 2.026c1.245.465 2.264 1.939 2.285 3.26v8.05c0 1.278-.845 2.957-1.874 3.726l-4.658 3.478c-1.528 1.148-4.04 1.148-5.568 0l-4.659-3.478c-1.029-.769-1.874-2.448-1.874-3.727v-8.049c0-1.321 1.018-2.795 2.264-3.26l5.406-2.026c.9-.336 2.373-.336 3.272 0Zm.607 7.507a2.321 2.321 0 0 0-2.319-2.318 2.303 2.303 0 0 0-2.296 2.318c0 1.257.974 2.264 2.274 2.308H21.512a2.301 2.301 0 0 0 2.232-2.308ZM19 22a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 0 0-5h-5Z"
                fill="#fff"
            />
        </svg>
    );
};

export const TodayFundIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="w-9 h-9 text-white"
        >
            <circle cx="18" cy="18" r="17.5" fill="#E6EDFC" fill-opacity=".1"></circle><circle cx="18" cy="18" r="17.5" stroke="url(#icon-todayfund_a)" style={{ mixBlendMode: 'overlay' }}></circle><path d="m13.364 18.818 3-3 2.454 2.455 3.819-3.818" stroke="#17ce92" stroke-width="1.5" stroke-linecap="round"></path><path d="M14.182 22.09v2.183M16.91 20.455v4.09M19.637 21.545v3M22.364 19.636v4.91M8.727 11.455H27" stroke="#fff" stroke-opacity=".9" stroke-width="1.5" stroke-linecap="round"></path><path stroke="#fff" stroke-opacity=".9" stroke-width="1.5" stroke-linejoin="round" d="M10.909 11.455h14.182v13.091H10.909z"></path><defs><linearGradient id="icon-todayfund_a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs>
        </svg>
    );
};

export const TotalFundIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="w-9 h-9 text-white"
        >
            <circle cx="18" cy="18" r="17.5" fill="#E6EDFC" fillOpacity="0.1" />
            <circle cx="18" cy="18" r="17.5" stroke="url(#icon-totalfund_a)" style={{ mixBlendMode: 'overlay' }} />
            <path
                d="M14.58 12.877A7.097 7.097 0 0 0 10.993 18h-.628a1.09 1.09 0 0 0 0 2.182h.628a7.075 7.075 0 0 0 2.099 4.026v.883a2.182 2.182 0 0 0 4.098 1.045 7.153 7.153 0 0 0 1.622 0 2.181 2.181 0 0 0 4.098-1.045v-.883a7.112 7.112 0 0 0 1.41-1.895 2.455 2.455 0 0 0 2.954-2.404v-1.636a2.455 2.455 0 0 0-2.955-2.404 7.11 7.11 0 0 0-1.273-1.76 1.08 1.08 0 0 0-1.595-1.452l-.154.154a7.054 7.054 0 0 0-.945-.412"
                stroke="currentColor"
                strokeOpacity="0.9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ stroke: '#fff' }}
            />
            <circle cx="21.545" cy="18.273" r="0.818" fill="#fff" fillOpacity="0.9" />
            <circle cx="17.454" cy="12.546" r="2.727" stroke="#58C591" strokeWidth="1.5" />
            <defs>
                <linearGradient id="icon-totalfund_a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};


export const StatisIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 49 49"
            fill="none"
            aria-hidden="true"
            className="w-[3rem] h-[3rem] text-white"
        >
            <g stroke="currentColor" strokeWidth="3.046">
                <path d="M22.4 12.47c0-1.122-.913-2.045-2.026-1.905A16.247 16.247 0 1 0 38.52 28.712c.14-1.113-.782-2.026-1.904-2.026h-11.17A3.046 3.046 0 0 1 22.4 23.64V12.47Z"></path>
                <path d="M28.492 8.408c0-1.122.914-2.046 2.024-1.886a14.215 14.215 0 0 1 12.048 12.047c.16 1.11-.764 2.024-1.886 2.024H30.523a2.03 2.03 0 0 1-2.03-2.03V8.407Z"></path>
            </g>
        </svg>
    );
};

export const NodeIcon: React.FC = () => {
    return (
        <svg
            viewBox="0 0 41 41"
            fill="none"
            aria-hidden="true"
            className="w-[3rem] h-[3rem] text-white"
        >
            <path
                d="M10.892 13.8a2.682 2.682 0 0 1-1.897-4.58 2.683 2.683 0 1 1 1.897 4.58Zm0-10.183a7.469 7.469 0 0 0-7.5 7.5c0 5.617 7.5 13.934 7.5 13.934s7.5-8.317 7.5-13.934c0-4.166-3.333-7.5-7.5-7.5Zm18.334 10.184a2.683 2.683 0 1 1 0-5.366 2.683 2.683 0 0 1 0 5.366Zm0-10.184a7.469 7.469 0 0 0-7.5 7.5c0 5.617 7.5 13.934 7.5 13.934s7.5-8.317 7.5-13.934c0-4.166-3.334-7.5-7.5-7.5Zm0 23.334c-2.117 0-4 1.333-4.7 3.333h-8.934a5 5 0 0 0-9.709 1.399 5.004 5.004 0 0 0 .276 1.934 5.028 5.028 0 0 0 6.4 3.05c1.417-.5 2.5-1.633 3.033-3.05h8.95c.917 2.6 3.784 3.967 6.35 3.05a4.999 4.999 0 0 0 3.084-6.383 5.04 5.04 0 0 0-4.75-3.333Zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                fill="#fff"
            ></path>
        </svg>
    );
};

export const MoreIcon: React.FC = () => {
    return (
        <svg
            className="w-[1.625rem] h-[1.625rem]"
            aria-hidden="true"
            viewBox="0 0 29 29"
            fill="none"
        >
            <g opacity="0.7">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.209 2.01H9.46c-.766 0-1.387.62-1.387 1.386v7.558a3.698 3.698 0 0 1 2.887 6.543h.87a1.56 1.56 0 0 1 0 3.12h-.132a1.156 1.156 0 0 1 .162 1.985 1.676 1.676 0 0 1 1.39 1.945h10.31c.767 0 1.388-.621 1.388-1.387V6.109a.69.69 0 0 1-.463.177h-3.582a.693.693 0 0 1-.694-.694V2.01Z"
                    fill="#fff"
                ></path>
                <path
                    d="M21.25 2.01H22l1.734 1.444 1.214.982v.694h-3.699V2.01Z"
                    fill="#fff"
                ></path>
                <circle cx="8.651" cy="14.607" r="2.658" fill="#fff"></circle>
                <rect
                    x="8.23"
                    y="12.8"
                    width="1.04"
                    height="2.51"
                    rx="0.52"
                    transform="rotate(45 8.23 12.8)"
                    fill="#000"
                ></rect>
                <rect
                    x="10.289"
                    y="13.281"
                    width="1.04"
                    height="3.943"
                    rx="0.52"
                    transform="rotate(45 10.289 13.281)"
                    fill="#000"
                ></rect>
                <rect
                    x="5.068"
                    y="18.19"
                    width="7.281"
                    height="1.618"
                    rx="0.809"
                    fill="#fff"
                ></rect>
                <rect
                    x="4.028"
                    y="20.848"
                    width="7.281"
                    height="1.618"
                    rx="0.809"
                    fill="#fff"
                ></rect>
                <rect
                    x="5.068"
                    y="23.391"
                    width="7.281"
                    height="1.618"
                    rx="0.809"
                    fill="#fff"
                ></rect>
                <rect
                    x="10.269"
                    y="4.552"
                    width="5.085"
                    height="1.156"
                    rx="0.578"
                    fill="#000"
                ></rect>
                <rect
                    x="10.269"
                    y="6.632"
                    width="6.357"
                    height="1.156"
                    rx="0.578"
                    fill="#000"
                ></rect>
                <rect
                    x="10.269"
                    y="8.713"
                    width="11.558"
                    height="1.156"
                    rx="0.578"
                    fill="#000"
                ></rect>
                <path
                    d="m16.193 15.492 3.514-3.514m0 0h-2.37m2.37 0v2.37"
                    stroke="currentColor"
                    strokeWidth="1.156"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <rect
                    x="15.586"
                    y="17.612"
                    width="2.08"
                    height="3.236"
                    rx="0.462"
                    stroke="#000"
                    strokeWidth="1.156"
                ></rect>
                <rect
                    x="19.747"
                    y="15.994"
                    width="2.08"
                    height="4.854"
                    rx="0.462"
                    stroke="#000"
                    strokeWidth="1.156"
                ></rect>
                <path
                    d="M22.867 20.906h-8.9"
                    stroke="#000"
                    strokeWidth="1.156"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </svg>
    );
};

export const EmptyIcon: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{
                width: '250px',       // Adjust width as needed
                height: '129px',      // Adjust height as needed
                backgroundImage: "url('/assets/empty-icon.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Your content goes here */}
            {/* This is where you can place additional content, like text or an overlay */}
        </div>
    );
};

export const EmptyIcon2: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{
                width: '289.86px',       // Adjust width as needed
                height: '150px',      // Adjust height as needed
                backgroundImage: "url('/assets/empty-icon.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Your content goes here */}
            {/* This is where you can place additional content, like text or an overlay */}
        </div>
    );
};


export const IconSettings: React.FC = () => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px] text-white"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.43 10.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.503.503 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98L12.49.42A.488.488 0 0 0 12 0H8c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98L.46 12.63c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65ZM10 13.5c-1.93 0-3.5-1.57-3.5-3.5S8.07 6.5 10 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z"
                fill="#fff"
            />
        </svg>
    );
}

export const USDTIcon: React.FC = () => {
    return (

        <svg
            className="w-[20px] h-[20px]" // Adjust width and height as needed
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
                fill="#26A17B"
            />
            <path
                d="M12.172 12.015v-.002a21.79 21.79 0 0 1-1.342.029c-.698 0-1.188-.02-1.362-.029v.002c-2.686-.118-4.69-.585-4.69-1.146 0-.559 2.006-1.027 4.69-1.146v1.827c.176.012.68.042 1.375.042.834 0 1.252-.035 1.33-.042V9.725c2.68.12 4.679.587 4.679 1.146 0 .559-2 1.026-4.68 1.146m0-2.481V7.902h3.74V5.41H5.73v2.492h3.74v1.634c-3.04.14-5.325.74-5.325 1.462s2.287 1.323 5.325 1.465V17.7h2.704v-5.239c3.035-.14 5.316-.74 5.316-1.462 0-.72-2.281-1.323-5.316-1.463"
                fill="#fff"
            />
        </svg>

    );
}

export const USDTIconBig: React.FC = () => {
    return (

        <svg
            className="w-[30px] h-[30px]" // Adjust width and height as needed
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
                fill="#26A17B"
            />
            <path
                d="M12.172 12.015v-.002a21.79 21.79 0 0 1-1.342.029c-.698 0-1.188-.02-1.362-.029v.002c-2.686-.118-4.69-.585-4.69-1.146 0-.559 2.006-1.027 4.69-1.146v1.827c.176.012.68.042 1.375.042.834 0 1.252-.035 1.33-.042V9.725c2.68.12 4.679.587 4.679 1.146 0 .559-2 1.026-4.68 1.146m0-2.481V7.902h3.74V5.41H5.73v2.492h3.74v1.634c-3.04.14-5.325.74-5.325 1.462s2.287 1.323 5.325 1.465V17.7h2.704v-5.239c3.035-.14 5.316-.74 5.316-1.462 0-.72-2.281-1.323-5.316-1.463"
                fill="#fff"
            />
        </svg>

    );
}

export const USDTIconBig2: React.FC = () => {
    return (

        <svg
            className="w-[28px] h-[28px]" // Adjust width and height as needed
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
                fill="#26A17B"
            />
            <path
                d="M12.172 12.015v-.002a21.79 21.79 0 0 1-1.342.029c-.698 0-1.188-.02-1.362-.029v.002c-2.686-.118-4.69-.585-4.69-1.146 0-.559 2.006-1.027 4.69-1.146v1.827c.176.012.68.042 1.375.042.834 0 1.252-.035 1.33-.042V9.725c2.68.12 4.679.587 4.679 1.146 0 .559-2 1.026-4.68 1.146m0-2.481V7.902h3.74V5.41H5.73v2.492h3.74v1.634c-3.04.14-5.325.74-5.325 1.462s2.287 1.323 5.325 1.465V17.7h2.704v-5.239c3.035-.14 5.316-.74 5.316-1.462 0-.72-2.281-1.323-5.316-1.463"
                fill="#fff"
            />
        </svg>

    );
}

export const USDTIconBig3: React.FC = () => {
    return (

        <svg
            className="w-[24px] h-[24px]" // Adjust width and height as needed
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
                fill="#26A17B"
            />
            <path
                d="M12.172 12.015v-.002a21.79 21.79 0 0 1-1.342.029c-.698 0-1.188-.02-1.362-.029v.002c-2.686-.118-4.69-.585-4.69-1.146 0-.559 2.006-1.027 4.69-1.146v1.827c.176.012.68.042 1.375.042.834 0 1.252-.035 1.33-.042V9.725c2.68.12 4.679.587 4.679 1.146 0 .559-2 1.026-4.68 1.146m0-2.481V7.902h3.74V5.41H5.73v2.492h3.74v1.634c-3.04.14-5.325.74-5.325 1.462s2.287 1.323 5.325 1.465V17.7h2.704v-5.239c3.035-.14 5.316-.74 5.316-1.462 0-.72-2.281-1.323-5.316-1.463"
                fill="#fff"
            />
        </svg>

    );
}

export const IconRight: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{
                width: '50px',
                height: '50px',
                background: "url('/assets/right-46fb2b85.svg') right no-repeat",
            }}
        >
            {/* Your content goes here */}
            {/* This is where you can place additional content, like text or an overlay */}
        </div>
    );
};


export const IconMyDevice: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{
                width: '24px',  // Adjust the width as needed
                height: '24px', // Adjust the height as needed
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="100%"
                height="100%"
            >
                <path
                    d="M22 14.86v-.05a2.608 2.608 0 0 0-.1-.57l-1.64-9.73a3 3 0 0 0-3-2.51H6.69a3 3 0 0 0-2.95 2.51l-1.62 9.71a2.61 2.61 0 0 0-.1.57v.05C2 14.91 2 15 2 15v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.14ZM5.71 4.83a1 1 0 0 1 1-.83h10.6a1 1 0 0 1 1 .83l1.2 7.22A2.638 2.638 0 0 0 19 12H5a2.635 2.635 0 0 0-.49.05l1.2-7.22ZM20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3.92l.08-.46A1 1 0 0 1 5 14h14a1 1 0 0 1 .92.62l.08.46V19Zm-3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                    fill="#949A9F"
                />
            </svg>
        </div>
    );
};

export const IconMyTeam: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{
                width: '24px',  // Adjust the width as needed
                height: '17px', // Adjust the height as needed
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 17"
                fill="none"
                width="100%"
                height="100%"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 2.995a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 8.654 3.413 8.095 8.095 0 0 1 4.172 3.12 1 1 0 0 1-1.652 1.126c-.976-1.432-2.756-2.659-5.174-2.659-3.834 0-6 3.074-6 5a1 1 0 0 1-2 0c0-.692.158-1.43.46-2.157a1.005 1.005 0 0 1-.21-.183c-.822-.934-2.096-1.66-3.75-1.66s-2.928.726-3.749 1.66a1 1 0 0 1-1.5-1.32 6.871 6.871 0 0 1 2.107-1.62 4.5 4.5 0 1 1 6.286 0 6.87 6.87 0 0 1 1.865 1.358 8.099 8.099 0 0 1 2.484-2.083A4.992 4.992 0 0 1 11 5.995Zm-8 1.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
                    fill="#949A9F"
                />
            </svg>
        </div>
    );
};

export const IconMyOrder: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{
                width: '24px',  // Adjust the width as needed
                height: '24px', // Adjust the height as needed
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="100%"
                height="100%"
            >
                <path
                    d="M16 14H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0-4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm4-6h-3V3a1 1 0 0 0-2 0v1h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1Zm-1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2v1a1 1 0 0 0 2 0V6h2v13Z"
                    fill="#949A9F"
                />
            </svg>
        </div>
    );
};

export const IconMyShare: React.FC = () => {
    return (
        <div
            className="flex justify-center items-center"
            style={{
                width: '24px',  // Adjust the width as needed
                height: '24px', // Adjust the height as needed
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 19"
                fill="none"
                width="100%"
                height="100%"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 2.994a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 1.707 2.707l-2 2c.188.391.293.83.293 1.293 0 .463-.105.902-.293 1.293l2 2a3 3 0 1 1-1.414 1.414l-2-2a3 3 0 1 1 0-5.415l2-1.999A2.99 2.99 0 0 1 6 3.994Zm-3 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 6a.994.994 0 0 0-.707.293A1 1 0 1 0 9 14.994Z"
                    fill="#949A9F"
                />
            </svg>
        </div>
    );
};

export const IconMyIdCard: React.FC = () => {
    return (
        <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 2.995a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1H3Zm-3 1a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-12Zm6 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4.176 2.257a3.5 3.5 0 1 0-5.351 0C3.681 11.493 3 12.702 3 13.995a1 1 0 1 0 2 0c0-.886.8-2 2.5-2s2.5 1.114 2.5 2a1 1 0 0 0 2 0c0-1.293-.682-2.5-1.824-3.243ZM13 5.995a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm1 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Z"
                fill="#949A9F"
            />
        </svg>
    );
};

export const IconMyService: React.FC = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 21 22"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
        >
            <path
                d="M19.137 10h-3a1.5 1.5 0 0 0-1.5 1.5v3.75a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5m0-5.25v5.25m0-5.25a9.001 9.001 0 0 0-9.069-9A9 9 0 0 0 1 10m18.137 5.25v2.25a3 3 0 0 1-3 3H10.75M1 10v5.25a1.5 1.5 0 0 0 1.5 1.5H4a1.5 1.5 0 0 0 1.5-1.5V11.5A1.5 1.5 0 0 0 4 10H1Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={.6}
            />
        </svg>
    );
};

export const IconMyTaskCenter: React.FC = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
        >
            <path
                d="M7.5 10h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm4 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm0-4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm6.92-2.62a1 1 0 0 0-.21-1.09l-6-6a1.071 1.071 0 0 0-.28-.19.32.32 0 0 0-.09 0l-.28-.1H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h4a1 1 0 0 0 .92-.62ZM13.5 8a1 1 0 0 1-1-1V5.41L15.09 8H13.5Zm7 4h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 .53.88 1 1 0 0 0 1-.05l1.97-1.3 2 1.3a1 1 0 0 0 1.5-.83v-8a1 1 0 0 0-1-1Zm-1 7.12-.94-.63a1 1 0 0 0-1.12 0l-.94.63V14h3v5.12Z"
                fill="#949A9F"
            />
        </svg>
    );
};

export const IconPool: React.FC = () => {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.427 1.184a1 1 0 0 1 1.146 0l10 7a1 1 0 0 1 .427.82v7a1 1 0 0 1-.427.82l-10 6.999a1 1 0 0 1-1.146 0l-10-7a1.001 1.001 0 0 1-.427-.82v-7a1 1 0 0 1 .427-.82l10-6.999ZM3 10.924v3.16l2.256-1.58L3 10.924Zm4 2.8-3.256 2.28L11 21.083v-4.56l-4-2.8Zm6 2.8v4.56l7.256-5.08L17 13.723l-4 2.8Zm5.744-4.02L21 14.084v-3.16l-2.256 1.58Zm1.512-3.5L17 11.284l-4-2.8v-4.56l7.256 5.08ZM11 3.924v4.56l-4 2.8-3.256-2.28L11 3.924Zm1 6.3-3.256 2.28L12 14.784l3.256-2.28L12 10.224Z"
                fill="#949A9F"
            />
        </svg>
    );
};

export const IconLang: React.FC = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16Zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z"
                fill="#949A9F"
            />
        </svg>
    );
};

export const IconMyAboutUs: React.FC = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 18 19"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 6.995a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm7.824 4.623a6 6 0 1 0-7.649 0C1.986 12.741 0 15.242 0 17.995a1 1 0 1 0 2 0c0-2.27 2.355-5 7-5s7 2.73 7 5a1 1 0 0 0 2 0c0-2.753-1.984-5.254-5.176-6.377Z"
                fill="#949A9F"
            />
        </svg>
    );
};

export const IconMyAboutUs2: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 18 19"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 6.995a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm7.824 4.623a6 6 0 1 0-7.649 0C1.986 12.741 0 15.242 0 17.995a1 1 0 1 0 2 0c0-2.27 2.355-5 7-5s7 2.73 7 5a1 1 0 0 0 2 0c0-2.753-1.984-5.254-5.176-6.377Z"
            fill="#949A9F"
        />
    </svg>
);

export const IconLogout: React.FC = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.79 13.29c.39.39 1.02.39 1.41 0l3.59-3.59a.996.996 0 0 0 0-1.41L9.2 4.7a.996.996 0 1 0-1.41 1.41L9.67 8H1c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41ZM16 0H2a2 2 0 0 0-2 2v3c0 .55.45 1 1 1s1-.45 1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Z"
                fill="#949A9F"
            />
        </svg>
    );
};


export const IconArrowLeft: React.FC = () => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 25 26"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="none"
        >
            <g fill="#fff">
                <path d="M20.444 13.309a.767.767 0 0 1-.663.76l-.104.006H4.344a.767.767 0 0 1-.104-1.526l.104-.007h15.333c.424 0 .767.343.767.767Z"></path>
                <path d="M11.07 18.923a.767.767 0 0 1-.996 1.16l-.087-.073-6.184-6.158a.767.767 0 0 1-.074-1l.074-.086 6.184-6.16a.767.767 0 0 1 1.157 1.001l-.075.086-5.638 5.616 5.638 5.614Z"></path>
            </g>
        </svg>
    );
};

export const IconArrowDown: React.FC = () => {
    return (
        <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="app-svg-icon arrow-down"
            fill="none"
        >
            <g fill="#fff">
                <path d="M0 1.586L1.414.172l4.243 4.242L4.243 5.83z"></path>
                <path d="m7.07.172 1.415 1.414-4.243 4.243-1.414-1.415z"></path>
            </g>
        </svg>
    );
};

export const IconRecharge: React.FC = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="app-svg-icon icon"
            fill="none"
        >
            <path
                d="M14.5 2.5h-9v8H2l8.5 7.5 7.5-7.5h-3.5V6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


export const IconExchange: React.FC = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="app-svg-icon icon"
            fill="none"
        >
            <path
                d="M17.332 7.333a.833.833 0 0 0-.834-.833H4.84l1.917-1.908a.837.837 0 1 0-1.184-1.184L2.24 6.742a.833.833 0 0 0-.175.908.833.833 0 0 0 .767.517h13.666a.833.833 0 0 0 .834-.834Zm.267 5.017a.834.834 0 0 0-.767-.517H3.165a.833.833 0 1 0 0 1.667h11.659l-1.917 1.908a.834.834 0 0 0 .271 1.366.834.834 0 0 0 .912-.182l3.334-3.334a.834.834 0 0 0 .175-.908Z"
                fill="#000"
            />
        </svg>
    );
};

export const IconWithd: React.FC = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="app-svg-icon icon"
            fill="none"
        >
            <path
                d="M14.5 17.5h-9v-8H2L10.5 2 18 9.5h-3.5V14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


export const IconDetail: React.FC<IconDetailProps> = ({ className, style, ...props }) => (

    <svg
        className={className}
        style={{ height: '18px', width: '18px', marginLeft: '10px', ...style }}
        viewBox="0 0 18 19"
        fill="none"
        aria-hidden="true"
        {...props}
    >
        <g clipPath="url(#icon-detail_a)">
            <path
                d="M8.824 1.566c-1.938 0-3.776.801-5.18 2.254a8.002 8.002 0 0 0-1.6 2.431 7.768 7.768 0 0 0-.619 2.886c-.04 1.967.75 3.837 2.219 5.268a8 8 0 0 0 2.45 1.63c.92.398 1.91.613 2.912.633h.138c1.914 0 3.738-.79 5.13-2.223.677-.69 1.22-1.5 1.604-2.386a7.824 7.824 0 0 0 .65-2.844v-.044l.005-.04v-.026l-.004-.04v-.04a7.7 7.7 0 0 0-2.286-5.247A7.695 7.695 0 0 0 8.956 1.57h-.132v-.004Zm0-1.423.158-.002c4.874.068 8.83 3.958 8.976 8.823.004.048.004.098.004.153a.634.634 0 0 1-.006.152c-.168 4.7-3.98 8.83-8.808 8.83h-.164C4.174 18.007-.088 14.08.011 9.122.099 4.359 3.942.14 8.824.143Zm.032 13.5c.036.049.09.079.15.08a.384.384 0 0 0 .267-.12c.244-.2.533-.557.867-1.078l.28.16C9.612 14.093 8.749 14.8 7.84 14.8c-.347 0-.621-.098-.828-.295a.99.99 0 0 1-.308-.743c0-.199.044-.449.138-.758l1.116-3.836c.108-.364.162-.64.162-.827a.424.424 0 0 0-.156-.32.594.594 0 0 0-.413-.139c-.084 0-.182.006-.29.008l.098-.32 2.717-.441h.475l-1.645 5.703c-.084.327-.128.543-.128.65.008.06.034.118.078.162Zm2.038-8.19a1.17 1.17 0 0 1-.836.345 1.138 1.138 0 0 1-.823-.345 1.145 1.145 0 0 1-.343-.831 1.155 1.155 0 0 1 .339-.838 1.119 1.119 0 0 1 .827-.347c.333 0 .616.117.842.347.226.23.343.513.343.838a1.111 1.111 0 0 1-.35.831Z"
                fill="#17A29E"
            ></path>
        </g>
        <defs>
            <clipPath id="icon-detail_a">
                <path fill="#fff" transform="translate(0 .14)" d="M0 0h18v18H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const DropDownIcon: React.FC = () => {
    return (
        <svg className="w-[15px] h-[15px]" aria-hidden="true" viewBox="0 0 11 6" fill="none">
            <path
                d="m10.39 1.719-3.968 4A1.101 1.101 0 0 1 5.703 6a.99.99 0 0 1-.719-.281l-3.968-4A.968.968 0 0 1 .766.625C.922.25 1.296 0 1.703 0h7.969c.406 0 .75.25.906.625.156.375.094.813-.187 1.094Z"
                fill="#fff"
                opacity=".8"
            />
        </svg>
    );
};

export const LogoIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 68 68"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <g filter="url(#icon-logo_a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.333 12.667c0-.225.006-.449.018-.67A7.333 7.333 0 0 0 13.73 24.1l7.603 7.603V12.667Zm0 34H31.704L24.1 54.27a7.333 7.333 0 0 1-12.104-7.62c.222.01.446.017.67.017h8.667Zm0-7.42v2.086h-8.666a7.333 7.333 0 0 1-3.17-13.948c.148.165.302.328.461.487l11.375 11.375ZM9.958 9.958A12.666 12.666 0 0 1 22.75 6.84 12.666 12.666 0 0 1 34 0c4.895 0 9.141 2.776 11.25 6.84a12.666 12.666 0 0 1 12.792 3.118A12.666 12.666 0 0 1 61.16 22.75 12.665 12.665 0 0 1 68 34c0 4.895-2.776 9.141-6.84 11.25a12.665 12.665 0 0 1-3.118 12.792A12.666 12.666 0 0 1 45.25 61.16 12.666 12.666 0 0 1 34 68a12.666 12.666 0 0 1-11.25-6.84 12.666 12.666 0 0 1-12.792-3.118A12.666 12.666 0 0 1 6.84 45.25 12.665 12.665 0 0 1 0 34c0-4.895 2.776-9.141 6.84-11.25A12.666 12.666 0 0 1 9.958 9.958ZM34 5.333c2.915 0 5.432 1.7 6.615 4.164-.166.148-.328.302-.487.461L28.753 21.333h-2.086v-8.666A7.333 7.333 0 0 1 34 5.333ZM39.171 28.8A7.31 7.31 0 0 0 34 26.667h-7.333v14.666h7.358a7.31 7.31 0 0 0 5.175-2.162A7.31 7.31 0 0 0 41.333 34a7.31 7.31 0 0 0-2.162-5.2Zm7.496 26.533V36.296L54.27 43.9a7.333 7.333 0 0 1-7.62 12.104c.01-.222.017-.446.017-.67Zm-18.795 2.709L41.333 44.58v10.753a7.333 7.333 0 0 1-13.948 3.17c.165-.148.328-.302.487-.461ZM44.58 26.667l13.462 13.461c.159.16.313.322.461.487a7.333 7.333 0 0 0-3.17-13.948H44.58Zm-8.284-5.334L43.9 13.73a7.333 7.333 0 0 1 12.104 7.62 12.847 12.847 0 0 0-.67-.017H36.295Z"
                fill="url(#icon-logo_b)"
            />
        </g>
        <defs>
            <linearGradient
                id="icon-logo_b"
                x1="34"
                y1="0"
                x2="34"
                y2="68"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#36FFAC" />
                <stop offset="0" stopColor="#14C47B" />
                <stop offset="1" stopColor="#067A4A" />
            </linearGradient>
            <filter
                id="icon-logo_a"
                x="0"
                y="0"
                width="68"
                height="87.032"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="19.032" />
                <feGaussianBlur stdDeviation="23.79" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend in2="shape" result="effect1_innerShadow_4451_38791" />
            </filter>
        </defs>
    </svg>
);


export const CopyIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        opacity="0.6"
        {...props}
        style={{ ...style }}
    >
        <path
            clipRule="evenodd"
            d="M7.744 2.744a.833.833 0 0 1 .59-.244h3.333a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5H5.833a2.5 2.5 0 0 1-2.5-2.5v-5c0-.221.088-.433.245-.59l4.166-4.166Zm3.923 1.423h-2.5V7.5a.833.833 0 0 1-.834.833H5V12.5a.833.833 0 0 0 .833.833h5.834a.833.833 0 0 0 .833-.833V5a.833.833 0 0 0-.833-.833Zm-5.489 2.5H7.5V5.345L6.178 6.667Zm9.655-2.5a.833.833 0 0 1 .834.833v10a2.5 2.5 0 0 1-2.5 2.5H5.833a.833.833 0 1 1 0-1.667h8.334A.833.833 0 0 0 15 15V5a.833.833 0 0 1 .833-.833Z"
        />
    </svg>
);

export const TipsIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <g clipPath="url(#icon-tips_a)">
            <path
                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                fill="#26A17B"
            />
            <path
                d="M9.137 5.77a.907.907 0 0 1-.656-.247.885.885 0 0 1-.275-.638.876.876 0 0 1 .275-.637A.898.898 0 0 1 9.137 4a.902.902 0 0 1 .612.27.88.88 0 0 1 0 1.228.902.902 0 0 1-.612.271ZM6.073 8.39c-.437.358 1.202-1.673 1.788-2.033.587-.359 1.626-.088 1.482.744-.143.833-1.054 3.87-1.261 4.594-.209.723 1.277-.67 1.57-.847.294-.175-1.12 1.64-1.79 2.022-.67.382-1.672-.135-1.474-.827.2-.694.939-3.282 1.241-4.309.303-1.028-1.12.299-1.556.656Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id="icon-tips_a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);


export const EmptyIcon3: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <div
        className="flex justify-center items-center"
        style={{
            ...style,
            backgroundImage: "url('/assets/empty-icon.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        {/* Your content goes here */}
        {/* This is where you can place additional content, like text or an overlay */}
    </div>
);

export const IconRightB: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 25 25"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            d="m16.04 11.757-5.66-5.65a1 1 0 1 0-1.42 1.41l4.95 5-4.95 4.95a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3.999.999 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"
            fill="#fff"
            opacity=".5"
        />
    </svg>
);

export const IconArrowDownLine: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <g opacity=".3">
            <path
                opacity=".5"
                d="M17.71 11.29a1.002 1.002 0 0 0-1.42 0L13 14.59V7a1 1 0 0 0-2 0v7.59l-3.29-3.3a1.004 1.004 0 1 0-1.42 1.42l5 5c.095.091.207.162.33.21a.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l5-5a1.002 1.002 0 0 0 0-1.42Z"
                fill="#fff"
            />
        </g>
    </svg>
);

export const IconSmile: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-10C6.477 2 2 6.479 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.522-4.477-10-10-10ZM9.967 14.746a1 1 0 0 0-1.937.498C8.469 17 10.283 18 12 18c1.785 0 3.452-1.012 3.97-2.76a1 1 0 0 0-1.937-.496C13.773 15.615 12.84 16 12 16c-.84 0-1.772-.385-2.033-1.256ZM10.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            fill="#949A9F"
        />
    </svg>
);

export const IconMail: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        style={{ opacity: 0.6, ...style }}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.544 5.169A2.777 2.777 0 0 1 4.8 4h14.4c.936 0 1.753.47 2.256 1.168.343.478.544 1.067.544 1.699v10.266C22 18.683 20.78 20 19.2 20H4.8C3.22 20 2 18.683 2 17.134V6.868c0-.632.2-1.221.544-1.7ZM4.933 6l6.327 6.965a1 1 0 0 0 1.48 0L19.067 6H4.933ZM20 7.949l-5.78 6.362a3 3 0 0 1-4.44 0L4 7.949v9.185c0 .514.392.867.8.867h14.4c.408 0 .8-.353.8-.867V7.949Z"
            fill="#FFF"
        />
    </svg>
);

export const IconTel: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.207 14.794c2.318 2.318 4.471 3.61 6.073 4.328 1.399.627 3.05.135 4.337-1.152l.294-.295-3.536-2.25c-.672.98-1.943 1.555-3.212 1.02-.961-.406-2.233-1.1-3.37-2.237s-1.83-2.41-2.236-3.37c-.536-1.27.038-2.54 1.019-3.212L6.326 4.09l-.295.294C4.744 5.67 4.253 7.322 4.879 8.72c.718 1.602 2.01 3.755 4.328 6.073Zm5.256 6.153c-1.815-.813-4.172-2.241-6.67-4.74-2.498-2.496-3.926-4.854-4.74-6.67-1.075-2.4-.093-4.91 1.564-6.567l.294-.295a2 2 0 0 1 3.102.34l2.83 4.45a1 1 0 0 1-.396 1.43l-.633.317c-.432.216-.52.597-.415.848.339.803.906 1.83 1.808 2.734.903.902 1.931 1.469 2.734 1.808.251.106.632.017.848-.415l.317-.633a1 1 0 0 1 1.43-.397l4.45 2.83a1.999 1.999 0 0 1 .34 3.103l-.295.294c-1.657 1.658-4.167 2.639-6.568 1.563Z"
            fill="#949A9F"
        />
    </svg>
);

export const IconPassword: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 1024 1024"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            d="M868.593 403.832c-30.081-28.845-70.037-44.753-112.624-44.753h-490.02c-42.554 0-82.51 15.908-112.469 44.691-30.237 28.783-46.857 67.222-46.857 108.198v294.08c0 40.977 16.62 79.415 46.703 108.137C183.285 943.03 223.396 959 265.95 959h490.019c42.586 0 82.696-15.97 112.624-44.815 30.082-28.845 46.58-67.222 46.58-108.137v-294.08c-.001-40.915-16.498-79.29-46.58-108.136zM841.821 806.05c0 22.098-8.882 42.772-25.1 58.307-16.154 15.662-37.819 24.203-60.752 24.203h-490.02c-22.934 0-44.566-8.542-60.877-24.264-16.187-15.475-25.068-36.149-25.068-58.247v-294.08c0-22.036 8.881-42.772 25.193-58.308 16.187-15.537 37.82-24.14 60.754-24.14H755.97c22.933 0 44.598 8.603 60.753 24.14 16.218 15.536 25.1 36.272 25.1 58.308V806.05zM510.974 135.441c114.914 0 208.319 89.752 208.319 200.055h73.35C792.643 186.383 666.277 65 510.974 65c-155.334 0-281.7 121.384-281.7 270.497h73.35c0-110.302 93.436-200.055 208.35-200.055zM474.3 747.245h73.35V629.577H474.3v117.668z"
            fill="gray"
        />
    </svg>
);


export const LogoIconB: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 80 80"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <rect width="80" height="80" rx="16" fill="url(#icon-logo_bg_a)" />
        <g fillRule="evenodd" clipRule="evenodd">
            <path
                d="M30.784 23.61c0-.286.013-.57.039-.85a6.146 6.146 0 0 0-6.753 10l6.714 6.713V23.61Zm3.072 7.174h2.327l8.886-8.886c.204-.204.415-.396.632-.577A6.146 6.146 0 0 0 40 17.47a6.14 6.14 0 0 0-6.144 6.14v7.173Zm5.617 18.432H23.616c-.288 0-.574-.013-.855-.04a6.146 6.146 0 0 0 9.998 6.753l6.714-6.713Zm-8.689-3.072v-2.327l-8.886-8.886a9.343 9.343 0 0 1-.577-.632 6.146 6.146 0 0 0 2.295 11.845h7.168Zm-8.886-24.246a9.218 9.218 0 0 1 9.721-2.127A9.216 9.216 0 0 1 40 14.4a9.218 9.218 0 0 1 8.379 5.372 9.217 9.217 0 0 1 9.723 2.126 9.218 9.218 0 0 1 2.126 9.723A9.217 9.217 0 0 1 65.6 40a9.218 9.218 0 0 1-5.372 8.379 9.218 9.218 0 0 1-2.126 9.723 9.218 9.218 0 0 1-9.723 2.126A9.217 9.217 0 0 1 40 65.6a9.217 9.217 0 0 1-8.379-5.372 9.218 9.218 0 0 1-9.723-2.126 9.217 9.217 0 0 1-2.126-9.723 9.218 9.218 0 0 1-5.372-8.38 9.217 9.217 0 0 1 5.372-8.378 9.218 9.218 0 0 1 2.126-9.723Zm11.958 24.246V33.856H40c1.695 0 3.23.686 4.342 1.797l.005.005A6.125 6.125 0 0 1 46.144 40c0 1.688-.68 3.216-1.782 4.327l-.035.035A6.124 6.124 0 0 1 40 46.144h-6.144Zm15.36 10.24V40.527l6.714 6.714a6.144 6.144 0 0 1-6.753 9.998c.026-.281.039-.567.039-.855Zm-14.285 1.718 11.213-11.213v9.495a6.144 6.144 0 0 1-11.845 2.295 9.37 9.37 0 0 0 .633-.577Zm5.596-27.318h15.857c.288 0 .574.013.855.039a6.146 6.146 0 0 0-9.998-6.753l-6.714 6.714Zm6.362 3.072 11.213 11.212c.204.204.396.415.577.633a6.146 6.146 0 0 0-2.295-11.845h-9.495Z"
                fill="#fff"
            />
            <path
                d="M30.784 23.61c0-.286.013-.57.039-.85a6.146 6.146 0 0 0-6.753 10l6.714 6.713V23.61Zm3.072 7.174h2.327l8.886-8.886c.204-.204.415-.396.632-.577A6.146 6.146 0 0 0 40 17.47a6.14 6.14 0 0 0-6.144 6.14v7.173Zm5.617 18.432H23.616c-.288 0-.574-.013-.855-.04a6.146 6.146 0 0 0 9.998 6.753l6.714-6.713Zm-8.689-3.072v-2.327l-8.886-8.886a9.343 9.343 0 0 1-.577-.632 6.146 6.146 0 0 0 2.295 11.845h7.168Zm-8.886-24.246a9.218 9.218 0 0 1 9.721-2.127A9.216 9.216 0 0 1 40 14.4a9.218 9.218 0 0 1 8.379 5.372 9.217 9.217 0 0 1 9.723 2.126 9.218 9.218 0 0 1 2.126 9.723A9.217 9.217 0 0 1 65.6 40a9.218 9.218 0 0 1-5.372 8.379 9.218 9.218 0 0 1-2.126 9.723 9.218 9.218 0 0 1-9.723 2.126A9.217 9.217 0 0 1 40 65.6a9.217 9.217 0 0 1-8.379-5.372 9.218 9.218 0 0 1-9.723-2.126 9.217 9.217 0 0 1-2.126-9.723 9.218 9.218 0 0 1-5.372-8.38 9.217 9.217 0 0 1 5.372-8.378 9.218 9.218 0 0 1 2.126-9.723Zm11.958 24.246V33.856H40c1.695 0 3.23.686 4.342 1.797l.005.005A6.125 6.125 0 0 1 46.144 40c0 1.688-.68 3.216-1.782 4.327l-.035.035A6.124 6.124 0 0 1 40 46.144h-6.144Zm15.36 10.24V40.527l6.714 6.714a6.144 6.144 0 0 1-6.753 9.998c.026-.281.039-.567.039-.855Zm-14.285 1.718 11.213-11.213v9.495a6.144 6.144 0 0 1-11.845 2.295 9.37 9.37 0 0 0 .633-.577Zm5.596-27.318h15.857c.288 0 .574.013.855.039a6.146 6.146 0 0 0-9.998-6.753l-6.714 6.714Zm6.362 3.072 11.213 11.212c.204.204.396.415.577.633a6.146 6.146 0 0 0-2.295-11.845h-9.495Z"
                fill="#F8FFFC"
            />
        </g>
        <defs>
            <linearGradient id="icon-logo_bg_a" x1="40" y1="0" x2="40" y2="82.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10A37F" />
                <stop offset="1" stopColor="#10A37F" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export const SelectedIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={`app-svg-icon selected ${className}`}
        aria-hidden="true"
        viewBox="0 0 1024 1024"
        fill="none"
        {...props}
        style={style}
    >
        <path
            d="m965.088 186.4-.8-.768a70.208 70.208 0 0 0-99.328.768l-461.6 469.024-.448.448c-16.96 16.64-44.192 16.416-60.864-.448L175.36 486.08l-.768-.8a70.208 70.208 0 0 0-99.36.8 72.448 72.448 0 0 0 0 101.696l236.032 239.392.896.896a86.176 86.176 0 0 0 121.856-.896l531.072-538.944c27.776-28.352 27.776-73.6 0-101.824z"
            fill="#1ECDB9"
        />
    </svg>
);

export const SysNoticeIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={`app-svg-icon icon ${className}`}
        aria-hidden="true"
        viewBox="0 0 18 20"
        fill="none"
        {...props}
        style={style}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.834 2.5C.834 1.58 1.58.833 2.5.833h13.334c.92 0 1.666.746 1.666 1.667v15c0 .92-.746 1.667-1.666 1.667H2.5c-.92 0-1.667-.747-1.667-1.667v-15ZM3.75 4.167c0-.46.373-.834.833-.834h9.167c.46 0 .834.373.834.834v3.75c0 .46-.374.833-.834.833H4.584a.833.833 0 0 1-.834-.833v-3.75Zm1.006 6.91a.833.833 0 0 0-1.178 1.179l.869.869-.87.869a.833.833 0 1 0 1.18 1.178l.868-.869.87.87a.833.833 0 0 0 1.178-1.179l-.87-.87.87-.868a.833.833 0 1 0-1.179-1.179l-.869.87-.869-.87Zm6.078 2.673a.833.833 0 0 0 0 1.667h3.333a.833.833 0 1 0 0-1.667h-3.333ZM10 12.083c0-.46.373-.833.834-.833h3.333a.833.833 0 1 1 0 1.667h-3.333a.833.833 0 0 1-.834-.834Z"
            fill="#fff"
        />
    </svg>
);

export const SerNoticeIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 19 17"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5.667a.833.833 0 0 0-.833.833v10c0 .46.373.833.833.833h1.738l1.423 1.423a.833.833 0 0 0 1.178 0l1.423-1.423h.905v2.5c0 .46.373.834.833.834h4.238l1.006 1.006a.833.833 0 0 0 1.179 0l1.006-1.006h1.738c.46 0 .833-.373.833-.834V8.167a.833.833 0 0 0-.833-.834h-2.5V1.5a.833.833 0 0 0-.834-.833H1.5ZM15.667 9v2.5c0 .46-.373.833-.834.833h-5V14h3.75c.221 0 .433.088.59.244l.66.66.661-.66a.833.833 0 0 1 .59-.244h1.25V9h-1.667ZM4 8.167c0-.46.373-.834.833-.834h2.5a.833.833 0 0 1 0 1.667h-2.5A.833.833 0 0 1 4 8.167ZM4.833 4a.833.833 0 0 0 0 1.667h5a.833.833 0 1 0 0-1.667h-5Z"
            fill="#fff"
        />
    </svg>
);

export const AnNoticeIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 15 20"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.833 2.5C.833 1.58 1.58.833 2.5.833h10c.92 0 1.667.746 1.667 1.667v15.833a.833.833 0 0 1-1.318.678l-2.432-1.737-2.433 1.737a.834.834 0 0 1-.968 0l-2.433-1.737-2.432 1.737a.833.833 0 0 1-1.318-.678V2.5Zm3.334 3.333C4.167 5.373 4.54 5 5 5h5a.833.833 0 1 1 0 1.667H5a.833.833 0 0 1-.833-.834ZM5 8.333A.833.833 0 0 0 5 10h5a.833.833 0 1 0 0-1.667H5Zm0 3.334a.833.833 0 1 0 0 1.666h5a.833.833 0 1 0 0-1.666H5Z"
            fill="#fff"
        />
    </svg>
);

export const TeamManIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 36 36"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <defs>
            <linearGradient id="icon-teamman_a" x1="-5.5" y1="-11" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4FC79" />
                <stop offset="1" stopColor="#67DCAB" />
            </linearGradient>
            <linearGradient id="icon-teamman_b" x1="-5.5" y1="-11" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4FC79" />
                <stop offset="1" stopColor="#67DCAB" />
            </linearGradient>
            <linearGradient id="icon-teamman_c" x1="4.056" y1="-1.639" x2="30.889" y2="29.472" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4FC79" />
                <stop offset="1" stopColor="#67DCAB" />
            </linearGradient>
            <linearGradient id="icon-teamman_d" x1="4.056" y1="-1.639" x2="30.889" y2="29.472" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4FC79" />
                <stop offset="1" stopColor="#67DCAB" />
            </linearGradient>
        </defs>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 17.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            fill="url(#icon-teamman_a)"
        />
        <path
            d="M17.25 21.75a1.5 1.5 0 0 1 1.5 1.5v9h3v-9a4.5 4.5 0 0 0-4.5-4.5h-9a4.5 4.5 0 0 0-4.5 4.5v9h3v-9a1.5 1.5 0 0 1 1.5-1.5h9Z"
            fill="url(#icon-teamman_b)"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 20.333A4.667 4.667 0 1 0 27 11a4.667 4.667 0 0 0 0 9.333ZM27 18a2.333 2.333 0 1 0 0-4.667A2.333 2.333 0 0 0 27 18Z"
            fill="url(#icon-teamman_c)"
        />
        <path
            d="M30.5 23.833c.644 0 1.167.523 1.167 1.167v7H34v-7a3.5 3.5 0 0 0-3.5-3.5h-7A3.5 3.5 0 0 0 20 25v7h2.333v-7c0-.644.523-1.167 1.167-1.167h7Z"
            fill="url(#icon-teamman_d)"
        />
    </svg>
);

export const ToRightIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 21 21"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <circle opacity="0.2" cx="10.5" cy="11" r="8" fill="#58FFC3" />
        <path
            d="m14.79 10.47-3.5-3.5a.751.751 0 0 0-1.06 1.065l2.215 2.21H6.74a.75.75 0 0 0 0 1.5h5.705l-2.215 2.21a.75.75 0 0 0 .53 1.28.74.74 0 0 0 .53-.235l3.5-3.5a.75.75 0 0 0 0-1.06v.03Z"
            fill="#67DCAB"
        />
    </svg>
);

export const LocationIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 37 36"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            d="M18.5 15.119c1.519 0 2.75-1.273 2.75-2.842 0-1.57-1.231-2.843-2.75-2.843s-2.75 1.273-2.75 2.843 1.231 2.842 2.75 2.842Z"
            fill="url(#icon-location_a)"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.75 12.277c0 4.224-2.973 7.732-6.875 8.408v7.223H24c.76 0 1.375.636 1.375 1.421S24.759 30.75 24 30.75H13c-.76 0-1.375-.636-1.375-1.42 0-.786.616-1.422 1.375-1.422h4.125v-7.223c-3.902-.676-6.875-4.184-6.875-8.408 0-4.71 3.694-8.527 8.25-8.527s8.25 3.818 8.25 8.527ZM18.5 17.96c3.038 0 5.5-2.545 5.5-5.684 0-3.14-2.462-5.685-5.5-5.685S13 9.137 13 12.277c0 3.139 2.462 5.684 5.5 5.684Z"
            fill="url(#icon-location_b)"
        />
        <defs>
            <linearGradient
                id="icon-location_a"
                x1="2"
                y1="2"
                x2="24.5"
                y2="26"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#D4FC79" />
                <stop offset="1" stopColor="#67DCAB" />
            </linearGradient>
            <linearGradient
                id="icon-location_b"
                x1="2"
                y1="2"
                x2="24.5"
                y2="26"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#D4FC79" />
                <stop offset="1" stopColor="#67DCAB" />
            </linearGradient>
        </defs>
    </svg>
);

export const ArrowDownIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 18 18"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            d="M14.25 6.75L9 12 3.75 6.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const CopyGreenIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 16 18"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.293.293A1 1 0 0 1 6 0h4a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a1 1 0 0 1 .293-.707l5-5ZM10 2H7v4a1 1 0 0 1-1 1H2v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3.414 5H5V3.414L3.414 5ZM15 2a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H3a1 1 0 0 1 0-2h10a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1Z"
            fill="#0FA07C"
        />
    </svg>
);

export const LockIcon: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 65 77"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            d="M15.337 16.973c0-10.15 7.572-17.247 16.912-15.851 9.339 1.396 16.91 10.754 16.91 20.904v1.839l8.456 1.264c3.735.557 6.765 4.301 6.765 8.361v36.755c0 4.06-3.03 6.899-6.765 6.341L6.882 69.004c-3.736-.557-6.764-4.3-6.764-8.36V23.888c0-4.06 3.028-6.899 6.764-6.34l8.455 1.263v-1.838Zm6.765 2.849 20.293 3.032v-1.838c0-6.09-4.543-11.705-10.146-12.544-5.605-.837-10.148 3.42-10.148 9.511v1.838Zm-15.22 5.076v36.757l50.733 7.58V32.48L6.882 24.898ZM32.249 43.39c-1.868-.279-3.382 1.14-3.382 3.17 0 2.03 1.514 3.902 3.382 4.181 1.866.279 3.382-1.14 3.382-3.17 0-2.03-1.514-3.902-3.382-4.18v-.001ZM22.1 45.55c0-6.09 4.544-10.348 10.148-9.511 5.603.837 10.146 6.453 10.146 12.544 0 6.089-4.543 10.347-10.146 9.51C26.644 57.255 22.1 51.64 22.1 45.55Z"
            fill="url(#icon-lock_a)"
        />
        <defs>
            <linearGradient id="icon-lock_a" x1="39.188" y1=".946" x2="39.188" y2="76.656" gradientUnits="userSpaceOnUse">
                <stop offset=".032" stopColor="ACACAC"></stop>
                <stop offset="1" stopColor="#ACACAC"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export const IconRecharge2: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            d="M14.5 2.5h-9v8H2l8.5 7.5 7.5-7.5h-3.5V6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const IconWithd2: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <path
            d="M14.5 17.5h-9v-8H2L10.5 2 18 9.5h-3.5V14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);



export const MoreIcon2: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 29 29"
        fill="none"
        {...props}
        style={{ ...style }}
    >
        <g opacity="0.7">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.209 2.01H9.46c-.766 0-1.387.62-1.387 1.386v7.558a3.698 3.698 0 0 1 2.887 6.543h.87a1.56 1.56 0 0 1 0 3.12h-.132a1.156 1.156 0 0 1 .162 1.985 1.676 1.676 0 0 1 1.39 1.945h10.31c.767 0 1.388-.621 1.388-1.387V6.109a.69.69 0 0 1-.463.177h-3.582a.693.693 0 0 1-.694-.694V2.01Z"
                fill="#fff"
            ></path>
            <path
                d="M21.25 2.01H22l1.734 1.444 1.214.982v.694h-3.699V2.01Z"
                fill="#fff"
            ></path>
            <circle cx="8.651" cy="14.607" r="2.658" fill="#fff"></circle>
            <rect
                x="8.23"
                y="12.8"
                width="1.04"
                height="2.51"
                rx="0.52"
                transform="rotate(45 8.23 12.8)"
                fill="#000"
            ></rect>
            <rect
                x="10.289"
                y="13.281"
                width="1.04"
                height="3.943"
                rx="0.52"
                transform="rotate(45 10.289 13.281)"
                fill="#000"
            ></rect>
            <rect
                x="5.068"
                y="18.19"
                width="7.281"
                height="1.618"
                rx="0.809"
                fill="#fff"
            ></rect>
            <rect
                x="4.028"
                y="20.848"
                width="7.281"
                height="1.618"
                rx="0.809"
                fill="#fff"
            ></rect>
            <rect
                x="5.068"
                y="23.391"
                width="7.281"
                height="1.618"
                rx="0.809"
                fill="#fff"
            ></rect>
            <rect
                x="10.269"
                y="4.552"
                width="5.085"
                height="1.156"
                rx="0.578"
                fill="#000"
            ></rect>
            <rect
                x="10.269"
                y="6.632"
                width="6.357"
                height="1.156"
                rx="0.578"
                fill="#000"
            ></rect>
            <rect
                x="10.269"
                y="8.713"
                width="11.558"
                height="1.156"
                rx="0.578"
                fill="#000"
            ></rect>
            <path
                d="m16.193 15.492 3.514-3.514m0 0h-2.37m2.37 0v2.37"
                stroke="currentColor"
                strokeWidth="1.156"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <rect
                x="15.586"
                y="17.612"
                width="2.08"
                height="3.236"
                rx="0.462"
                stroke="#000"
                strokeWidth="1.156"
            ></rect>
            <rect
                x="19.747"
                y="15.994"
                width="2.08"
                height="4.854"
                rx="0.462"
                stroke="#000"
                strokeWidth="1.156"
            ></rect>
            <path
                d="M22.867 20.906h-8.9"
                stroke="#000"
                strokeWidth="1.156"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </g>
    </svg>
);

export const USDTIconDefault: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        {...props}
        style={{ ...style }}
    >
        <path
            d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
            fill="#26A17B"
        />
        <path
            d="M12.172 12.015v-.002a21.79 21.79 0 0 1-1.342.029c-.698 0-1.188-.02-1.362-.029v.002c-2.686-.118-4.69-.585-4.69-1.146 0-.559 2.006-1.027 4.69-1.146v1.827c.176.012.68.042 1.375.042.834 0 1.252-.035 1.33-.042V9.725c2.68.12 4.679.587 4.679 1.146 0 .559-2 1.026-4.68 1.146m0-2.481V7.902h3.74V5.41H5.73v2.492h3.74v1.634c-3.04.14-5.325.74-5.325 1.462s2.287 1.323 5.325 1.465V17.7h2.704v-5.239c3.035-.14 5.316-.74 5.316-1.462 0-.72-2.281-1.323-5.316-1.463"
            fill="#fff"
        />
    </svg>
);


export const EmptyIconPro: React.FC<IconDetailProps> = ({ className, style, ...props }) => (
    <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 250 129"
        fill="none"
        style={{ ...style }}
        {...props}
    >
        <g clip-path="url(#icon-empty_a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M249.283 129c-29.42-36.506-76.483-58-127.019-58C73.29 71 29.439 92.935 0 127.516L249.283 129Z" fill="url(#icon-empty_b)"></path><g filter="url(#icon-empty_c)"><path d="m124.5 120-51-31.5L146 84l23.5 4-45 32Z" fill="#020806"></path></g><g filter="url(#icon-empty_d)"><path d="m88 95.5-9.5 11L75 108l-7-1.5-3.5 2.5-2 2.5-.5-13 8-5.5 18 2.5Z" fill="#000"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="m73.34 33.524 44.257-10.203v65.073H73.341v-54.87Z" fill="url(#icon-empty_e)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m117.597 23.321 51.937 12.936v52.137h-52.403l.466-65.073Z" fill="url(#icon-empty_f)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M73.34 33.524v54.87l51.369 22.425V49.216L73.341 33.524Z" fill="url(#icon-empty_g)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M124.597 49.216v61.603l44.937-23.198V36.257l-44.937 12.959Z" fill="url(#icon-empty_h)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m124.597 49.216 16.17 30.268 43.582-21.46-14.815-21.767-44.937 12.959Z" fill="url(#icon-empty_i)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M73.34 33.524 60 55.858l13.34 5.495v-27.83Z" fill="url(#icon-empty_j)"></path><path opacity=".6" d="m81.597 52 34.609 10.907M81.972 64.59l18.678 5.886M81.972 76.59l15.073 4.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><g fill-rule="evenodd" clip-rule="evenodd"><path d="M141.344 11.4v11.81L167.365 0l-26.021 11.4Z" fill="#609B15"></path><path d="m167.365 0-21.85 14.107 11.637 7.828L167.365 0Z" fill="#98F2A1"></path><path d="m133.597 4.417 7.747 7.188L167.365 0l-33.768 4.417Z" fill="#8CFBA2"></path></g><path d="M138.61 15c-10.493 8.122-15.739 13.778-15.739 16.97 0 4.786 3.368 6.347 6.449 6.347 3.08 0 5.405-5.488-.522-6.348-3.951-.573-7.685 4.562-11.201 15.404" stroke="#ECF6FF" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m85.26 83.015-19.947-3.871c-1.83.153-3.065 1.872-3.702 5.156l-3.92 20.204 16.37 3.177a4.053 4.053 0 0 0 4.751-3.207l3.149-16.225c.303-1.56.617-2.651.942-3.272.325-.62 1.11-1.275 2.356-1.962Z" fill="url(#icon-empty_k)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m68.005 101-20.56-3.99a2.364 2.364 0 0 0-2.772 1.871L43 107.503l19.611 3.806 1.357-6.989c.199-.83.572-1.47 1.118-1.919.546-.449 1.519-.916 2.919-1.401Z" fill="url(#icon-empty_l)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M73.276 107.529a21.358 21.358 0 0 0-1.001-3.577c-.691-1.869-2.725-2.996-3.902-3.224-1.177-.229-2.35.443-3.354 1.373-.67.621-1.111 1.81-1.326 3.568l9.583 1.86Z" fill="#5F87DA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m86.824 90.889-5.236-1.016c.4-3.104 1.024-5.058 1.87-5.861.847-.804 1.426-1.137 1.736-1.001 1.225.737 1.924 1.653 2.098 2.748.174 1.096.018 2.806-.468 5.13Z" fill="#2D8A70"></path><path d="m77.768 87.927-12.27-2.381M77.06 91.575l-7.627-1.48M76.481 94.56l-7.627-1.481" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><linearGradient id="icon-empty_b" x1="124.642" y1="71" x2="124.642" y2="129" gradientUnits="userSpaceOnUse"><stop stop-color="#006C52"></stop><stop offset="1" stop-color="#010705"></stop></linearGradient><linearGradient id="icon-empty_e" x1="95.469" y1="23.321" x2="117.474" y2="40.772" gradientUnits="userSpaceOnUse"><stop stop-color="#AFEFBD"></stop><stop offset="1" stop-color="#4CB0A3"></stop></linearGradient><linearGradient id="icon-empty_f" x1="143.332" y1="23.321" x2="172.782" y2="43.046" gradientUnits="userSpaceOnUse"><stop stop-color="#C9F2E6"></stop><stop offset="1" stop-color="#1DAA66"></stop></linearGradient><linearGradient id="icon-empty_g" x1="85.22" y1="43.828" x2="126.239" y2="84.781" gradientUnits="userSpaceOnUse"><stop stop-color="#AAFFEA"></stop><stop offset="1" stop-color="#50DBB9"></stop></linearGradient><linearGradient id="icon-empty_h" x1="147.065" y1="36.257" x2="132.504" y2="108.99" gradientUnits="userSpaceOnUse"><stop stop-color="#07140D"></stop><stop offset="1" stop-color="#2AB693"></stop></linearGradient><linearGradient id="icon-empty_i" x1="181.894" y1="57.871" x2="115.362" y2="41.154" gradientUnits="userSpaceOnUse"><stop stop-color="#BBE2D8"></stop><stop offset="1" stop-color="#52BE69"></stop></linearGradient><linearGradient id="icon-empty_j" x1="66.67" y1="33.524" x2="66.67" y2="61.353" gradientUnits="userSpaceOnUse"><stop stop-color="#16BF96"></stop><stop offset="1" stop-color="#97F6DF"></stop></linearGradient><linearGradient id="icon-empty_k" x1="73.985" y1="80.827" x2="68.965" y2="106.692" gradientUnits="userSpaceOnUse"><stop stop-color="#C9F5B4"></stop><stop offset="1" stop-color="#97B9F3"></stop></linearGradient><linearGradient id="icon-empty_l" x1="56.564" y1="98.78" x2="54.441" y2="109.723" gradientUnits="userSpaceOnUse"><stop stop-color="#95FFFF"></stop><stop offset="1" stop-color="#608DED"></stop></linearGradient><filter id="icon-empty_c" x="65.5" y="76" width="112" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_1648_2391"></feGaussianBlur></filter><filter id="icon-empty_d" x="60" y="91" width="30" height="22.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_1648_2391"></feGaussianBlur></filter><clipPath id="icon-empty_a"><path fill="#fff" d="M0 0h250v129H0z"></path></clipPath></defs>
    </svg>
);

export const EyeOpenIcon: React.FC<IconDetailProps> = ({ className, ...props }) => (
    <svg
        className={`app-svg-icon icon ${className}`} // Additional className support
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <g opacity="0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path
                d="M3.118 12.467a.987.987 0 0 1 0-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 0 1 0 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533v0Z"
                strokeWidth="1.5"
            />
            <path
                d="M14.046 9.804a3 3 0 1 1-4.24 4.241 3 3 0 0 1 4.24-4.24"
                strokeWidth="1.429"
            />
        </g>
    </svg>
);

export const EyeCloseIcon: React.FC<IconDetailProps> = ({ className, ...props }) => (
    <svg
        className={`app-svg-icon iconnobg ${className}`} // Additional className support
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path d="M3.118 12.467a.987.987 0 0 1 0-.935C5.01 8.033 8.505 5 12 5s6.99 3.033 8.882 6.533a.987.987 0 0 1 0 .935C18.99 15.967 15.495 19 12 19s-6.99-3.033-8.882-6.533Z" fill="#17CE92" stroke="#17CE92" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.046 9.804a3 3 0 1 1-4.24 4.241 3 3 0 0 1 4.24-4.24" stroke="#181A20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><g filter="url(#icon-eye-close_a)"><path d="M20 4 5 19" stroke="#17CE92" fill="#17CE92" stroke-width="2"></path></g><defs><filter id="icon-eye-close_a" x="3.293" y="2.293" width="17.414" height="17.414" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-1" dy="-1"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.00392157 0 0 0 0 0.0117647 0 0 0 0 0.0117647 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_427_7583"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_427_7583" result="shape"></feBlend></filter></defs>
    </svg>
);

export const CloseIcon: React.FC<IconDetailProps> = ({ className, ...props }) => (
    <svg
        className={`app-svg-icon iconnobg ${className}`} // Additional className support
        aria-hidden="true"
        viewBox="0 0 1024 1024"
        fill="none"
        {...props}
    >
        <path
            d="M512 181.248c-182.784 0-330.752 147.968-330.752 330.752 0 182.784 147.968 330.752 330.752 330.752 182.784 0 330.752-147.968 330.752-330.752 0-182.784-147.968-330.752-330.752-330.752zm143.36 468.48-5.12 5.12c-3.072 3.072-6.656 4.608-10.752 4.608s-7.68-1.536-10.752-4.608L512 538.624 395.776 654.848c-3.072 3.072-6.656 4.608-10.752 4.608s-7.68-1.536-10.752-4.608l-5.632-5.632c-3.072-3.072-4.608-6.656-4.608-10.752s1.536-7.68 4.608-10.752L484.864 512 370.176 397.312c-6.144-6.144-6.144-15.872 0-21.504l5.12-5.632c5.632-5.632 15.872-5.632 21.504 0L512 484.864 627.712 368.64c3.072-3.072 6.656-4.608 10.752-4.608s7.68 1.536 10.752 4.608l5.632 5.632c3.072 3.072 4.608 6.656 4.608 10.752s-1.536 8.192-4.608 10.752L539.136 512 655.36 628.224c3.072 3.072 4.608 6.656 4.608 10.752-.512 4.096-2.048 7.68-4.608 10.752z"
            fill="#17CE92"
        />
    </svg>
);