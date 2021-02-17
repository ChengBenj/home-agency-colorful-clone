import { createContext, useState } from "react";

const defaultValue = {
    actualPage: 0,
    totalPage: 5
}

const PageContext = createContext(defaultValue);

export const PageConsumer = PageContext.Consumer;

export const PageProvider = ({ children }) => {
    const [actualPage, setActualPage] = useState(0);
    const totalPage = 5;

    const nextPage = () => {
        if (actualPage + 1 === totalPage) {
            setActualPage(0);
        } else {
            setActualPage(actualPage + 1);
        }
    }

    const previousPage = () => {
        if (actualPage === 0) {
            setActualPage(4);
        } else {
            setActualPage(actualPage - 1);
        }
    }

    const goto = (page) => {
        if (page >= 0 && page < 5)
            setActualPage(page)
    }

    return (
        <PageContext.Provider value={{
            actualPage,
            totalPage,
            nextPage,
            previousPage,
            goto
        }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;