import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PathOption = 'dr_bob' | 'big_book';

interface AppContextType {
    selectedPath: PathOption;
    setSelectedPath: (path: PathOption) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [selectedPath, setSelectedPath] = useState<PathOption>('big_book');

    return (
        <AppContext.Provider value={{ selectedPath, setSelectedPath }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}
