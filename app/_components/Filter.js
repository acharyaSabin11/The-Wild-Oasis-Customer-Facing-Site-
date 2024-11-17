'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

function Filter({ filterField, options }) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    function handleFilter(value) {
        const params = new URLSearchParams(searchParams);
        params.set(filterField, value);
        router.replace(`${pathName}?${params}`)
    }

    useEffect(function () {
        const params = new URLSearchParams('');
        params.set('capacity', 'all');
        router.replace(`${pathName}?${params}`);
    }, [router, pathName])


    return (
        <div className="flex border-2 border-primary-800 divide-x-2 divide-primary-800">
            {options.map(option =>
                <FilterButton key={option.value} handleFilter={handleFilter} value={option.value} active={option.value === searchParams.get(filterField)}>{option.label}</FilterButton>
            )}
        </div>
    )
}

function FilterButton({ children, handleFilter, value, active }) {
    return <button className={`px-6 py-2 ${active && 'bg-primary-500'}`} onClick={() => { handleFilter(value) }}>{children}</button>
}

export default Filter
