import { Attack } from "../types/types";

export const moves = (attackName: string) => {
    return `
			<svg width="220" height="65">
				<text x="0" y="25" text-anchor="left" font-family="Handjet" font-size="27" fill="white">${attackName}</text>
			</svg>
		`;
};

export const moves2 = (attackName: string) => {
    return `
			<svg width="220" height="65">
				<text x="0" y="25" text-anchor="left" font-family="Handjet" font-size="22" fill="white">${attackName}</text>
			</svg>
		`;
};

export const typeBox = (attackType: Attack) => {
    return `
            <svg width="98" height="36">
            	<rect width="98" height="36" fill="${attackType.type.color}"/>
            </svg>
        `;
};

export const statsBox1 = () => {
    return `
    <svg width="243" height="59" fill="none">
        <path d="M0 0H196.478H209.915L218.402 31L0 34V0Z" fill="#1D1A28"/>
        <path d="M0 31.6501H218.126L224.823 23L243 56.9741L0 59V31.6501Z" fill="white"/>
    </svg>
    `
};

export const statsBox2 = () => {
    return `
        <svg width="255" height="92" fill="none">
            <path d="M255 0H48.8199H34.7188L25.8129 31L255 34V0Z" fill="#1D1A28"/>
            <path d="M255 58H36.3936H21.4427L12 89L255 92V58Z" fill="#1D1A28"/>
            <path d="M255 30.8904H26.1024L19.0748 22L4.76837e-07 56.9178L255 59V30.8904Z" fill="white"/>
        </svg>
    `
};

export const typeBox2 = (attackType: Attack) => {
    return `
            <svg width="104" height="40" fill="none">
                <rect width="104" height="40" rx="20" fill="${attackType.type.color}"/>
            </svg>
        `;
};

export const attackType = (attackType: Attack) => {
    return `
        <svg width="400" height="40">
            <text x="50" y="25" text-anchor="middle" font-family="Handjet" font-weight="bold" font-size="20" fill="white">${attackType.type.name.toUpperCase()}</text>
        </svg>
        `;
};

export const statusPokemon = (statusPoints: string) => {
    return `
           <svg width="100" height="45">
            <text x="0" y="20" text-anchor="left" font-family="Handjet" font-size="20" fill="white">+${statusPoints}</text>
           </svg>       

        `;
};

