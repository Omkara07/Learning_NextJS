import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="py-3 mt-14 flex justify-center">
                20% off for the next few days.
            </div>
            {children}
        </div>
    )
}