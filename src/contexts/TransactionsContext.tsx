import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { api } from 'services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = useCallback(
    async (transactionInput: TransactionInput) => {
      const response = await api.post('/transactions', transactionInput);
      const { transaction } = response.data;

      setTransactions([...transactions, transaction]);
    },
    [transactions]
  );

  const memoProvider = useMemo(
    () => ({ transactions, createTransaction }),
    [createTransaction, transactions]
  );

  return (
    <TransactionsContext.Provider value={memoProvider}>
      {children}
    </TransactionsContext.Provider>
  );
}