export const hpSVG = (currentHp: number, totalHp: number) => {
    const hpBarSize = 160;
    const hpWidth = (currentHp / totalHp) * hpBarSize;
    return `
    <svg width="194" height="20" viewBox="0 0 194 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.94824" width="191" height="15.9655" rx="7.98276" fill="#1D1A28" stroke="#1D1A28" stroke-width="3"/>
        <rect x="27.5" y="1.94824" width="${hpWidth}" height="15.9655" rx="7.98276" fill="url(#paint0_linear_1669_162202)" stroke="#1D1A28" stroke-width="3"/>
        <path d="M8.99389 17.6618C8.99389 17.6618 8.99389 17.5285 8.99389 17.2619V16.3382V15.4145V15.0147C8.99389 15.0147 8.99389 14.8814 8.99389 14.6149V13.6912V12.7675V12.3676C8.99389 12.3676 8.99389 12.2344 8.99389 11.9678V11.0441V10.1204V9.72059C8.99389 9.72059 8.99389 9.58732 8.99389 9.32077V8.39706V7.47334V7.07353C8.99389 7.07353 8.99389 6.94026 8.99389 6.67371V5.75V4.82629V4.42647C8.99389 4.42647 8.99389 4.2932 8.99389 4.02665V3.10294V2.17923V1.77941H9.39371H10.3174H11.2411H11.641C11.641 1.77941 11.641 1.91268 11.641 2.17923V3.10294V4.02665V4.42647C11.641 4.42647 11.5077 4.42647 11.2411 4.42647H11.641C11.641 4.42647 11.641 4.55974 11.641 4.82629V5.75V6.67371V7.07353C11.641 7.07353 11.5077 7.07353 11.2411 7.07353H11.641C11.641 7.07353 11.641 7.2068 11.641 7.47334V8.39706V9.32077V9.72059C11.641 9.72059 11.5077 9.72059 11.2411 9.72059H11.641C11.641 9.72059 11.641 9.85386 11.641 10.1204V11.0441V11.9678V12.3676C11.641 12.3676 11.5077 12.3676 11.2411 12.3676H11.641C11.641 12.3676 11.641 12.5009 11.641 12.7675V13.6912V14.6149V15.0147C11.641 15.0147 11.5077 15.0147 11.2411 15.0147H11.641C11.641 15.0147 11.641 15.148 11.641 15.4145V16.3382V17.2619V17.6618C11.641 17.6618 11.5077 17.6618 11.2411 17.6618H10.3174H9.39371H8.99389ZM14.288 17.6618C14.288 17.6618 14.288 17.5285 14.288 17.2619V16.3382V15.4145V15.0147C14.288 15.0147 14.288 14.8814 14.288 14.6149V13.6912V12.7675V12.3676C14.288 12.3676 14.288 12.2344 14.288 11.9678V11.0441V10.1204V9.72059C14.288 9.72059 14.288 9.58732 14.288 9.32077V8.39706V7.47334V7.07353C14.288 7.07353 14.288 6.94026 14.288 6.67371V5.75V4.82629V4.42647C14.288 4.42647 14.288 4.2932 14.288 4.02665V3.10294V2.17923V1.77941H14.6878H15.6115H16.5353H16.9351C16.9351 1.77941 16.9351 1.91268 16.9351 2.17923V3.10294V4.02665V4.42647C16.9351 4.42647 16.8018 4.42647 16.5353 4.42647H16.9351C16.9351 4.42647 16.9351 4.55974 16.9351 4.82629V5.75V6.67371V7.07353C16.9351 7.07353 16.8018 7.07353 16.5353 7.07353H16.9351C16.9351 7.07353 16.9351 7.2068 16.9351 7.47334V8.39706V9.32077V9.72059C16.9351 9.72059 16.8018 9.72059 16.5353 9.72059H16.9351C16.9351 9.72059 16.9351 9.85386 16.9351 10.1204V11.0441V11.9678V12.3676C16.9351 12.3676 16.8018 12.3676 16.5353 12.3676H16.9351C16.9351 12.3676 16.9351 12.5009 16.9351 12.7675V13.6912V14.6149V15.0147C16.9351 15.0147 16.8018 15.0147 16.5353 15.0147H16.9351C16.9351 15.0147 16.9351 15.148 16.9351 15.4145V16.3382V17.2619V17.6618C16.9351 17.6618 16.8018 17.6618 16.5353 17.6618H15.6115H14.6878H14.288ZM8.99389 16.3382C8.99389 16.3382 8.99389 16.205 8.99389 15.9384V15.0147V14.091V13.6912C8.99389 13.6912 8.99389 13.5579 8.99389 13.2914V12.3676V11.4439V11.0441C8.99389 11.0441 8.99389 10.9108 8.99389 10.6443V9.72059V8.79687V8.39706C8.99389 8.39706 8.99389 8.26379 8.99389 7.99724V7.07353V6.14982V5.75C8.99389 5.75 8.99389 5.61673 8.99389 5.35018V4.42647V3.50276V3.10294H9.39371H10.3174H11.2411H11.641C11.641 3.10294 11.641 3.23621 11.641 3.50276V4.42647V5.35018V5.75C11.641 5.75 11.5077 5.75 11.2411 5.75H11.641C11.641 5.75 11.641 5.88327 11.641 6.14982V7.07353V7.99724V8.39706C11.641 8.39706 11.5077 8.39706 11.2411 8.39706H11.641C11.641 8.39706 11.641 8.53033 11.641 8.79687V8.39706H12.0408H12.9645H13.8882H14.288C14.288 8.39706 14.288 8.53033 14.288 8.79687V8.39706C14.288 8.39706 14.288 8.26379 14.288 7.99724V7.07353V6.14982V5.75C14.288 5.75 14.288 5.61673 14.288 5.35018V4.42647V3.50276V3.10294H14.6878H15.6115H16.5353H16.9351C16.9351 3.10294 16.9351 3.23621 16.9351 3.50276V4.42647V5.35018V5.75C16.9351 5.75 16.8018 5.75 16.5353 5.75H16.9351C16.9351 5.75 16.9351 5.88327 16.9351 6.14982V7.07353V7.99724V8.39706C16.9351 8.39706 16.8018 8.39706 16.5353 8.39706H16.9351C16.9351 8.39706 16.9351 8.53033 16.9351 8.79687V9.72059V10.6443V11.0441C16.9351 11.0441 16.8018 11.0441 16.5353 11.0441H16.9351C16.9351 11.0441 16.9351 11.1774 16.9351 11.4439V12.3676V13.2914V13.6912C16.9351 13.6912 16.8018 13.6912 16.5353 13.6912H16.9351C16.9351 13.6912 16.9351 13.8244 16.9351 14.091V15.0147V15.9384V16.3382C16.9351 16.3382 16.8018 16.3382 16.5353 16.3382H15.6115H14.6878H14.288C14.288 16.3382 14.288 16.205 14.288 15.9384V15.0147V14.091V13.6912C14.288 13.6912 14.288 13.5579 14.288 13.2914V12.3676V11.4439V11.0441C14.288 11.0441 14.288 10.9108 14.288 10.6443V11.0441C14.288 11.0441 14.1547 11.0441 13.8882 11.0441H12.9645H12.0408H11.641C11.641 11.0441 11.641 10.9108 11.641 10.6443V11.0441C11.641 11.0441 11.5077 11.0441 11.2411 11.0441H11.641C11.641 11.0441 11.641 11.1774 11.641 11.4439V12.3676V13.2914V13.6912C11.641 13.6912 11.5077 13.6912 11.2411 13.6912H11.641C11.641 13.6912 11.641 13.8244 11.641 14.091V15.0147V15.9384V16.3382C11.641 16.3382 11.5077 16.3382 11.2411 16.3382H10.3174H9.39371H8.99389ZM10.3174 11.0441C10.3174 11.0441 10.3174 10.9108 10.3174 10.6443V9.72059V8.79687V8.39706H10.7172H11.641H12.5647H12.9645C12.9645 8.39706 12.9645 8.53033 12.9645 8.79687V8.39706H13.3643H14.288H15.2117H15.6115C15.6115 8.39706 15.6115 8.53033 15.6115 8.79687V9.72059V10.6443V11.0441C15.6115 11.0441 15.4783 11.0441 15.2117 11.0441H14.288H13.3643H12.9645C12.9645 11.0441 12.9645 10.9108 12.9645 10.6443V11.0441C12.9645 11.0441 12.8312 11.0441 12.5647 11.0441H11.641H10.7172H10.3174ZM18.7164 17.6618C18.7164 17.6618 18.7164 17.5285 18.7164 17.2619V16.3382V15.4145V15.0147C18.7164 15.0147 18.7164 14.8814 18.7164 14.6149V13.6912V12.7675V12.3676C18.7164 12.3676 18.7164 12.2344 18.7164 11.9678V11.0441V10.1204V9.72059C18.7164 9.72059 18.7164 9.58732 18.7164 9.32077V8.39706V7.47334V7.07353C18.7164 7.07353 18.7164 6.94026 18.7164 6.67371V5.75V4.82629V4.42647C18.7164 4.42647 18.7164 4.2932 18.7164 4.02665V3.10294V2.17923V1.77941H19.1162H20.0399H20.9636H21.3634C21.3634 1.77941 21.3634 1.91268 21.3634 2.17923V1.77941H21.7632H22.6869H23.6107H24.0105C24.0105 1.77941 24.0105 1.91268 24.0105 2.17923V3.10294V4.02665V4.42647C24.0105 4.42647 23.8772 4.42647 23.6107 4.42647H22.6869H21.7632H21.3634C21.3634 4.42647 21.3634 4.2932 21.3634 4.02665V4.42647C21.3634 4.42647 21.2301 4.42647 20.9636 4.42647H21.3634C21.3634 4.42647 21.3634 4.55974 21.3634 4.82629V5.75V6.67371V7.07353C21.3634 7.07353 21.2301 7.07353 20.9636 7.07353H21.3634C21.3634 7.07353 21.3634 7.2068 21.3634 7.47334V8.39706V9.32077V9.72059C21.3634 9.72059 21.2301 9.72059 20.9636 9.72059H21.3634C21.3634 9.72059 21.3634 9.85386 21.3634 10.1204V9.72059H21.7632H22.6869H23.6107H24.0105C24.0105 9.72059 24.0105 9.85386 24.0105 10.1204V11.0441V11.9678V12.3676C24.0105 12.3676 23.8772 12.3676 23.6107 12.3676H22.6869H21.7632H21.3634C21.3634 12.3676 21.3634 12.2344 21.3634 11.9678V12.3676C21.3634 12.3676 21.2301 12.3676 20.9636 12.3676H21.3634C21.3634 12.3676 21.3634 12.5009 21.3634 12.7675V13.6912V14.6149V15.0147C21.3634 15.0147 21.2301 15.0147 20.9636 15.0147H21.3634C21.3634 15.0147 21.3634 15.148 21.3634 15.4145V16.3382V17.2619V17.6618C21.3634 17.6618 21.2301 17.6618 20.9636 17.6618H20.0399H19.1162H18.7164ZM18.7164 16.3382C18.7164 16.3382 18.7164 16.205 18.7164 15.9384V15.0147V14.091V13.6912C18.7164 13.6912 18.7164 13.5579 18.7164 13.2914V12.3676V11.4439V11.0441C18.7164 11.0441 18.7164 10.9108 18.7164 10.6443V9.72059V8.79687V8.39706C18.7164 8.39706 18.7164 8.26379 18.7164 7.99724V7.07353V6.14982V5.75C18.7164 5.75 18.7164 5.61673 18.7164 5.35018V4.42647V3.50276V3.10294H19.1162H20.0399H20.9636H21.3634C21.3634 3.10294 21.3634 3.23621 21.3634 3.50276V4.42647V5.35018V5.75C21.3634 5.75 21.2301 5.75 20.9636 5.75H21.3634C21.3634 5.75 21.3634 5.88327 21.3634 6.14982V7.07353V7.99724V8.39706C21.3634 8.39706 21.2301 8.39706 20.9636 8.39706H21.3634C21.3634 8.39706 21.3634 8.53033 21.3634 8.79687V9.72059V10.6443V11.0441C21.3634 11.0441 21.2301 11.0441 20.9636 11.0441H21.3634C21.3634 11.0441 21.3634 11.1774 21.3634 11.4439V12.3676V13.2914V13.6912C21.3634 13.6912 21.2301 13.6912 20.9636 13.6912H21.3634C21.3634 13.6912 21.3634 13.8244 21.3634 14.091V15.0147V15.9384V16.3382C21.3634 16.3382 21.2301 16.3382 20.9636 16.3382H20.0399H19.1162H18.7164ZM20.0399 12.3676C20.0399 12.3676 20.0399 12.2344 20.0399 11.9678V11.0441V10.1204V9.72059H20.4397H21.3634H22.2871H22.6869C22.6869 9.72059 22.6869 9.85386 22.6869 10.1204V9.72059H23.0868H24.0105H24.9342H25.334C25.334 9.72059 25.334 9.85386 25.334 10.1204V11.0441V11.9678V12.3676C25.334 12.3676 25.2007 12.3676 24.9342 12.3676H24.0105H23.0868H22.6869C22.6869 12.3676 22.6869 12.2344 22.6869 11.9678V12.3676C22.6869 12.3676 22.5537 12.3676 22.2871 12.3676H21.3634H20.4397H20.0399ZM24.0105 11.0441C24.0105 11.0441 24.0105 10.9108 24.0105 10.6443V9.72059V8.79687V8.39706C24.0105 8.39706 24.0105 8.26379 24.0105 7.99724V7.07353V6.14982V5.75C24.0105 5.75 24.0105 5.61673 24.0105 5.35018V4.42647V3.50276V3.10294H24.4103H25.334H26.2577H26.6575C26.6575 3.10294 26.6575 3.23621 26.6575 3.50276V4.42647V5.35018V5.75C26.6575 5.75 26.5243 5.75 26.2577 5.75H26.6575C26.6575 5.75 26.6575 5.88327 26.6575 6.14982V7.07353V7.99724V8.39706C26.6575 8.39706 26.5243 8.39706 26.2577 8.39706H26.6575C26.6575 8.39706 26.6575 8.53033 26.6575 8.79687V9.72059V10.6443V11.0441C26.6575 11.0441 26.5243 11.0441 26.2577 11.0441H25.334H24.4103H24.0105ZM24.0105 9.72059C24.0105 9.72059 24.0105 9.58732 24.0105 9.32077V8.39706V7.47334V7.07353C24.0105 7.07353 24.0105 6.94026 24.0105 6.67371V5.75V4.82629V4.42647H24.4103H25.334H26.2577H26.6575C26.6575 4.42647 26.6575 4.55974 26.6575 4.82629V5.75V6.67371V7.07353C26.6575 7.07353 26.5243 7.07353 26.2577 7.07353H26.6575C26.6575 7.07353 26.6575 7.2068 26.6575 7.47334V8.39706V9.32077V9.72059C26.6575 9.72059 26.5243 9.72059 26.2577 9.72059H25.334H24.4103H24.0105ZM20.0399 4.42647C20.0399 4.42647 20.0399 4.2932 20.0399 4.02665V3.10294V2.17923V1.77941H20.4397H21.3634H22.2871H22.6869C22.6869 1.77941 22.6869 1.91268 22.6869 2.17923V1.77941H23.0868H24.0105H24.9342H25.334C25.334 1.77941 25.334 1.91268 25.334 2.17923V3.10294V4.02665V4.42647C25.334 4.42647 25.2007 4.42647 24.9342 4.42647H24.0105H23.0868H22.6869C22.6869 4.42647 22.6869 4.2932 22.6869 4.02665V4.42647C22.6869 4.42647 22.5537 4.42647 22.2871 4.42647H21.3634H20.4397H20.0399Z" fill="url(#paint1_linear_1669_162202)"/>
        <defs>
            <linearGradient id="paint0_linear_1669_162202" x1="110" y1="19.4138" x2="110" y2="0.448242" gradientUnits="userSpaceOnUse">
                <stop stop-color="${hpWidth < 46 ? "#B71111" : "#76ED89"}"/>
                <stop offset="1" stop-color="${hpWidth < 46 ? "#F50303" : "#6DC99B"}"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1669_162202" x1="17.5" y1="-3" x2="17.5" y2="22" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDDA69"/>
                <stop offset="1" stop-color="#FBBC41"/>
            </linearGradient>
        </defs>
    </svg>
`;

};

function prettyName(inputString: string): string {
    let upperString = inputString.toUpperCase();
    return upperString;
}

export const pokemonSVG = (pokemonName: string) => {
    return `
            <svg width="165" height="45">
            	<text x="0" y="25" text-anchor="left" font-family='Handjet' fontfile='./public/fonts/handjet.ttf' font-size="20" fill="white" font-weight="bold">${prettyName(pokemonName)}</text>
            </svg>
      `;
};

export const hpHp = (currentHp: number, totalHp: number) => {
    return `
                <svg width="80" height="45">
                	<text x="0" y="25" text-anchor="left" font-family='Handjet' fontfile='./public/fonts/handjet.ttf' font-size="22" fill="white">${currentHp}/${totalHp}</text>
                </svg>
          `;
};
