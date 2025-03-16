
export default function TypeIcon({ category, color }) {

    return (
        <>
            {category === 'Flèche' &&
                <svg fill={'none'} height="26" strokeWidth="1.5" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.61096 15.8891L20.6318 3.86829M8.61096 15.8891H5.78253L2.9541 18.7175H5.78253V21.546L8.61096 18.7175V15.8891ZM20.6318 3.86829H17.8033M20.6318 3.86829V6.69671"
                        stroke={color === '#fefefe' ? '#000000' : '#FFFFFF'} strokeLinecap="round" strokeLinejoin="round"
                    />
                </svg>
            }
            {category === 'Plume' &&
                <svg width="20" height="20" fill={color === '#fefefe' ? 'black' : 'white'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 16 16">
                    <path
                        d="m18,42c-2.547,0-4.899-.807-6.84-2.16l-8.16,8.16h-3v-3l8.16-8.16 27.84-27.84-29.514,24.291c-.3-1.05-.486-2.145-.486-3.291 0-6.627 32.373-30 39-30 3,0 3,0 3,3 0,6.627-23.373,39-30,39z"
                    />
                </svg>

            }
        </>
    );
}