export type TransactionKind = 'deposit' | 'withdrawl';

export interface Transaction {
    id: string;
    kind: TransactionKind;
    amountCents: number; 
    note?: string;
    createdAt: string;
}

export interface Goal { 
    id: String;
    name: string;
    targetCents: number;
    deadline?: string;
    transactions: Transactions[];
    createdAt: string;
}