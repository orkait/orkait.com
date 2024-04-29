interface ITimelineProps {
    timeframe: string;
    title: string;
    info: string;
    large_info: string;
    direction?: string;
}


const TimeBlock = ({
    timeframe,
    title,
    info,
    large_info,
    direction,
}: ITimelineProps) => {
    return (
        <div className={`flex sm:mr-10 mr-10 sm:flex-row-reverse items-center justify-between w-full left-timeline`}>
            <div className="order-1 flex-1"></div>
            <div className={`order-1 flex-1 py-4 ${direction === 'left' ? 'text-right' : 'text-left'}`}>
                <p className="mb-3 text-base text-green-600">
                    {timeframe}
                </p>
                <div className="mb-3 text-lg font-bold md:text-2xl capitalize">
                    {title}
                </div>
                <p className="mb-3 text-md shadow-link hover:shadow-none hover:text-red-500">
                    {info}
                </p>
                <p className="leading-snug">
                    {large_info}
                </p>
            </div>
        </div>
    )
}


export default TimeBlock;