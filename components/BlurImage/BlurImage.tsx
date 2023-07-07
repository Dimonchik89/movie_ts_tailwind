import Image from "next/image"
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const BlurImage: React.FC<any> = ({src, propStyle, ...props}) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            {...props}
            src={src}
            objectFit="cover"
            className={cn(
                `duration-700 ease-in-out ${propStyle}`,
                isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setLoading(false)}
        />
    )
}
export default BlurImage