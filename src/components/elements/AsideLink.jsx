/* eslint-disable react/prop-types */
export default function AsideLink(props) {
    return (
        <a aria-current="page" className="active" href="#">
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                {props.children}
            </button>
        </a>
    )
}


