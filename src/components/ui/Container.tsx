import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
    return(
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            {children}
        </div>
    )
}