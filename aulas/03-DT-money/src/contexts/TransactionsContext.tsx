import { createContext, ReactNode, useEffect, useState } from 'react';
import { Transaction } from '../pages/Transactions';

interface TransactionsContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json();
    setTransactions(data);
  };

  useEffect(() => {
    loadTransactions();
  }, [transactions]);
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
