export default function Balloons() {
    return (
        <>
            <img
                src="/assets/ballon.gif"
                alt="balloon"
                className="absolute w-[10rem] h-auto top-0 right-5 -translate-y-[98%]"
            />
            <img
                src="/assets/ballon.gif"
                alt="balloon"
                className="absolute w-[10rem] h-auto top-0 right-8 -translate-y-[98%]"
                style={{
                    transform: "scaleX(-1)"
                }}
            /></>
    )
}