import type { ReactNode } from "react";

interface ContainerProps  {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
    return(
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            {children}
        </div>
    )
}